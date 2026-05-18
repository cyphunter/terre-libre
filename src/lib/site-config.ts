/**
 * Source unique de vérité pour les informations du site Terre Libre.
 *
 * Marie-Laure peut éditer ce fichier pour mettre à jour coordonnées, slogans,
 * navigation, mentions légales — sans toucher au reste du code.
 *
 * Chaque clé est commentée. Garder structure plate et typée `as const`.
 *
 * Les champs marqués `À CONFIRMER` doivent être validés avec Marie-Laure
 * avant mise en ligne.
 */

export const siteConfig = {
  // ─── Identité ─────────────────────────────────────────────────────
  name: "Terre Libre",
  shortName: "Terre Libre",
  legalName: "Marie-Laure Bretel — Atelier Terre Libre", // À CONFIRMER (forme juridique exacte)
  baseline: "Atelier de céramique d'art — Ploemel, Morbihan",
  description:
    "Atelier de poterie et boutique métiers d'art à Ploemel. Création de céramiques en porcelaine et grès, cours, stages et location d'atelier en Bretagne sud.",

  // ─── URL & locale ────────────────────────────────────────────────
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://terre-libre.com",
  locale: "fr-FR",
  language: "fr",

  // ─── Contact ─────────────────────────────────────────────────────
  contact: {
    phone: "+33 6 00 00 00 00", // À CONFIRMER avec Marie-Laure
    phoneDisplay: "06 00 00 00 00",
    email: "contact@terre-libre.com", // À CONFIRMER
    address: "Adresse à confirmer", // À CONFIRMER (adresse exacte atelier Ploemel)
    postalCode: "56400",
    city: "Ploemel",
    region: "Bretagne",
    country: "FR",
    countryName: "France",
    // Coordonnées approximatives Ploemel — à ajuster avec adresse exacte
    geo: { latitude: 47.6422, longitude: -3.0461 },
    openingHours: ["Mo 10:00-17:00", "We 14:00-16:00", "Sa 10:00-12:00"],
    openingHoursLabel: "Sur rendez-vous et pendant les cours.\nVoir le planning pour les créneaux d'ouverture.",
  },

  // ─── Réseaux sociaux ─────────────────────────────────────────────
  social: {
    instagram: "https://www.instagram.com/terrelibre_ploemel/",
    facebook: "https://www.facebook.com/Terre-Libre-Vannes",
    linkedin: "",
    twitter: "",
    youtube: "",
  },

  // ─── Mentions légales ────────────────────────────────────────────
  legal: {
    siret: "À fournir", // À CONFIRMER
    rcs: "Artisanat / Chambre des Métiers du Morbihan", // À CONFIRMER
    capital: "", // si applicable (EI = pas de capital)
    publisher: "Marie-Laure Bretel",
    host: {
      name: "Cloudflare Inc.",
      address: "101 Townsend Street, San Francisco, CA 94107, USA",
    },
    dpoEmail: "contact@terre-libre.com",
  },

  // ─── Navigation principale ───────────────────────────────────────
  navigation: [
    { label: "Céramiques", href: "/ceramiques" },
    { label: "La céramiste", href: "/la-ceramiste" },
    { label: "Cours & stages", href: "/cours" },
    { label: "Expositions", href: "/expositions" },
    { label: "L'atelier", href: "/projet-de-renovation" },
    { label: "Contact", href: "/contact" },
  ],

  // ─── Navigation footer (légal) ───────────────────────────────────
  footerNavigation: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
    { label: "CGU", href: "/cgu" },
  ],

  // ─── Navigation secondaire footer (sitemap) ──────────────────────
  footerSitemap: [
    { label: "Céramiques utiles", href: "/ceramiques/utiles" },
    { label: "Céramiques décoratives", href: "/ceramiques/decoratives" },
    { label: "Série Coquillages", href: "/ceramiques/coquillages" },
    { label: "Boutique métiers d'art", href: "/boutique" },
    { label: "Cours de céramique", href: "/cours" },
    { label: "Stages thématiques", href: "/stages" },
    { label: "Planning", href: "/planning" },
    { label: "Location d'atelier", href: "/location-atelier" },
    { label: "Presse", href: "/presse" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/**
 * Construit une URL absolue canonique à partir d'un chemin.
 * Ex: canonicalUrl("/contact") → "https://terre-libre.com/contact"
 */
export function canonicalUrl(path: string): string {
  const base = siteConfig.url.replace(/\/+$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean === "/" ? "" : clean}`;
}
