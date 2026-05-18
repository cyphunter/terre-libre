import Link from "next/link";
import type { Metadata } from "next";
import { Check, ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SplitText } from "@/components/motion/split-text";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { Ornament } from "@/components/motion/ornament";
import {
  locationIntro,
  formuleIndividuels,
  formuleGroupes,
} from "@/data/location";

export const metadata: Metadata = buildMetadata({
  title: "Location d'atelier",
  description:
    "Location d'atelier de céramique équipé à Ploemel — espace partagé pour céramistes individuels ou prestations groupe (team building, formations, associations).",
  path: "/location-atelier",
});

export default function LocationPage() {
  return (
    <main id="main-content">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <Breadcrumb items={[{ label: "Location d'atelier" }]} />
      </div>

      {/* ─── Hero ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-end">
          <div className="md:col-span-7">
            <ScrollReveal>
              <p className="eyebrow">Location atelier</p>
            </ScrollReveal>
            <SplitText
              as="h1"
              text={locationIntro.titre}
              className="display-xl mt-6 text-ink"
            />
            <ScrollReveal delay={0.2}>
              <p className="mt-4 font-display italic-display text-2xl md:text-3xl text-brand max-w-xl">
                {locationIntro.sousTitre}
              </p>
            </ScrollReveal>
            <div className="mt-10 space-y-5 text-lg text-ink/85 leading-relaxed max-w-xl">
              {locationIntro.description.map((p, i) => (
                <ScrollReveal key={i} delay={0.3 + i * 0.1}>
                  <p>{p}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <ScrollReveal>
              <ParallaxImage
                src={locationIntro.image}
                alt={locationIntro.imageAlt}
                aspectRatio="3/4"
                className="rounded-3xl shadow-soft"
                amount={50}
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Formule individuels ─────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-shell/40 py-24 md:py-32 grain">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex items-baseline gap-6 mb-10">
            <span className="font-display text-7xl text-brand/30 italic-display leading-none">
              01
            </span>
            <div>
              <ScrollReveal>
                <p className="eyebrow">Formule 1</p>
              </ScrollReveal>
              <SplitText
                as="h2"
                text={formuleIndividuels.titre}
                className="display-lg mt-3 text-ink"
              />
              <ScrollReveal delay={0.2}>
                <p className="mt-3 font-display italic-display text-xl text-brand">
                  {formuleIndividuels.sousTitre}
                </p>
              </ScrollReveal>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 mt-12">
            <div className="lg:col-span-7 space-y-5 text-ink/85 leading-relaxed text-lg">
              {formuleIndividuels.description.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <p>{p}</p>
                </ScrollReveal>
              ))}
              <ScrollReveal delay={0.3}>
                <div className="mt-6 rounded-2xl border border-brand/30 bg-paper/60 p-6">
                  <p className="eyebrow">À venir</p>
                  <p className="mt-2 text-ink/80 text-base">
                    {formuleIndividuels.perspective}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2} className="lg:col-span-5">
              <div className="rounded-3xl bg-paper p-8 border border-stone/40">
                <p className="eyebrow">Équipements à disposition</p>
                <ul className="mt-6 space-y-4">
                  {formuleIndividuels.equipements.map((e) => (
                    <li key={e.nom} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-paper"
                      >
                        <Check size={12} />
                      </span>
                      <div>
                        <p className="font-medium text-ink">{e.nom}</p>
                        <p className="text-sm text-muted">{e.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-paper p-6 border border-stone/40">
                <p className="eyebrow">Modalité</p>
                <p className="mt-3 text-ink/85 leading-relaxed">
                  {formuleIndividuels.modalite}
                </p>
              </div>
              <div className="rounded-2xl bg-paper p-6 border border-stone/40">
                <p className="eyebrow">Tarif</p>
                <p className="mt-3 text-ink/85 leading-relaxed">
                  {formuleIndividuels.tarif}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Formule groupes ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex items-baseline gap-6 mb-10">
          <span className="font-display text-7xl text-brand/30 italic-display leading-none">
            02
          </span>
          <div>
            <ScrollReveal>
              <p className="eyebrow">Formule 2</p>
            </ScrollReveal>
            <SplitText
              as="h2"
              text={formuleGroupes.titre}
              className="display-lg mt-3 text-ink"
            />
            <ScrollReveal delay={0.2}>
              <p className="mt-3 font-display italic-display text-xl text-brand">
                {formuleGroupes.sousTitre}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="mt-3 text-sm font-medium text-brand uppercase tracking-[0.2em]">
                Capacité : {formuleGroupes.capacite}
              </p>
            </ScrollReveal>
          </div>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {formuleGroupes.publics.map((p, idx) => (
            <ScrollReveal key={p.titre} delay={idx * 0.08} as="li">
              <article className="h-full rounded-3xl border border-stone/40 bg-paper p-7 transition-all duration-500 hover:border-ink/15 hover:shadow-soft hover:-translate-y-0.5">
                <Ornament className="text-brand mb-5" variant="diamond" />
                <h3 className="font-display text-2xl text-ink">{p.titre}</h3>
                <p className="mt-3 text-sm text-ink/85 leading-relaxed">
                  {p.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </ul>

        <ScrollReveal delay={0.5}>
          <div className="mt-12 rounded-3xl bg-shell/60 p-8 border border-stone/40">
            <p className="text-ink/85 leading-relaxed">
              <span className="font-medium text-ink">Modalité : </span>
              {formuleGroupes.modalite}
            </p>
            <p className="mt-3 text-ink/85 leading-relaxed">
              <span className="font-medium text-ink">Contact : </span>
              {formuleGroupes.contact}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-deep text-paper grain px-8 py-16 md:px-16 md:py-24 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70"
            />
            <div className="relative">
              <Ornament className="mx-auto text-brand-accent" variant="wave" />
              <h2 className="mt-8 font-display text-3xl md:text-5xl text-paper">
                Discutons de votre projet
              </h2>
              <p className="mt-6 text-lg text-paper/85 max-w-2xl mx-auto leading-relaxed">
                Que vous soyez céramiste à la recherche d'un atelier, entreprise
                organisatrice d'un séminaire ou association porteuse d'un
                projet — contactez-moi pour un échange et une visite.
              </p>
              <Link
                href="/contact"
                className="mt-10 group inline-flex items-center gap-3 rounded-full bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-paper"
              >
                Demander un devis
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
