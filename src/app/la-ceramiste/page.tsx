import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SplitText } from "@/components/motion/split-text";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { Ornament } from "@/components/motion/ornament";
import { ParcoursTimeline } from "@/components/public/parcours-timeline";
import { PersonSchema } from "@/components/seo/person-schema";
import { ceramiste } from "@/data/ceramiste";

export const metadata: Metadata = buildMetadata({
  title: "La céramiste",
  description: `Découvrez Marie-Laure Bretel, céramiste d'art à Ploemel. ${ceramiste.annees} années de tournage, porcelaine et grès blanc, formation et inspirations du Golfe du Morbihan.`,
  path: "/la-ceramiste",
  imageUrl: ceramiste.portraitImage,
});

export default function LaCeramistePage() {
  return (
    <main id="main-content">
      <PersonSchema />

      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <Breadcrumb items={[{ label: "La céramiste" }]} />
      </div>

      {/* ─── Hero portrait éditorial ──────────────────────────────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20 md:pb-32">
        <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7 md:order-1 order-2">
            <ScrollReveal>
              <p className="eyebrow">{ceramiste.titre}</p>
            </ScrollReveal>
            <SplitText
              as="h1"
              text={ceramiste.nom}
              className="display-xl mt-6 text-ink"
            />
            <ScrollReveal delay={0.2}>
              <p className="mt-6 font-display italic-display text-2xl md:text-3xl text-brand max-w-xl">
                {ceramiste.baseline}
              </p>
            </ScrollReveal>
            <div className="mt-10 space-y-6 text-lg text-ink/85 leading-relaxed max-w-xl">
              {ceramiste.introduction.map((p, i) => (
                <ScrollReveal key={i} delay={0.3 + i * 0.1}>
                  <p>{p}</p>
                </ScrollReveal>
              ))}
            </div>

            {/* Stats */}
            <ScrollReveal delay={0.5}>
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-stone/50 pt-8 max-w-xl">
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                    Tournage depuis
                  </dt>
                  <dd className="mt-2 font-display text-3xl text-brand">
                    <AnimatedCounter to={1996} prefix="" suffix="" />
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                    Années d'atelier
                  </dt>
                  <dd className="mt-2 font-display text-3xl text-brand">
                    <AnimatedCounter to={ceramiste.annees} />
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                    Techniques
                  </dt>
                  <dd className="mt-2 font-display text-3xl text-brand">
                    <AnimatedCounter to={ceramiste.techniques.length} />
                  </dd>
                </div>
              </dl>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5 md:order-2 order-1">
            <ScrollReveal>
              <ParallaxImage
                src={ceramiste.portraitImage}
                alt={ceramiste.portraitAlt}
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

      {/* ─── Citation pleine largeur ─────────────────────────────── */}
      <section className="relative isolate bg-deep text-paper py-24 md:py-32 grain">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-60"
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Ornament className="mx-auto text-brand-accent" variant="diamond" />
          <SplitText
            as="p"
            text={`«${ceramiste.citation}»`}
            className="mt-10 font-display text-2xl md:text-4xl text-paper italic-display leading-[1.3] text-balance"
            stagger={0.04}
          />
          <ScrollReveal delay={0.4}>
            <p className="mt-10 text-xs uppercase tracking-[0.3em] text-paper/60">
              Marie-Laure Bretel · 25 ans d'atelier
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Philosophie ─────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden py-24 md:py-32 bg-shell/40 grain">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-mesh-warm opacity-60"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-start">
            <div className="md:col-span-5">
              <ScrollReveal>
                <p className="eyebrow">Philosophie</p>
              </ScrollReveal>
              <SplitText
                as="h2"
                text={ceramiste.philosophie.titre}
                className="display-lg mt-6 text-ink"
              />
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-ink/85 leading-relaxed">
              {ceramiste.philosophie.paragraphes.map((p, i) => (
                <ScrollReveal key={i} delay={0.15 + i * 0.1}>
                  <p>{p}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Techniques (grille bento) ──────────────────────────── */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Savoir-faire</p>
          </ScrollReveal>
          <SplitText
            as="h2"
            text="Cinq techniques pour explorer la terre."
            className="display-lg mt-6 text-ink"
          />
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
              Du tournage à l'émaillage par aspersion — chaque geste répond à
              une intention plastique précise.
            </p>
          </ScrollReveal>
        </div>

        <ul className="mt-16 grid gap-4 md:grid-cols-6">
          {ceramiste.techniques.map((t, idx) => {
            // Mix de tailles pour donner un rythme bento
            const sizeClass =
              idx === 0
                ? "md:col-span-4"
                : idx === 1
                  ? "md:col-span-2"
                  : idx === 2
                    ? "md:col-span-2"
                    : idx === 3
                      ? "md:col-span-2"
                      : "md:col-span-2";
            return (
              <ScrollReveal
                key={t.nom}
                delay={idx * 0.06}
                as="li"
                className={sizeClass}
              >
                <article className="group h-full rounded-3xl border border-stone/40 bg-paper p-8 transition-all duration-500 hover:bg-ink hover:text-paper hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl text-brand group-hover:text-brand-accent transition-colors">
                      0{idx + 1}
                    </span>
                    <Ornament
                      className="text-brand/40 group-hover:text-brand-accent/60 transition-colors"
                      variant="diamond"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-2xl group-hover:text-paper transition-colors">
                    {t.nom}
                  </h3>
                  <p className="mt-3 text-sm text-ink/75 group-hover:text-paper/80 transition-colors leading-relaxed">
                    {t.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </ul>
      </section>

      {/* ─── Parcours timeline ──────────────────────────────────── */}
      <section className="relative isolate overflow-hidden py-24 md:py-32 bg-shell/40 grain">
        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="eyebrow">Parcours</p>
          </ScrollReveal>
          <SplitText
            as="h2"
            text="Une trajectoire de céramiste"
            className="display-lg mt-6 text-ink"
          />
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              {ceramiste.annees} années entre Vannes et Ploemel, de la première
              formation à l'atelier d'aujourd'hui.
            </p>
          </ScrollReveal>

          <div className="mt-16">
            <ParcoursTimeline parcours={ceramiste.parcours} />
          </div>
        </div>
      </section>

      {/* ─── Galerie travaux ────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Au quotidien</p>
          </ScrollReveal>
          <SplitText
            as="h2"
            text="Dans l'atelier"
            className="display-lg mt-6 text-ink"
          />
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {ceramiste.galerie.map((g, i) => (
            <ScrollReveal
              key={g.src}
              delay={i * 0.08}
              className={i % 2 === 1 ? "md:mt-16" : ""}
            >
              <figure className="group relative overflow-hidden rounded-2xl bg-shell aspect-square md:aspect-[4/5]">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover img-zoom"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-deep/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── Inspiration ─────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[55svh] md:min-h-[80svh]">
            <ParallaxImage
              src={ceramiste.inspiration.image}
              alt={ceramiste.inspiration.imageAlt}
              aspectRatio="auto"
              className="absolute inset-0 h-full w-full"
              amount={60}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative flex items-center bg-deep text-paper grain px-6 py-20 md:px-16 md:py-32">
            <div className="max-w-lg">
              <ScrollReveal>
                <p className="eyebrow text-brand-accent">Inspiration</p>
              </ScrollReveal>
              <SplitText
                as="h2"
                text={ceramiste.inspiration.titre}
                className="display-lg mt-6 text-paper"
              />
              <ScrollReveal delay={0.2}>
                <p className="mt-6 text-lg text-paper/85 leading-relaxed">
                  {ceramiste.inspiration.texte}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <Link
                  href="/ceramiques/coquillages"
                  className="mt-10 group inline-flex items-center gap-3 rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-paper"
                >
                  Découvrir la série Coquillages
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
