/**
 * Location d'atelier — deux formules :
 *  1. Céramistes individuels en espace partagé
 *  2. Groupes (team building, formations, associations)
 */

export type Equipement = {
  nom: string;
  description: string;
};

export const locationIntro = {
  titre: "Location d'atelier",
  sousTitre: "Un espace de travail partagé en Morbihan sud",
  description: [
    "L'atelier Terre Libre ouvre ses portes aux céramistes en quête d'un espace de travail équipé, et accueille également des groupes pour des prestations courtes (team building, formations, associations).",
    "Le lieu, entièrement rénové, dispose des équipements professionnels pour le tournage, le travail à la plaque, le coulage et la cuisson.",
  ],
  image: "/images/location/atelier-vue-generale.jpg",
  imageAlt: "Vue générale de l'atelier équipé",
} as const;

export const formuleIndividuels = {
  titre: "Pour céramistes individuels",
  sousTitre: "Débutants ou aguerris — espace partagé",
  description: [
    "Vous travaillez la céramique à titre professionnel ou personnel et cherchez un atelier équipé en Bretagne sud ? Terre Libre propose une location à la demi-journée, à la journée, ou en abonnement mensuel.",
    "Bénéficiez d'un environnement convivial, du partage de matériel et de connaissances, et d'une bibliothèque fournie en ouvrages techniques et historiques.",
  ],
  equipements: [
    { nom: "Espace de tournage", description: "Plusieurs tours électriques professionnels" },
    { nom: "Espace coulage", description: "Plâtre, moules, plans de travail dédiés" },
    { nom: "Crouteuses & boudineuses", description: "Préparation et mise en forme des terres" },
    { nom: "Four électrique", description: "Cuisson haute température jusqu'à 1280 °C" },
    { nom: "Bibliothèque", description: "Ouvrages techniques, livres d'artistes, revues" },
    { nom: "Émaillerie", description: "Cabines d'émaillage, bains de trempage, pulvérisateurs" },
  ] as readonly Equipement[],
  perspective:
    "Conversion future vers un four à gaz en cours d'étude — permettra l'accès à des cuissons réductrices.",
  modalite: "Contrat de location précaire après entretien sur place pour valider la pratique et le matériel utilisé.",
  tarif: "Tarifs à la demi-journée, journée ou mois — nous contacter pour devis personnalisé.",
} as const;

export const formuleGroupes = {
  titre: "Pour les groupes",
  sousTitre: "Team building, formations, associations",
  capacite: "8 à 10 personnes maximum",
  publics: [
    {
      titre: "Entreprises",
      description: "Team building autour du tournage : moment fédérateur, créatif et déconnecté du quotidien professionnel.",
    },
    {
      titre: "Formations techniques",
      description: "Sessions organisées en lien avec la Chambre de Métiers et de l'Artisanat (CMA) du Morbihan ou d'autres organismes de formation.",
    },
    {
      titre: "Associations",
      description: "Demi-journée découverte, ateliers parent-enfant, animations spécifiques.",
    },
  ],
  modalite: "Programme personnalisé selon les objectifs et la durée (demi-journée, journée, week-end).",
  contact: "Devis sur demande après échange téléphonique ou par formulaire.",
} as const;
