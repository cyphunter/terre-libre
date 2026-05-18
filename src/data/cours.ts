/**
 * Cours de céramique — formules, créneaux et tarifs 2025/2026.
 *
 * Pour ajouter un créneau : ajouter un objet dans `formules`.
 * Pour modifier les tarifs : ajuster les valeurs dans `tarifs`.
 * Tout est statique — pas de réservation en ligne (réservation par mail/téléphone).
 */

export type FormuleType = "adulte" | "enfant" | "duo";

export type Formule = {
  type: FormuleType;
  jour: string;
  creneau: string;
  duree: string;
  public: string;
  ageMin?: number;
  places: number;
  placesLabel: string;
  tarifs: {
    unite: number;
    cinq?: number;
    dix?: number;
  };
};

export const formules: readonly Formule[] = [
  {
    type: "adulte",
    jour: "Lundi matin",
    creneau: "10h — 13h",
    duree: "3h",
    public: "Adultes — débutants à confirmés",
    places: 4,
    placesLabel: "4 places",
    tarifs: { unite: 65, cinq: 290, dix: 570 },
  },
  {
    type: "adulte",
    jour: "Lundi après-midi",
    creneau: "14h — 17h",
    duree: "3h",
    public: "Adultes — débutants à confirmés",
    places: 4,
    placesLabel: "4 places",
    tarifs: { unite: 65, cinq: 290, dix: 570 },
  },
  {
    type: "enfant",
    jour: "Mercredi après-midi",
    creneau: "14h — 16h",
    duree: "2h",
    public: "Enfants dès 7 ans",
    ageMin: 7,
    places: 6,
    placesLabel: "6 places",
    tarifs: { unite: 30, cinq: 135, dix: 260 },
  },
  {
    type: "duo",
    jour: "Samedi matin",
    creneau: "10h — 12h",
    duree: "2h",
    public: "Duos parent / enfant",
    places: 3,
    placesLabel: "3 duos maximum",
    tarifs: { unite: 60 },
  },
] as const;

export const initiationDecouverte = {
  titre: "Initiation découverte au tour",
  duree: "3h",
  description:
    "Première rencontre avec le tour, à programmer en dehors des créneaux réguliers. Idéal pour découvrir la technique avant de s'inscrire à un cycle de cours.",
  tarif: 65,
  modalite: "Sur rendez-vous individuel",
};

export const techniquesAbordees = [
  "Le tour",
  "Le travail à la plaque",
  "Le coulage",
  "Les colombins",
  "Les recherches formelles et décoratives",
  "L'émaillage",
] as const;

export const materiaux = ["Grès blanc", "Porcelaine"] as const;

export const inscription = {
  titre: "Comment s'inscrire",
  etapes: [
    "Contactez Marie-Laure via le formulaire ou par téléphone pour vérifier les places disponibles.",
    "Convenez d'une date pour un premier cours d'initiation (3h, 65 €).",
    "Si la dynamique vous plaît, inscrivez-vous au cycle de 5 ou 10 cours pour bénéficier du tarif dégressif.",
    "Les cours sont à l'atelier de Ploemel, dans une ambiance conviviale et bienveillante.",
  ],
} as const;
