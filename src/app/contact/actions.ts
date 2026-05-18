"use server";

import { contactSchema } from "@/lib/schemas/contact";
import { getResend, getContactRecipient } from "@/lib/resend";
import { ContactNotificationEmail } from "@/emails/contact-notification";
import { ContactAcknowledgeEmail } from "@/emails/contact-acknowledge";
import { siteConfig } from "@/lib/site-config";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string[]> };

const FROM = `Terre Libre <contact@terre-libre.com>`;

/**
 * Server Action pour le formulaire de contact.
 * Validation Zod, honeypot anti-spam, envoi Resend.
 */
export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const data = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
    website: String(formData.get("website") ?? ""),
    consent: formData.get("consent") === "on" || formData.get("consent") === "true",
  };

  // Honeypot : si le champ caché "website" est rempli → spam silencieux
  if (data.website.length > 0) {
    return { status: "success" }; // simulé pour ne pas signaler au bot
  }

  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Merci de corriger les erreurs dans le formulaire.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const resend = await getResend();
    const recipient = await getContactRecipient();

    // 1. Notification à Marie-Laure
    await resend.emails.send({
      from: FROM,
      to: recipient,
      replyTo: parsed.data.email,
      subject: `[${siteConfig.name}] ${parsed.data.subject}`,
      react: ContactNotificationEmail({
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || undefined,
        subject: parsed.data.subject,
        message: parsed.data.message,
      }),
    });

    // 2. Accusé de réception au demandeur (non bloquant)
    try {
      await resend.emails.send({
        from: FROM,
        to: parsed.data.email,
        subject: "Votre message — Atelier Terre Libre",
        react: ContactAcknowledgeEmail({
          name: parsed.data.name,
          subject: parsed.data.subject,
        }),
      });
    } catch (e) {
      console.error("Acknowledge email failed:", e);
    }

    return { status: "success" };
  } catch (e) {
    console.error("Contact action failed:", e);
    return {
      status: "error",
      message:
        "L'envoi du message a échoué. Réessayez dans quelques instants ou écrivez directement à " +
        siteConfig.contact.email +
        ".",
    };
  }
}
