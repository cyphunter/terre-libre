/**
 * Planning hebdomadaire récurrent + dates exceptionnelles.
 * À mettre à jour à chaque rentrée (septembre).
 */

export type Creneau = {
  jour: "Lundi" | "Mardi" | "Mercredi" | "Jeudi" | "Vendredi" | "Samedi" | "Dimanche";
  heureDebut: string;
  heureFin: string;
  type: "cours" | "stage" | "atelier libre" | "fermeture";
  intitule: string;
  public: string;
  placesRestantes?: number; // si à jour
};

export const planningRecurrent: readonly Creneau[] = [
  {
    jour: "Lundi",
    heureDebut: "10h",
    heureFin: "13h",
    type: "cours",
    intitule: "Cours adultes (3h)",
    public: "Adultes débutants à confirmés",
  },
  {
    jour: "Lundi",
    heureDebut: "14h",
    heureFin: "17h",
    type: "cours",
    intitule: "Cours adultes (3h)",
    public: "Adultes débutants à confirmés",
  },
  {
    jour: "Mercredi",
    heureDebut: "14h",
    heureFin: "16h",
    type: "cours",
    intitule: "Cours enfants (2h)",
    public: "Enfants dès 7 ans",
  },
  {
    jour: "Samedi",
    heureDebut: "10h",
    heureFin: "12h",
    type: "cours",
    intitule: "Duos parent / enfant (2h)",
    public: "1 adulte + 1 enfant",
  },
] as const;

export type DateExceptionnelle = {
  date: string; // ISO YYYY-MM-DD ou plage
  intitule: string;
  type: "stage" | "vacances" | "exposition" | "marché" | "fermeture";
  description?: string;
};

export const datesExceptionnelles: readonly DateExceptionnelle[] = [
  {
    date: "2025-07-15 → 2025-08-15",
    intitule: "Vacances d'été",
    type: "vacances",
    description: "Atelier fermé — reprise des cours en septembre.",
  },
  {
    date: "2025-12-22 → 2026-01-04",
    intitule: "Vacances de fin d'année",
    type: "vacances",
  },
] as const;

export const planningInfo = {
  contact: "Pour vérifier les disponibilités et réserver : utilisez le formulaire de contact ou téléphonez à l'atelier.",
  annulation: "Toute annulation moins de 48h à l'avance est due (cours).",
  rattrapage: "Possibilité de rattrapage sur un autre créneau, dans la limite des places disponibles.",
} as const;
