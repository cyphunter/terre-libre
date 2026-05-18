import { Resend } from "resend";
import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * Crée une instance Resend avec l'API key depuis les secrets Cloudflare.
 * En dev local, lit la clé depuis `process.env.RESEND_API_KEY` (`.dev.vars`).
 */
export async function getResend(): Promise<Resend> {
  let apiKey: string | undefined;

  try {
    const { env } = await getCloudflareContext({ async: true });
    apiKey = (env as { RESEND_API_KEY?: string }).RESEND_API_KEY;
  } catch {
    apiKey = process.env.RESEND_API_KEY;
  }

  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY manquante. En prod: `wrangler secret put RESEND_API_KEY`. En dev: éditer `.dev.vars` ou `.env.local`.",
    );
  }
  return new Resend(apiKey);
}

/**
 * Récupère l'adresse destinataire des messages du formulaire.
 * Configurable via env / secret pour éviter de redéployer si changement.
 */
export async function getContactRecipient(): Promise<string> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const fromEnv = (env as { CONTACT_RECIPIENT_EMAIL?: string }).CONTACT_RECIPIENT_EMAIL;
    if (fromEnv) return fromEnv;
  } catch {
    // dev local
  }
  return process.env.CONTACT_RECIPIENT_EMAIL ?? "contact@terre-libre.com";
}
