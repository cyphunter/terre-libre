import Image from "next/image";
import Link from "next/link";
import { Clock, Users, Calendar, ArrowUpRight } from "lucide-react";
import type { Stage } from "@/data/stages";

export function StageCard({ stage }: { stage: Stage }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-paper border border-stone/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[5/4] overflow-hidden bg-shell">
        <Image
          src={stage.image}
          alt={stage.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover img-zoom"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent"
        />
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-paper/95 backdrop-blur px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-brand">
          {stage.niveau}
        </span>
        <span className="absolute bottom-4 right-4 inline-flex items-center rounded-full bg-ink/90 backdrop-blur px-3 py-1.5 text-xs font-medium text-paper">
          {stage.tarif} €
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-7">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-brand">
            {stage.thematique}
          </p>
          <h3 className="mt-2 font-display text-2xl text-ink leading-tight">
            {stage.titre}
          </h3>
        </div>

        <dl className="grid gap-2 text-sm text-ink/85">
          <div className="flex items-center gap-2.5">
            <Clock size={14} className="text-brand" aria-hidden />
            <dt className="sr-only">Durée</dt>
            <dd>{stage.duree}</dd>
          </div>
          <div className="flex items-center gap-2.5">
            <Calendar size={14} className="text-brand" aria-hidden />
            <dt className="sr-only">Dates</dt>
            <dd>{stage.dates}</dd>
          </div>
          <div className="flex items-center gap-2.5">
            <Users size={14} className="text-brand" aria-hidden />
            <dt className="sr-only">Places</dt>
            <dd>{stage.places} participants maximum</dd>
          </div>
        </dl>

        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-muted mb-2">
            Programme
          </p>
          <ul className="text-sm text-ink/80 space-y-1.5">
            {stage.programme.slice(0, 3).map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-brand mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
            {stage.programme.length > 3 && (
              <li className="text-xs text-muted pl-3 italic-display font-display">
                + {stage.programme.length - 3} autres points
              </li>
            )}
          </ul>
        </div>

        <Link
          href="/contact"
          className="mt-auto inline-flex items-center justify-between gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-brand"
        >
          <span>Demander des informations</span>
          <ArrowUpRight
            size={15}
            className="transition-transform duration-500 group-hover:rotate-45"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}
