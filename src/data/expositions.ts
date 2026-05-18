/**
 * Expositions auxquelles Marie-Laure participe.
 * Mettre à jour chaque année.
 *
 * Pour une expo en cours : status "en-cours"
 * Pour une expo à venir : status "a-venir"
 * Pour une expo passée : status "passee"
 */

export type Exposition = {
  slug: string;
  titre: string;
  lieu: string;
  ville: string;
  dateDebut: string; // ISO YYYY-MM-DD
  dateFin: string;
  dateAffichage: string; // ex: "12 → 30 avril 2025"
  description: string;
  status: "en-cours" | "a-venir" | "passee";
  image: string;
  imageAlt: string;
  lienExterne?: string;
};

export const expositions: readonly Exposition[] = [
  {
    slug: "atelier-portes-ouvertes-printemps-2025",
    titre: "Portes ouvertes de printemps",
    lieu: "Atelier Terre Libre",
    ville: "Ploemel",
    dateDebut: "2025-04-12",
    dateFin: "2025-04-13",
    dateAffichage: "12 — 13 avril 2025",
    description:
      "Inauguration du nouvel atelier de Ploemel. Présentation des créations récentes, démonstrations de tournage, rencontres avec les céramistes locaux.",
    status: "passee",
    image: "/images/expositions/portes-ouvertes-2025.jpg",
    imageAlt: "Portes ouvertes de l'atelier Terre Libre à Ploemel",
  },
  {
    slug: "salon-metiers-art-vannes",
    titre: "Salon des Métiers d'Art",
    lieu: "Chapelle Saint-Yves",
    ville: "Vannes",
    dateDebut: "2025-06-06",
    dateFin: "2025-06-09",
    dateAffichage: "6 — 9 juin 2025",
    description:
      "Présence collective d'artisans d'art du Morbihan : céramique, verre, bois, textile, joaillerie. Pièces uniques et démonstrations.",
    status: "passee",
    image: "/images/expositions/salon-vannes.jpg",
    imageAlt: "Salon des Métiers d'Art de Vannes",
  },
  {
    slug: "europeennes-metiers-art-2025",
    titre: "Journées Européennes des Métiers d'Art",
    lieu: "Atelier Terre Libre",
    ville: "Ploemel",
    dateDebut: "2025-10-04",
    dateFin: "2025-10-05",
    dateAffichage: "4 — 5 octobre 2025",
    description:
      "Atelier ouvert dans le cadre des JEMA. Démonstrations de tournage, ateliers d'initiation pour le public, visite des étapes de la rénovation.",
    status: "a-venir",
    image: "/images/expositions/jema-2025.jpg",
    imageAlt: "Journées Européennes des Métiers d'Art à l'atelier",
  },
  {
    slug: "marche-noel-auray",
    titre: "Marché de Noël des Créateurs",
    lieu: "Halle marchande",
    ville: "Auray",
    dateDebut: "2025-12-06",
    dateFin: "2025-12-08",
    dateAffichage: "6 — 8 décembre 2025",
    description:
      "Marché de fin d'année dédié aux créateurs locaux. Idéal pour découvrir et offrir des céramiques uniques.",
    status: "a-venir",
    image: "/images/expositions/marche-noel.jpg",
    imageAlt: "Marché de Noël des Créateurs à Auray",
  },
] as const;

export function getExpositionsAVenir(): readonly Exposition[] {
  return expositions.filter((e) => e.status === "a-venir" || e.status === "en-cours");
}

export function getExpositionsPassees(): readonly Exposition[] {
  return expositions.filter((e) => e.status === "passee");
}
