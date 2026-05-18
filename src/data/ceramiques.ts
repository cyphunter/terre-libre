/**
 * Catalogue des céramiques.
 *
 * Catégories : utiles, décoratives, coquillages.
 *
 * Pour ajouter une pièce : copier un objet, modifier `slug` (unique),
 * `nom`, `categorie`, `image`, `dimensions`, `description`.
 * Le prix est indicatif — préciser "Sur demande" si négocié.
 */

export type CategorieSlug = "utiles" | "decoratives" | "coquillages";

export type Categorie = {
  slug: CategorieSlug;
  label: string;
  description: string;
  cover: string;
  coverAlt: string;
};

export type Piece = {
  slug: string;
  categorie: CategorieSlug;
  nom: string;
  description: string;
  matiere: "porcelaine" | "grès blanc" | "porcelaine et grès";
  dimensions: string;
  image: string;
  imageAlt: string;
  prixIndicatif?: string;
  unique?: boolean;
};

export const categories: readonly Categorie[] = [
  {
    slug: "utiles",
    label: "Céramiques utiles",
    description:
      "Bols, tasses, assiettes, plats — pièces pensées pour le quotidien, tournées à la main en porcelaine et grès blanc.",
    cover: "/images/ceramiques/utiles/cover.jpg",
    coverAlt: "Ensemble de bols et tasses en porcelaine sur étagère en bois",
  },
  {
    slug: "decoratives",
    label: "Céramiques décoratives",
    description:
      "Sculptures, vases, pièces uniques — recherches formelles et décoratives autour de la matière et de la lumière.",
    cover: "/images/ceramiques/decoratives/cover.jpg",
    coverAlt: "Sculpture en grès blanc émaillé, pièce décorative unique",
  },
  {
    slug: "coquillages",
    label: "Série Coquillages",
    description:
      "Inspirée du Golfe du Morbihan, cette série explore les formes du littoral — porcelaine fine, gravures, émaux nacrés.",
    cover: "/images/ceramiques/coquillages/cover.jpg",
    coverAlt: "Pièces en porcelaine inspirées des coquillages du Morbihan",
  },
] as const;

/**
 * Liste des pièces du catalogue.
 * À remplir progressivement avec Marie-Laure (photos + descriptions).
 * Placeholders pour permettre la mise en ligne avant le shooting complet.
 */
export const pieces: readonly Piece[] = [
  // ─── Céramiques utiles ─────────────────────────────────────────────
  {
    slug: "bol-tournesol",
    categorie: "utiles",
    nom: "Bol Tournesol",
    description:
      "Bol tourné en porcelaine, émail blanc cassé satiné et stries gravées rappelant les pétales.",
    matiere: "porcelaine",
    dimensions: "Ø 14 cm × H 7 cm",
    image: "/images/ceramiques/utiles/bol-tournesol.jpg",
    imageAlt: "Bol en porcelaine émail blanc avec stries gravées",
    prixIndicatif: "Sur demande",
  },
  {
    slug: "tasse-galet",
    categorie: "utiles",
    nom: "Tasse Galet",
    description:
      "Tasse en grès blanc, forme arrondie inspirée des galets du Morbihan, anse pleine confortable.",
    matiere: "grès blanc",
    dimensions: "Ø 9 cm × H 8 cm — 25 cl",
    image: "/images/ceramiques/utiles/tasse-galet.jpg",
    imageAlt: "Tasse en grès blanc, forme galet",
    prixIndicatif: "Sur demande",
  },
  {
    slug: "assiette-rivage",
    categorie: "utiles",
    nom: "Assiette Rivage",
    description:
      "Assiette plate en porcelaine, bord irrégulier rappelant la limite du sable et de l'eau.",
    matiere: "porcelaine",
    dimensions: "Ø 24 cm",
    image: "/images/ceramiques/utiles/assiette-rivage.jpg",
    imageAlt: "Assiette en porcelaine bord irrégulier",
    prixIndicatif: "Sur demande",
  },
  {
    slug: "plat-ovale",
    categorie: "utiles",
    nom: "Plat ovale tournesol",
    description:
      "Plat de service ovale en porcelaine, émail satiné, gravures fines au revers.",
    matiere: "porcelaine",
    dimensions: "L 32 cm × l 18 cm",
    image: "/images/ceramiques/utiles/plat-ovale.jpg",
    imageAlt: "Plat ovale en porcelaine, émail satiné",
    prixIndicatif: "Sur demande",
  },

  // ─── Céramiques décoratives ────────────────────────────────────────
  {
    slug: "vase-feuille",
    categorie: "decoratives",
    nom: "Vase Feuille",
    description:
      "Vase haut en grès blanc, contraste lisse/strié, déchirures volontaires apportant du mouvement.",
    matiere: "grès blanc",
    dimensions: "H 32 cm × Ø 14 cm",
    image: "/images/ceramiques/decoratives/vase-feuille.jpg",
    imageAlt: "Vase en grès blanc avec textures striées",
    prixIndicatif: "Sur demande",
    unique: true,
  },
  {
    slug: "sculpture-mouvement",
    categorie: "decoratives",
    nom: "Sculpture Mouvement",
    description:
      "Pièce unique en porcelaine et grès, recherche autour des lignes de tension et du déséquilibre.",
    matiere: "porcelaine et grès",
    dimensions: "H 28 cm × L 22 cm",
    image: "/images/ceramiques/decoratives/sculpture-mouvement.jpg",
    imageAlt: "Sculpture en porcelaine et grès",
    prixIndicatif: "Sur demande",
    unique: true,
  },

  // ─── Série Coquillages ─────────────────────────────────────────────
  {
    slug: "coquillage-nacre",
    categorie: "coquillages",
    nom: "Coquillage nacre",
    description:
      "Pièce en porcelaine fine, émaillage par aspersion façon nacre, inspirée des coquillages du Golfe.",
    matiere: "porcelaine",
    dimensions: "L 18 cm × l 12 cm",
    image: "/images/ceramiques/coquillages/coquillage-nacre.jpg",
    imageAlt: "Pièce en porcelaine façon coquillage nacré",
    prixIndicatif: "Sur demande",
    unique: true,
  },
  {
    slug: "coquillage-ombre",
    categorie: "coquillages",
    nom: "Coquillage Ombre",
    description:
      "Porcelaine teintée gris bleuté, gravures parallèles évoquant les stries d'un coquillage fossilisé.",
    matiere: "porcelaine",
    dimensions: "L 22 cm × l 14 cm",
    image: "/images/ceramiques/coquillages/coquillage-ombre.jpg",
    imageAlt: "Pièce en porcelaine grise façon coquillage gravé",
    prixIndicatif: "Sur demande",
    unique: true,
  },
] as const;

export function getPiecesByCategorie(slug: CategorieSlug): readonly Piece[] {
  return pieces.filter((p) => p.categorie === slug);
}

export function getCategorie(slug: string): Categorie | undefined {
  return categories.find((c) => c.slug === slug);
}
