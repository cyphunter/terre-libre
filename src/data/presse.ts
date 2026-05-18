/**
 * Articles de presse — médias qui ont parlé de Terre Libre.
 * Pour ajouter un article : nouveau objet en haut de la liste.
 */

export type Article = {
  slug: string;
  media: string;
  type: "presse-ecrite" | "web" | "radio" | "tv";
  titre: string;
  extrait: string;
  date: string; // ISO YYYY-MM-DD
  dateAffichage: string;
  auteur?: string;
  lienExterne?: string;
  image?: string;
  imageAlt?: string;
};

export const articles: readonly Article[] = [
  {
    slug: "ouest-france-2025-renovation",
    media: "Ouest France",
    type: "presse-ecrite",
    titre: "Marie-Laure Bretel installe son atelier de céramique à Ploemel",
    extrait:
      "Après 25 ans à Vannes, la céramiste installe son atelier dans un ancien bar-restaurant restauré au cœur de Ploemel. Un projet qui mêle artisanat, transmission et patrimoine.",
    date: "2025-03-15",
    dateAffichage: "15 mars 2025",
    auteur: "Rédaction Auray",
    image: "/images/presse/ouest-france-2025.jpg",
    imageAlt: "Coupure de presse Ouest France",
  },
  {
    slug: "telegramme-2024-portrait",
    media: "Le Télégramme",
    type: "presse-ecrite",
    titre: "Terre Libre : 24 ans de céramique, une nouvelle aventure",
    extrait:
      "Portrait de Marie-Laure Bretel, céramiste reconnue dans le Morbihan, qui prépare l'ouverture d'un nouveau lieu dédié aux métiers d'art à Ploemel.",
    date: "2024-11-08",
    dateAffichage: "8 novembre 2024",
    auteur: "Rédaction Vannes",
    image: "/images/presse/telegramme-2024.jpg",
    imageAlt: "Portrait dans Le Télégramme",
  },
  {
    slug: "metiers-art-bretagne-2024",
    media: "Métiers d'Art Bretagne",
    type: "web",
    titre: "Les ateliers d'artisans à découvrir dans le Morbihan",
    extrait:
      "Sélection d'ateliers ouverts au public : céramique, verre, lutherie. L'atelier Terre Libre à Ploemel fait partie des lieux à découvrir cette année.",
    date: "2024-09-20",
    dateAffichage: "20 septembre 2024",
    lienExterne: "https://exemple-metiers-art-bretagne.fr",
    image: "/images/presse/mab-2024.jpg",
    imageAlt: "Page web Métiers d'Art Bretagne",
  },
] as const;
