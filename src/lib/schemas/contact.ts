import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nom trop court").max(120, "Nom trop long"),
  email: z.string().email("Email invalide").max(254),
  phone: z
    .string()
    .max(20)
    .regex(/^[\d\s+()-]*$/, "Numéro invalide")
    .optional()
    .or(z.literal("")),
  subject: z.string().min(3, "Sujet trop court").max(200),
  message: z.string().min(20, "Message trop court (20 caractères min)").max(5000),
  // Honeypot anti-spam (champ caché, doit rester vide)
  website: z.string().max(0).optional().or(z.literal("")),
  // Consentement RGPD (case à cocher obligatoire, non pré-cochée)
  consent: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter la politique de confidentialité" }),
  }),
});

export type ContactInput = z.infer<typeof contactSchema>;
