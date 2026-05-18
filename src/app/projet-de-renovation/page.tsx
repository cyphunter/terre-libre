import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SplitText } from "@/components/motion/split-text";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { Ornament } from "@/components/motion/ornament";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { RenovationStep } from "@/components/public/renovation-step";
import { etapes, projetIntro } from "@/data/renovation";

export const metadata: Metadata = buildMetadata({
  title: "L'atelier — projet de rénovation",
  description:
    "Découvrez la transformation d'un ancien bar-restaurant en atelier de céramique et boutique métiers d'art à Ploemel — six étapes d'un projet de rénovation patrimoniale.",
  path: "/projet-de-renovation",
});

export default function RenovationPage() {
  return (
    <main id="main-content">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <Breadcrumb items={[{ label: "L'atelier" }]} />
      </div>

      {/* ─── Hero éditorial ─────────────────────────────────────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-end">
          <div className="md:col-span-7">
            <ScrollReveal>
              <p className="eyebrow">L'atelier</p>
            </ScrollReveal>
            <SplitText
              as="h1"
              text={projetIntro.titre}
              className="display-xl mt-6 text-ink"
            />
            <ScrollReveal delay={0.2}>
              <p className="mt-4 font-display italic-display text-2xl md:text-3xl text-brand max-w-xl">
                {projetIntro.sousTitre}
              </p>
            </ScrollReveal>
            <div className="mt-10 space-y-5 text-lg text-ink/85 leading-relaxed max-w-xl">
              {projetIntro.description.map((p, i) => (
                <ScrollReveal key={i} delay={0.3 + i * 0.1}>
                  <p>{p}</p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.5}>
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-stone/50 pt-8 max-w-xl">
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                    Étapes
                  </dt>
                  <dd className="mt-2 font-display text-4xl text-brand">
                    <AnimatedCounter to={etapes.length} />
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                    Mètres carrés
                  </dt>
                  <dd className="mt-2 font-display text-4xl text-brand">
                    <AnimatedCounter to={120} />
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                    Années
                  </dt>
                  <dd className="mt-2 font-display text-4xl text-brand">
                    <AnimatedCounter to={2} />
                  </dd>
                </div>
              </dl>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5">
            <ScrollReveal>
              <ParallaxImage
                src={projetIntro.imageHero}
                alt={projetIntro.imageAlt}
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

      {/* ─── Citation entre intro et étapes ─────────────────────── */}
      <section className="relative isolate bg-deep text-paper py-20 md:py-28 grain">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-60"
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Ornament className="mx-auto text-brand-accent" variant="diamond" />
          <SplitText
            as="p"
            text="De la bâtisse oubliée au lieu de création — six étapes patientes."
            className="mt-8 font-display text-2xl md:text-4xl text-paper italic-display leading-tight text-balance"
            stagger={0.04}
          />
        </div>
      </section>

      {/* ─── Étapes ──────────────────────────────────────────────── */}
      <section className="bg-shell/40 py-24 md:py-32 grain isolate">
        <div className="mx-auto max-w-7xl px-6 space-y-24 md:space-y-40">
          {etapes.map((etape, idx) => (
            <ScrollReveal key={etape.slug}>
              <RenovationStep etape={etape} invert={idx % 2 === 1} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-deep text-paper grain px-8 py-16 md:px-16 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70"
            />
            <div className="relative text-center">
              <Ornament className="mx-auto text-brand-accent" variant="wave" />
              <h2 className="mt-8 font-display text-3xl md:text-5xl text-paper">
                Venir visiter l'atelier
              </h2>
              <p className="mt-6 text-lg text-paper/85 max-w-2xl mx-auto leading-relaxed">
                Curieux de découvrir le résultat de cette rénovation ? L'atelier
                ouvre ses portes pendant les cours et sur rendez-vous.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-paper"
                >
                  Prendre rendez-vous
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />
                </Link>
                <Link
                  href="/boutique"
                  className="inline-flex items-center gap-3 rounded-full border border-paper/40 px-8 py-4 text-sm font-medium text-paper transition-colors hover:bg-paper/10"
                >
                  Découvrir la boutique
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
