import type { Ceramiste } from "@/data/ceramiste";

type Props = {
  parcours: Ceramiste["parcours"];
};

export function ParcoursTimeline({ parcours }: Props) {
  return (
    <ol className="relative space-y-12">
      {parcours.map((etape, i) => (
        <li
          key={etape.annee}
          className="group relative grid gap-6 md:grid-cols-12 md:gap-10"
        >
          {/* Année gauche */}
          <div className="md:col-span-3 flex md:flex-col items-baseline md:items-start gap-4 md:gap-2">
            <p className="font-display text-5xl md:text-6xl text-brand italic-display leading-none">
              {etape.annee}
            </p>
            <span
              aria-hidden
              className="hidden md:block h-px w-16 bg-stone mt-3"
            />
          </div>

          {/* Contenu droite */}
          <div className="md:col-span-9 md:border-l border-stone/60 md:pl-10 pb-2">
            <h3 className="font-display text-2xl md:text-3xl text-ink leading-snug">
              {etape.titre}
            </h3>
            <p className="mt-1 text-sm uppercase tracking-[0.18em] text-muted">
              {etape.lieu}
            </p>
            <p className="mt-4 text-base text-ink/80 leading-relaxed max-w-xl">
              {etape.description}
            </p>
          </div>

          {/* Connecteur entre items */}
          {i < parcours.length - 1 && (
            <span
              aria-hidden
              className="hidden md:block absolute left-[12.5%] top-20 bottom-[-3rem] w-px bg-stone/40"
            />
          )}
        </li>
      ))}
    </ol>
  );
}
