import Link from "next/link";
import { Users, Clock, Calendar, ArrowUpRight } from "lucide-react";
import type { Formule } from "@/data/cours";

export function CourseCard({ formule }: { formule: Formule }) {
  const isAdult = formule.type === "adulte";
  const isDuo = formule.type === "duo";
  const label = isDuo ? "Duo parent / enfant" : isAdult ? "Adultes" : "Enfants";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-stone/40 bg-paper p-8 transition-all duration-500 hover:-translate-y-1 hover:border-ink/15 hover:shadow-soft">
      {/* Bandeau coloré subtil en haut */}
      <span
        aria-hidden
        className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand to-transparent"
      />

      <div className="flex items-baseline justify-between gap-4">
        <p className="text-[10px] uppercase tracking-[0.25em] text-brand">
          {label}
        </p>
        <span className="text-xs text-muted">
          {formule.placesLabel}
        </span>
      </div>

      <h3 className="mt-4 font-display text-3xl md:text-4xl text-ink leading-tight">
        {formule.jour}
      </h3>

      <p className="mt-2 text-sm text-muted">
        {formule.public}
      </p>

      <dl className="mt-8 grid gap-2.5 text-sm">
        <div className="flex items-center gap-2.5 text-ink/85">
          <Calendar size={15} className="text-brand" aria-hidden />
          <dt className="sr-only">Créneau</dt>
          <dd>{formule.creneau}</dd>
        </div>
        <div className="flex items-center gap-2.5 text-ink/85">
          <Clock size={15} className="text-brand" aria-hidden />
          <dt className="sr-only">Durée</dt>
          <dd>Séance de {formule.duree}</dd>
        </div>
        <div className="flex items-center gap-2.5 text-ink/85">
          <Users size={15} className="text-brand" aria-hidden />
          <dt className="sr-only">Places</dt>
          <dd>{formule.placesLabel}</dd>
        </div>
      </dl>

      <div className="mt-auto pt-8 border-t border-stone/40">
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted mb-3">
          Tarifs 2025 / 2026
        </p>
        <ul className="space-y-1.5 text-sm">
          <li className="flex items-baseline justify-between text-ink/85">
            <span>1 cours</span>
            <span className="font-medium text-ink">{formule.tarifs.unite} €</span>
          </li>
          {formule.tarifs.cinq && (
            <li className="flex items-baseline justify-between text-ink/85">
              <span>5 cours</span>
              <span className="font-medium text-ink">{formule.tarifs.cinq} €</span>
            </li>
          )}
          {formule.tarifs.dix && (
            <li className="flex items-baseline justify-between text-ink/85">
              <span>10 cours</span>
              <span className="font-medium text-ink">{formule.tarifs.dix} €</span>
            </li>
          )}
        </ul>
      </div>

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center justify-between gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-brand"
      >
        <span>Réserver ma place</span>
        <ArrowUpRight
          size={15}
          className="transition-transform duration-500 group-hover:rotate-45"
          aria-hidden
        />
      </Link>
    </article>
  );
}
