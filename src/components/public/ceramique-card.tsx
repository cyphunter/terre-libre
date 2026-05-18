import Image from "next/image";
import type { Piece } from "@/data/ceramiques";

export function CeramiqueCard({ piece }: { piece: Piece }) {
  return (
    <article className="group flex flex-col gap-5">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-shell">
        <Image
          src={piece.image}
          alt={piece.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover img-zoom"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-deep/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        {piece.unique && (
          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-paper/95 backdrop-blur px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-brand">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand" />
            Pièce unique
          </span>
        )}
        <span className="absolute top-4 right-4 rounded-full bg-paper/95 backdrop-blur px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-ink/80">
          {piece.matiere}
        </span>
      </div>
      <div>
        <h3 className="font-display text-2xl text-ink leading-tight">
          {piece.nom}
        </h3>
        <p className="mt-3 text-sm text-ink/75 leading-relaxed line-clamp-2">
          {piece.description}
        </p>
        <dl className="mt-5 flex items-baseline justify-between gap-4 text-sm border-t border-stone/40 pt-4">
          <div>
            <dt className="sr-only">Dimensions</dt>
            <dd className="text-muted text-xs uppercase tracking-[0.15em]">
              {piece.dimensions}
            </dd>
          </div>
          {piece.prixIndicatif && (
            <div className="text-right">
              <dt className="sr-only">Prix indicatif</dt>
              <dd className="font-medium text-ink italic-display font-display">
                {piece.prixIndicatif}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </article>
  );
}
