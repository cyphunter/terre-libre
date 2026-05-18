import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SplitText } from "@/components/motion/split-text";
import { Ornament } from "@/components/motion/ornament";
import { CourseCard } from "@/components/public/course-card";
import { CourseSchema } from "@/components/seo/course-schema";
import {
  formules,
  initiationDecouverte,
  techniquesAbordees,
  materiaux,
  inscription,
} from "@/data/cours";

export const metadata: Metadata = buildMetadata({
  title: "Cours de céramique",
  description:
    "Cours de céramique pour adultes (3h), enfants dès 7 ans (2h) et duos parent-enfant. Initiation au tour, plaque, coulage et émaillage. Tarifs 2025/2026 à partir de 30€.",
  path: "/cours",
});

export default function CoursPage() {
  return (
    <main id="main-content">
      {formules.map((f, i) => (
        <CourseSchema key={i} formule={f} />
      ))}

      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <Breadcrumb
          items={[
            { label: "Cours & stages", href: "/cours" },
            { label: "Cours" },
          ]}
        />
      </div>

      {/* ─── Hero ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-end">
          <header className="md:col-span-8">
            <ScrollReveal>
              <p className="eyebrow">Apprendre la céramique</p>
            </ScrollReveal>
            <SplitText
              as="h1"
              text="Cours de céramique"
              className="display-xl mt-6 text-ink"
            />
            <ScrollReveal delay={0.2}>
              <p className="mt-8 text-xl text-muted leading-relaxed max-w-2xl">
                Quatre créneaux hebdomadaires à l'atelier de Ploemel — adultes,
                enfants dès 7 ans et duos parent-enfant. Encadrement
                personnalisé en petits groupes (3 à 6 personnes).
              </p>
            </ScrollReveal>
          </header>

          <ScrollReveal delay={0.3} className="md:col-span-4">
            <div className="rounded-3xl bg-shell/60 p-6 border border-stone/40">
              <p className="eyebrow">Reprise</p>
              <p className="mt-3 font-display text-3xl text-ink leading-tight">
                29 septembre 2025
              </p>
              <p className="mt-2 text-sm text-muted">
                Inscription cycle 2025 / 2026 ouverte
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Formules ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <ScrollReveal>
          <p className="eyebrow mb-4">Les formules</p>
        </ScrollReveal>
        <SplitText
          as="h2"
          text="Quatre créneaux par semaine"
          className="display-lg text-ink"
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {formules.map((f, idx) => (
            <ScrollReveal
              key={`${f.jour}-${f.creneau}`}
              delay={idx * 0.06}
              as="li"
            >
              <CourseCard formule={f} />
            </ScrollReveal>
          ))}
        </ul>
      </section>

      {/* ─── Initiation découverte ─ section dark ────────────────── */}
      <section className="relative isolate overflow-hidden bg-deep text-paper grain py-24 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70"
        />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-12 items-center">
            <div className="md:col-span-7">
              <ScrollReveal>
                <p className="eyebrow text-brand-accent">Premier contact</p>
              </ScrollReveal>
              <SplitText
                as="h2"
                text={initiationDecouverte.titre}
                className="display-lg mt-6 text-paper"
              />
              <ScrollReveal delay={0.2}>
                <p className="mt-6 text-lg text-paper/85 leading-relaxed">
                  {initiationDecouverte.description}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-paper/20 pt-8">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-paper/60">
                      Durée
                    </dt>
                    <dd className="mt-2 font-display text-2xl text-paper">
                      {initiationDecouverte.duree}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-paper/60">
                      Tarif
                    </dt>
                    <dd className="mt-2 font-display text-2xl text-paper">
                      {initiationDecouverte.tarif} €
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-paper/60">
                      Modalité
                    </dt>
                    <dd className="mt-2 text-sm text-paper">
                      {initiationDecouverte.modalite}
                    </dd>
                  </div>
                </dl>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.4} className="md:col-span-5 md:text-right">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-paper"
              >
                Programmer une initiation
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Techniques + matériaux ──────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20 items-start">
          <div className="md:col-span-5">
            <ScrollReveal>
              <p className="eyebrow">Programme</p>
            </ScrollReveal>
            <SplitText
              as="h2"
              text="Techniques abordées"
              className="display-lg mt-6 text-ink"
            />
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Chaque séance est l'occasion d'explorer une ou plusieurs
                techniques fondamentales, selon votre niveau et votre projet
                personnel.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-10 rounded-3xl bg-shell/60 p-6 border border-stone/40">
                <p className="eyebrow">Matériaux</p>
                <p className="mt-3 text-ink/85 leading-relaxed">
                  Vous travaillerez avec{" "}
                  <span className="font-medium text-ink">
                    {materiaux.join(" et ")}
                  </span>
                  . Terre, émaux et cuissons sont compris dans le tarif.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ul className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {techniquesAbordees.map((t, idx) => (
              <ScrollReveal key={t} delay={0.05 * idx} as="li">
                <div className="group flex items-center gap-4 rounded-2xl bg-paper border border-stone/40 px-5 py-4 transition-all duration-500 hover:border-ink/15 hover:shadow-sm">
                  <span
                    aria-hidden
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-paper"
                  >
                    <Check size={15} />
                  </span>
                  <span className="text-sm font-medium text-ink">{t}</span>
                </div>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Inscription ─────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-shell/40 py-24 md:py-32 grain">
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="text-center">
            <ScrollReveal>
              <Ornament className="mx-auto text-brand" variant="wave" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="eyebrow mt-6 justify-center inline-flex">Pratique</p>
            </ScrollReveal>
            <SplitText
              as="h2"
              text={inscription.titre}
              className="display-lg mt-6 text-ink text-balance"
            />
          </div>

          <ol className="mt-16 grid gap-8 md:grid-cols-2">
            {inscription.etapes.map((etape, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08} as="li">
                <div className="flex gap-5">
                  <span
                    aria-hidden
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-paper font-display text-lg"
                  >
                    {idx + 1}
                  </span>
                  <p className="pt-2.5 text-ink/85 leading-relaxed">{etape}</p>
                </div>
              </ScrollReveal>
            ))}
          </ol>

          <ScrollReveal delay={0.5}>
            <div className="mt-14 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors hover:bg-brand"
              >
                M'inscrire à un cours
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              </Link>
              <Link
                href="/planning"
                className="inline-flex items-center gap-3 rounded-full border border-ink/15 bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Voir le planning
                <span aria-hidden>→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
