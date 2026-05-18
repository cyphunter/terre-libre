/**
 * Stages thématiques de tournage à l'atelier Terre Libre.
 * Format : week-end ou journée intensive sur un thème particulier.
 */

export type Stage = {
  slug: string;
  titre: string;
  thematique: string;
  duree: string;
  jours: number;
  dates: string;
  programme: readonly string[];
  niveau: "Débutant accepté" | "Initiés" | "Tous niveaux";
  places: number;
  tarif: number;
  image: string;
  imageAlt: string;
};

export const stages: readonly Stage[] = [
  {
    slug: "tournage-bols-tasses",
    titre: "Tournage : bols et tasses",
    thematique: "Maîtrise des formes utilitaires",
    duree: "Week-end (2 jours, 12h)",
    jours: 2,
    dates: "À programmer — consultez le planning ou demandez les prochaines dates",
    programme: [
      "Préparation et centrage de la terre",
      "Tournage de bols cylindriques et hémisphériques",
      "Tournage de tasses, formage de l'anse",
      "Tournassage et finition",
      "Notions d'émaillage",
    ],
    niveau: "Débutant accepté",
    places: 6,
    tarif: 220,
    image: "/images/stages/tournage-bols-tasses.jpg",
    imageAlt: "Atelier de tournage à l'atelier Terre Libre",
  },
  {
    slug: "tournage-vases",
    titre: "Tournage : vases et formes hautes",
    thematique: "Pièces hautes et fermées",
    duree: "Week-end (2 jours, 12h)",
    jours: 2,
    dates: "À programmer — consultez le planning",
    programme: [
      "Centrage de terres lourdes",
      "Montage progressif des formes hautes",
      "Étranglement et fermeture des panses",
      "Goulots, lèvres et finitions",
      "Décor et émaillage",
    ],
    niveau: "Initiés",
    places: 5,
    tarif: 240,
    image: "/images/stages/tournage-vases.jpg",
    imageAlt: "Vase en cours de tournage",
  },
  {
    slug: "porcelaine-emaillage",
    titre: "Porcelaine et émaillage haute température",
    thematique: "Initiation à la porcelaine",
    duree: "Journée (8h)",
    jours: 1,
    dates: "Sur demande — groupes constitués bienvenus",
    programme: [
      "Spécificités de la porcelaine",
      "Tournage de pièces fines",
      "Techniques d'émaillage par trempage et aspersion",
      "Notions de cuisson haute température",
    ],
    niveau: "Initiés",
    places: 4,
    tarif: 140,
    image: "/images/stages/porcelaine.jpg",
    imageAlt: "Tournage de porcelaine",
  },
] as const;

export const stagesInfo = {
  reservation: "Réservation et acompte de 30 % à l'inscription.",
  inclusion: "Terre, émaux, cuissons et matériel inclus dans le tarif.",
  groupe: "Possibilité d'organiser un stage privé pour un groupe — nous contacter.",
  certificat: "Sur demande, attestation de participation pour OPCO / formation continue.",
} as const;
