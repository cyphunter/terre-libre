/**
 * Boutique Métiers d'Art — catalogue de pièces présentées à l'atelier.
 * Pas de vente en ligne : c'est un catalogue qui invite à venir à l'atelier
 * ou à commander par contact direct.
 */

export type ArtisanInvite = {
  slug: string;
  nom: string;
  metier: string;
  description: string;
  ville: string;
  image: string;
  imageAlt: string;
  siteWeb?: string;
};

export const boutiqueIntro = {
  titre: "Une vitrine des métiers d'art en Morbihan",
  sousTitre: "Céramiques de Marie-Laure & créations d'artisans invités",
  description: [
    "Adossée à l'atelier, la Boutique Métiers d'Art rassemble les céramiques de Marie-Laure Bretel et les créations d'artisans invités, sélectionnés pour la qualité de leur travail et leur ancrage territorial.",
    "Chaque pièce est unique ou produite en petite série. La boutique est ouverte sur les créneaux de présence à l'atelier et lors des journées dédiées (JEMA, marchés, portes ouvertes).",
  ],
  imageHero: "/images/boutique/hero.jpg",
  imageAlt: "Vue de la Boutique Métiers d'Art à Ploemel",
} as const;

export const horairesBoutique = {
  titre: "Horaires d'ouverture",
  creneaux: [
    "Lundi : 10h — 17h (pendant les cours)",
    "Mercredi : 14h — 16h (pendant les cours enfants)",
    "Samedi : 10h — 12h (cours duos parent-enfant)",
    "Sur rendez-vous en dehors de ces créneaux",
  ],
  evenements:
    "Ouvertures exceptionnelles pendant les JEMA, marchés de Noël et journées portes ouvertes — voir le planning des expositions.",
} as const;

export const artisansInvites: readonly ArtisanInvite[] = [
  {
    slug: "invite-verrier",
    nom: "Verrier invité",
    metier: "Soufflage de verre",
    description:
      "Pièces soufflées à la canne, palette de verts et de bleus inspirés du littoral.",
    ville: "Auray",
    image: "/images/boutique/artisan-verre.jpg",
    imageAlt: "Pièces en verre soufflé",
  },
  {
    slug: "invite-bois",
    nom: "Tourneur sur bois invité",
    metier: "Tournage de bois",
    description:
      "Coupes, plateaux et sculptures tournées dans des essences locales (chêne, frêne, olivier).",
    ville: "Carnac",
    image: "/images/boutique/artisan-bois.jpg",
    imageAlt: "Pièces en bois tourné",
  },
  {
    slug: "invite-bijoutier",
    nom: "Bijoutière invitée",
    metier: "Bijouterie d'art",
    description:
      "Bijoux contemporains en argent recyclé, pièces minimalistes inspirées des formes minérales.",
    ville: "Quiberon",
    image: "/images/boutique/artisan-bijou.jpg",
    imageAlt: "Bijoux contemporains en argent",
  },
] as const;

export const boutiqueCommande = {
  titre: "Commander une pièce",
  description: [
    "Toutes les pièces présentées sont disponibles à l'atelier — ou peuvent être réservées par contact direct.",
    "Pour les pièces uniques épuisées, des commandes sur mesure sont possibles (délai 4 — 8 semaines selon la complexité).",
    "Envois par colis sécurisé en France et en Europe sur demande.",
  ],
} as const;
