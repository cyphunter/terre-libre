import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, Users, ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SplitText } from "@/components/motion/split-text";
import {
  planningRecurrent,
  datesExceptionnelles,
  planningInfo,
} from "@/data/planning";

export const metadata: Metadata = buildMetadata({
  title: "Planning cours & stages",
  description:
    "Planning hebdomadaire des cours de céramique de l'atelier Terre Libre à Ploemel — créneaux récurrents et dates exceptionnelles (vacances, stages, expositions).",
  path: "/planning",
});

const typeLabel: Record<string, string> = {
  cours: "Cours",
  stage: "Stage",
  "atelier libre": "Atelier libre",
  fermeture: "Fermeture",
  vacances: "Vacances",
  exposition: "Exposition",
  marché: "Marché",
};

const typeColor: Record<string, string> = {
  cours: "bg-brand text-paper",
  stage: "bg-brand-accent text-deep",
  "atelier libre": "bg-sand text-deep",
  fermeture: "bg-stone text-deep",
  vacances: "bg-stone text-deep",
  exposition: "bg-success text-paper",
  marché: "bg-warning text-deep",
};

export default function PlanningPage() {
  return (
    <main id="main-content">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <Breadcrumb
          items={[
            { label: "Cours & stages", href: "/cours" },
            { label: "Planning" },
          ]}
        />
      </div>

      {/* ─── Hero ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <header className="max-w-4xl">
          <ScrollReveal>
            <p className="eyebrow">Organisation</p>
          </ScrollReveal>
          <SplitText
            as="h1"
            text="Planning des cours"
            className="display-xl mt-6 text-ink"
          />
          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-xl text-muted leading-relaxed max-w-2xl">
              Les cours hebdomadaires reprennent toute l'année, à l'exception
              des vacances scolaires d'été et de fin d'année. Les stages
              thématiques sont programmés à part.
            </p>
          </ScrollReveal>
        </header>
      </section>

      {/* ─── Créneaux hebdomadaires ──────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <SplitText
          as="h2"
          text="Créneaux hebdomadaires"
          className="display-lg text-ink"
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {planningRecurrent.map((creneau, idx) => (
            <ScrollReveal
              key={`${creneau.jour}-${creneau.heureDebut}`}
              delay={idx * 0.05}
              as="li"
            >
              <article className="group rounded-3xl border border-stone/40 bg-paper p-7 transition-all duration-500 hover:border-ink/15 hover:shadow-sm hover:-translate-y-0.5">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl text-ink">
                      {creneau.jour}
                    </p>
                    <p className="mt-1 text-sm text-muted flex items-center gap-1.5">
                      <Clock size={14} className="text-brand" aria-hidden />
                      {creneau.heureDebut} — {creneau.heureFin}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] ${typeColor[creneau.type] ?? ""}`}
                  >
                    {typeLabel[creneau.type] ?? creneau.type}
                  </span>
                </div>
                <p className="mt-5 font-display text-lg text-ink">
                  {creneau.intitule}
                </p>
                <p className="mt-2 text-sm text-muted flex items-center gap-1.5">
                  <Users size={14} className="text-brand" aria-hidden />
                  {creneau.public}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </ul>
      </section>

      {/* ─── Dates exceptionnelles ───────────────────────────────── */}
      {datesExceptionnelles.length > 0 && (
        <section className="relative isolate overflow-hidden bg-shell/40 py-24 md:py-32 grain">
          <div className="relative mx-auto max-w-5xl px-6">
            <SplitText
              as="h2"
              text="Dates exceptionnelles"
              className="display-lg text-ink"
            />
            <ul className="mt-12 space-y-3">
              {datesExceptionnelles.map((d, idx) => (
                <ScrollReveal
                  key={`${d.date}-${idx}`}
                  delay={idx * 0.04}
                  as="li"
                >
                  <article className="rounded-2xl border border-stone/40 bg-paper p-6 transition-shadow duration-500 hover:shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] ${typeColor[d.type] ?? ""}`}
                        >
                          {typeLabel[d.type] ?? d.type}
                        </span>
                        <p className="font-display text-xl text-ink">
                          {d.intitule}
                        </p>
                      </div>
                      <p className="text-sm text-muted flex items-center gap-1.5">
                        <Calendar size={14} className="text-brand" aria-hidden />
                        {d.date}
                      </p>
                    </div>
                    {d.description && (
                      <p className="mt-3 text-sm text-ink/80 leading-relaxed">
                        {d.description}
                      </p>
                    )}
                  </article>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ─── Réservation & annulation ────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-deep text-paper grain p-10 md:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70"
            />
            <div className="relative">
              <p className="eyebrow text-brand-accent">Pratique</p>
              <h2 className="mt-6 font-display text-3xl md:text-5xl text-paper">
                Réservation et annulation
              </h2>
              <dl className="mt-10 grid gap-8 md:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-brand-accent">
                    Contact
                  </dt>
                  <dd className="mt-2 text-paper/85 text-sm leading-relaxed">
                    {planningInfo.contact}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-brand-accent">
                    Annulation
                  </dt>
                  <dd className="mt-2 text-paper/85 text-sm leading-relaxed">
                    {planningInfo.annulation}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-brand-accent">
                    Rattrapage
                  </dt>
                  <dd className="mt-2 text-paper/85 text-sm leading-relaxed">
                    {planningInfo.rattrapage}
                  </dd>
                </div>
              </dl>
              <Link
                href="/contact"
                className="mt-10 group inline-flex items-center gap-3 rounded-full bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-paper"
              >
                Réserver un créneau
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
