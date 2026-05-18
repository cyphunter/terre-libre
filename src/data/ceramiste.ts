/**
 * Présentation de la céramiste Marie-Laure Bretel.
 * Source de contenu pour la page /la-ceramiste.
 */

export const ceramiste = {
  nom: "Marie-Laure Bretel",
  titre: "Céramiste d'art",
  baseline: "Porcelaine et grès blanc, tournés à Ploemel",
  portraitImage: "/images/ceramiste/portrait.jpg",
  portraitAlt:
    "Marie-Laure Bretel, céramiste d'art, dans son atelier de Ploemel",

  introduction: [
    "Céramiste d'art, je travaille la porcelaine et le grès blanc. Passionnée par le tournage depuis mes débuts, je m'attache à produire des pièces harmonieuses, fonctionnelles et également contemplatives.",
    "Mon inspiration vient de l'environnement naturel qui m'entoure : les teintes océaniques du Golfe du Morbihan, les longues plages de sable clair, les formations rocheuses du littoral. Cette imprégnation par le territoire breton traverse chacune de mes créations.",
  ],

  philosophie: {
    titre: "Une esthétique de contrastes",
    paragraphes: [
      "Mon approche esthétique repose sur les contrastes : je juxtapose les surfaces lisses et émaillées aux textures striées et gravées, employant lignes et déchirures pour apporter du mouvement aux pièces.",
      "Chaque création naît d'un dialogue entre la terre et le geste, entre l'imprévu du tour et la maîtrise patiente du métier. La céramique devient alors un langage — celui d'une artisane qui cherche à révéler la beauté discrète des matériaux.",
    ],
  },

  citation:
    "Terre Libre a commencé son aventure à Vannes en 2000. Déjà 25 ans ! Tant de doutes et de surprises avec la Terre.",

  techniques: [
    {
      nom: "Céramiques haute température",
      description: "Cuisson à des températures supérieures à 1250 °C, garantissant solidité et vitrification du grès et de la porcelaine.",
    },
    {
      nom: "Tournage",
      description: "Technique de prédilection depuis 1996 : modelage d'une boule de terre sur le tour pour créer bols, tasses, vases et pièces uniques.",
    },
    {
      nom: "Travail à la plaque",
      description: "Formage par découpe et assemblage de plaques de terre roulées — idéal pour les pièces géométriques ou sculpturales.",
    },
    {
      nom: "Coulage",
      description: "Utilisé ponctuellement pour les pièces complexes, le coulage de barbotine dans des moules en plâtre permet la reproduction fidèle de formes.",
    },
    {
      nom: "Émaillage par trempage et aspersion",
      description: "Maîtrise des épaisseurs d'émail pour obtenir des nuances et des effets de matière propres à chaque pièce.",
    },
  ] as const,

  parcours: [
    {
      annee: "1996",
      titre: "Stage avec Janet Buisine",
      lieu: "Grès noir, émaillage cobalt",
      description: "Première rencontre déterminante avec le tour et la céramique haute température.",
    },
    {
      annee: "1997",
      titre: "École Agir Céramique",
      lieu: "Alzon (Gard)",
      description: "Formation approfondie en techniques céramiques et travail de la matière.",
    },
    {
      annee: "2000",
      titre: "Fondation de l'atelier Terre Libre",
      lieu: "Vannes (Morbihan)",
      description: "Installation à Vannes — début de l'aventure Terre Libre. Cours, stages et créations personnelles.",
    },
    {
      annee: "2010 — 2011",
      titre: "Centre Prométer — Patricia Cassonne & Rizü Takahashi",
      lieu: "Limousin",
      description: "Stages spécialisés en textures gravées, émaillages et techniques japonaises.",
    },
    {
      annee: "2024 — 2025",
      titre: "Installation du nouvel atelier",
      lieu: "Ploemel (Morbihan)",
      description: "Réhabilitation d'un ancien bar-restaurant en atelier de céramique et boutique métiers d'art.",
    },
  ] as const,

  inspiration: {
    titre: "Le Golfe du Morbihan, atelier à ciel ouvert",
    texte:
      "Les teintes océaniques, les longues plages de sable clair et les formations rocheuses du littoral breton irriguent chaque création. La série Coquillages, en particulier, traduit cette imprégnation par le territoire — fragiles architectures de calcaire que la mer dépose au pied de l'atelier.",
    image: "/images/ceramiste/inspiration-morbihan.jpg",
    imageAlt: "Vue du Golfe du Morbihan — source d'inspiration de la céramiste",
  },

  galerie: [
    {
      src: "/images/ceramiste/marie-laure-travail.jpg",
      alt: "Marie-Laure Bretel au travail dans son atelier",
    },
    {
      src: "/images/ceramiste/regagnas.jpg",
      alt: "Atelier en pleine activité",
    },
    {
      src: "/images/hero/ceramique-1.jpg",
      alt: "Pièce en porcelaine sortie du tour",
    },
    {
      src: "/images/hero/ceramique-2.jpg",
      alt: "Détail d'une pièce émaillée",
    },
  ] as const,

  annees: 25, // 2000 → 2025
  fondation: 2000,
} as const;

export type Ceramiste = typeof ceramiste;
