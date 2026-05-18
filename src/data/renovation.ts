/**
 * Projet de rénovation — transformation d'un ancien bar-restaurant
 * en atelier de céramique et boutique métiers d'art à Ploemel.
 *
 * 6 étapes du chantier — chacune avec photos avant/pendant/après.
 */

export type EtapeRenovation = {
  numero: number;
  slug: string;
  titre: string;
  sousTitre: string;
  texte: readonly string[];
  imagePrincipale: string;
  imageAlt: string;
  imagesSecondaires?: readonly { src: string; alt: string }[];
  date: string;
};

export const projetIntro = {
  titre: "Un ancien bar-restaurant transformé en atelier",
  sousTitre: "De la bâtisse oubliée au lieu de création",
  description: [
    "Après 25 années passées à Vannes, Marie-Laure Bretel a fait le pari de relocaliser son atelier dans le centre de Ploemel. Le projet : redonner vie à un ancien bar-restaurant en pierre, abandonné depuis plusieurs années.",
    "L'objectif est double — créer un espace de travail à la mesure d'une production exigeante, et ouvrir au public une boutique métiers d'art qui valorise les artisans locaux.",
  ],
  imageHero: "/images/renovation/hero-batiment.jpg",
  imageAlt: "Le bâtiment de l'atelier Terre Libre à Ploemel",
} as const;

export const etapes: readonly EtapeRenovation[] = [
  {
    numero: 1,
    slug: "etat-initial",
    titre: "L'état initial",
    sousTitre: "Le bar-restaurant d'origine",
    texte: [
      "Le bâtiment est resté fermé plusieurs années avant l'acquisition. Une bâtisse en pierre typique du Morbihan, avec un volume bar/restaurant au rez-de-chaussée et un étage à reconfigurer entièrement.",
      "Premier diagnostic : la structure est saine, mais tout le second œuvre est à reprendre — électricité, plomberie, isolation, sols.",
    ],
    imagePrincipale: "/images/renovation/01-etat-initial.jpg",
    imageAlt: "État initial du bar-restaurant avant rénovation",
    date: "Automne 2023",
  },
  {
    numero: 2,
    slug: "gros-oeuvre",
    titre: "Les travaux de gros œuvre",
    sousTitre: "Démolition, reprise de structure, ouvertures",
    texte: [
      "Dépose des cloisons existantes pour redéfinir les volumes. Reprise de quelques linteaux et création d'une nouvelle ouverture sur l'arrière pour faire entrer la lumière dans le futur atelier.",
      "L'enjeu : préserver le caractère ancien (pierre apparente, poutres) tout en gagnant en clarté.",
    ],
    imagePrincipale: "/images/renovation/02-gros-oeuvre.jpg",
    imageAlt: "Travaux de gros œuvre — démolition et reprise de structure",
    date: "Hiver 2023 — Printemps 2024",
  },
  {
    numero: 3,
    slug: "creation-atelier",
    titre: "La création de l'atelier",
    sousTitre: "Espace de production, tours, fours",
    texte: [
      "Installation des tours, d'un grand plan de travail central, et préparation du raccordement électrique renforcé pour les fours. Mise en place d'une ventilation adaptée à la poussière fine de la céramique.",
      "Le sol est repris en béton lissé, simple à nettoyer et compatible avec les exigences d'une activité de tournage.",
    ],
    imagePrincipale: "/images/renovation/03-atelier.jpg",
    imageAlt: "Création de l'atelier de céramique — installation des tours",
    date: "Été 2024",
  },
  {
    numero: 4,
    slug: "modifications-cafe",
    titre: "Les modifications du café",
    sousTitre: "L'ancien bar devient lieu d'accueil",
    texte: [
      "L'ancien bar est conservé dans son esprit mais reconfiguré pour devenir un espace d'accueil et de présentation. Un coin lecture / café est aménagé pour les pauses des stagiaires et les visiteurs.",
      "Le mobilier d'origine est restauré et complété par quelques pièces chinées localement.",
    ],
    imagePrincipale: "/images/renovation/04-cafe.jpg",
    imageAlt: "Espace d'accueil — ancien bar reconfiguré",
    date: "Automne 2024",
  },
  {
    numero: 5,
    slug: "restauration-pierre",
    titre: "La restauration des structures en pierre",
    sousTitre: "Mise en valeur du patrimoine bâti",
    texte: [
      "Décroûtage des enduits modernes pour révéler les murs en pierre d'origine. Joints à la chaux refaits à l'identique, dans le respect des techniques traditionnelles.",
      "Le résultat met en dialogue les murs anciens et les éléments contemporains de l'atelier.",
    ],
    imagePrincipale: "/images/renovation/05-pierre.jpg",
    imageAlt: "Restauration des structures murales en pierre",
    date: "Hiver 2024",
  },
  {
    numero: 6,
    slug: "amenagement-boutique",
    titre: "L'aménagement de la boutique",
    sousTitre: "La Boutique Métiers d'Art prend forme",
    texte: [
      "Aménagement de la zone boutique : étagères sur mesure en bois clair, éclairage muséographique pour mettre en valeur les pièces, signalétique sobre.",
      "L'ouverture officielle au public est prévue pour l'été 2025 — les premières pièces y sont déjà présentées en avant-première.",
    ],
    imagePrincipale: "/images/renovation/06-boutique.jpg",
    imageAlt: "Aménagement final de la boutique métiers d'art",
    date: "Printemps 2025",
  },
] as const;
