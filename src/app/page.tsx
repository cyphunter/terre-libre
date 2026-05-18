import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight, MapPin } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Hero } from "@/components/public/hero";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SplitText } from "@/components/motion/split-text";
import { Marquee } from "@/components/motion/marquee";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { Ornament } from "@/components/motion/ornament";
import { CourseCard } from "@/components/public/course-card";
import { EventCard } from "@/components/public/event-card";
import { ceramiste } from "@/data/ceramiste";
import { categories } from "@/data/ceramiques";
import { formules } from "@/data/cours";
import { getExpositionsAVenir } from "@/data/expositions";

export const metadata: Metadata = buildMetadata({
  title: null,
  description: siteConfig.description,
  path: "/",
});

const marqueeWords = [
  "Tournage",
  "Porcelaine",
  "Grès blanc",
  "Cuisson haute température",
  "Émaillage",
  "Gravure",
  "Coquillages",
  "Bretagne sud",
];

export default function HomePage() {
  const expositionsAVenir = getExpositionsAVenir().slice(0, 3);
  const formulesAdultes = formules.filter((f) => f.type === "adulte");

  return (
    <main id="main-content">
      <Hero
        title="Céramiques tournées en Bretagne sud"
        subtitle="Atelier Terre Libre"
        description="Atelier de poterie et boutique métiers d'art à Ploemel. Porcelaine, grès blanc, cours et stages avec Marie-Laure Bretel."
        image="/images/hero/hero-home.jpg"
        imageAlt="Pièce de céramique en porcelaine tournée à l'atelier Terre Libre"
        variant="fullscreen"
        marker={`Ploemel · ${siteConfig.contact.region}`}
        secondaryImage={{
          src: "/images/ceramiste/portrait.jpg",
          alt: "Portrait de Marie-Laure Bretel",
        }}
        highlight={{ value: `${ceramiste.annees} ans`, label: "de tournage" }}
        ctaPrimary={{ label: "Découvrir les céramiques", href: "/ceramiques" }}
        ctaSecondary={{ label: "Cours & stages", href: "/cours" }}
      />

      {/* ─── Bandeau marquee mots-clés ────────────────────────────── */}
      <div className="border-y border-stone/40 bg-shell/30">
        <Marquee items={marqueeWords} separator="✦" />
      </div>

      {/* ─── Section présentation céramiste (split + parallax) ───── */}
      <section className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-20">
          <ScrollReveal className="md:col-span-5">
            <ParallaxImage
              src="/images/ceramiste/marie-laure-travail.jpg"
              alt="Marie-Laure Bretel au travail dans son atelier"
              aspectRatio="3/4"
              className="rounded-3xl shadow-soft"
              amount={60}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </ScrollReveal>

          <div className="md:col-span-7 md:pl-8">
            <ScrollReveal>
              <p className="eyebrow">La céramiste</p>
            </ScrollReveal>

            <SplitText
              as="h2"
              text={ceramiste.nom}
              className="display-lg mt-6 text-ink"
            />

            <ScrollReveal delay={0.1}>
              <p className="mt-4 font-display italic-display text-2xl text-brand">
                {ceramiste.baseline}
              </p>
            </ScrollReveal>

            <div className="mt-8 space-y-5 text-lg text-ink/80 leading-relaxed">
              {ceramiste.introduction.map((p, i) => (
                <ScrollReveal key={i} delay={0.2 + i * 0.08}>
                  <p>{p}</p>
                </ScrollReveal>
              ))}
            </div>

            {/* Stats inline */}
            <ScrollReveal delay={0.4}>
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-stone/50 pt-8">
                <div>
                  <dt className="sr-only">Années de tournage</dt>
                  <dd className="font-display text-4xl text-brand">
                    <AnimatedCounter to={ceramiste.annees} suffix="" />
                  </dd>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted">
                    ans de tournage
                  </p>
                </div>
                <div>
                  <dt className="sr-only">Techniques maîtrisées</dt>
                  <dd className="font-display text-4xl text-brand">
                    <AnimatedCounter to={ceramiste.techniques.length} />
                  </dd>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted">
                    techniques maîtrisées
                  </p>
                </div>
                <div>
                  <dt className="sr-only">Lieu de l&apos;atelier</dt>
                  <dd className="font-display text-4xl text-brand italic-display leading-none">
                    Ploemel
                  </dd>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted">
                    Bretagne sud
                  </p>
                </div>
              </dl>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <Link
                href="/la-ceramiste"
                className="mt-10 inline-flex items-center gap-3 text-sm font-medium text-ink group"
              >
                <span className="link-underline">Lire le parcours complet</span>
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 transition-all duration-500 group-hover:bg-ink group-hover:text-paper group-hover:-translate-y-0.5"
                >
                  →
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Section catégories — bento layout magazine ───────────── */}
      <section className="relative isolate overflow-hidden bg-shell/40 py-28 md:py-40 grain">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-mesh-warm opacity-70"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="eyebrow">Le catalogue</p>
            </ScrollReveal>
            <SplitText
              as="h2"
              text="Trois familles de céramiques"
              className="display-lg mt-6 text-ink"
            />
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
                Des pièces utiles pour le quotidien aux sculptures inspirées
                du Morbihan — chaque création naît du tournage à la main.
              </p>
            </ScrollReveal>
          </div>

          {/* Bento : 1 grande à gauche + 2 carrées à droite (desktop) */}
          <ul className="mt-16 grid gap-6 md:grid-cols-12 md:grid-rows-2 md:gap-8 md:h-[640px] lg:h-[760px]">
            {/* Featured large */}
            <ScrollReveal as="li" className="md:col-span-7 md:row-span-2 md:h-full">
              <Link
                href={`/ceramiques/${categories[2].slug}`}
                className="group relative block h-full min-h-[420px] overflow-hidden rounded-3xl bg-paper"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={categories[2].cover}
                    alt={categories[2].coverAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    className="object-cover img-zoom"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/20 to-transparent"
                  />
                </div>
                <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12 text-paper">
                  <p className="text-xs uppercase tracking-[0.22em] text-paper/80">
                    Série signature
                  </p>
                  <h3 className="mt-3 font-display text-4xl md:text-5xl">
                    {categories[2].label}
                  </h3>
                  <p className="mt-3 max-w-md text-paper/85 leading-relaxed">
                    {categories[2].description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-paper transition-transform duration-500 group-hover:translate-x-1">
                    Découvrir la série
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Side cards */}
            {[categories[0], categories[1]].map((cat, i) => (
              <ScrollReveal
                key={cat.slug}
                as="li"
                className="md:col-span-5 md:h-full"
                delay={0.15 + i * 0.08}
              >
                <Link
                  href={`/ceramiques/${cat.slug}`}
                  className="group relative block h-full min-h-[260px] overflow-hidden rounded-3xl bg-paper"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={cat.cover}
                      alt={cat.coverAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover img-zoom"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/10 to-transparent"
                    />
                  </div>
                  <div className="relative z-10 flex h-full flex-col justify-end p-7 text-paper">
                    <h3 className="font-display text-3xl">{cat.label}</h3>
                    <p className="mt-2 text-sm text-paper/80 leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-paper/85 transition-transform duration-500 group-hover:translate-x-1">
                      Voir
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </ul>

          <ScrollReveal delay={0.4}>
            <div className="mt-14 flex justify-center">
              <Link
                href="/ceramiques"
                className="group inline-flex items-center gap-3 rounded-full border border-ink/15 bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                <span>Voir toutes les céramiques</span>
                <span
                  aria-hidden
                  className="transition-transform duration-500 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Citation / philosophie ───────────────────────────────── */}
      <section className="relative isolate py-28 md:py-40">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <ScrollReveal>
            <Ornament className="mx-auto text-brand" variant="diamond" />
          </ScrollReveal>
          <SplitText
            as="p"
            text="Privilégier le tournage pour des pièces harmonieuses, fonctionnelles et contemplatives."
            className="mt-10 font-display text-3xl md:text-5xl text-ink italic-display leading-[1.2] text-balance"
            stagger={0.04}
          />
          <ScrollReveal delay={0.3}>
            <p className="mt-10 text-xs uppercase tracking-[0.3em] text-muted">
              Marie-Laure Bretel — atelier de Ploemel
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section cours (split éditorial) ──────────────────────── */}
      <section className="relative bg-deep text-paper py-28 md:py-40 grain isolate overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-end">
            <div className="md:col-span-7">
              <ScrollReveal>
                <p className="eyebrow text-brand-accent">Apprendre</p>
              </ScrollReveal>
              <SplitText
                as="h2"
                text="Le tour, la plaque, le coulage."
                className="display-lg mt-6 text-paper"
              />
              <ScrollReveal delay={0.2}>
                <p className="mt-6 max-w-xl text-lg text-paper/80 leading-relaxed">
                  Cours hebdomadaires en petits groupes — adultes, enfants ou
                  duos parent-enfant. Stages thématiques sur quelques jours.
                  Matériaux, cuissons et émaillage compris.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.3} className="md:col-span-5 md:text-right">
              <Link
                href="/cours"
                className="inline-flex items-center gap-3 rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-paper"
              >
                Voir toutes les formules
                <span aria-hidden>→</span>
              </Link>
            </ScrollReveal>
          </div>

          <ul className="mt-16 grid gap-6 md:grid-cols-2">
            {formulesAdultes.map((f, idx) => (
              <ScrollReveal
                key={`${f.jour}-${f.creneau}`}
                delay={idx * 0.08}
                as="li"
              >
                <CourseCard formule={f} />
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Section expositions ──────────────────────────────────── */}
      {expositionsAVenir.length > 0 && (
        <section className="relative bg-shell/40 py-28 md:py-40 grain isolate">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-2xl">
                <ScrollReveal>
                  <p className="eyebrow">Rencontrer</p>
                </ScrollReveal>
                <SplitText
                  as="h2"
                  text="Prochains rendez-vous"
                  className="display-lg mt-6 text-ink"
                />
                <ScrollReveal delay={0.2}>
                  <p className="mt-6 text-lg text-muted leading-relaxed">
                    Expositions, journées portes ouvertes, marchés de
                    créateurs — où retrouver l'atelier dans les prochains mois.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal delay={0.3}>
                <Link
                  href="/expositions"
                  className="link-underline inline-flex items-center gap-2 text-sm font-medium text-ink whitespace-nowrap"
                >
                  Toutes les expositions
                  <span aria-hidden>→</span>
                </Link>
              </ScrollReveal>
            </div>

            <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {expositionsAVenir.map((expo, idx) => (
                <ScrollReveal key={expo.slug} delay={idx * 0.08} as="li">
                  <EventCard exposition={expo} />
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ─── Section atelier (image full bleed + texte) ───────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[60svh] md:min-h-[80svh]">
            <ParallaxImage
              src="/images/atelier/atelier-actuel.jpg"
              alt="Vue de l'atelier Terre Libre à Ploemel"
              aspectRatio="auto"
              className="absolute inset-0 h-full w-full"
              amount={50}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative flex items-center bg-deep text-paper grain px-6 py-20 md:px-16 md:py-32">
            <div className="max-w-lg">
              <ScrollReveal>
                <p className="eyebrow text-brand-accent">L'atelier</p>
              </ScrollReveal>
              <SplitText
                as="h2"
                text="Un ancien bar transformé en lieu de création"
                className="display-lg mt-6 text-paper"
              />
              <ScrollReveal delay={0.2}>
                <p className="mt-6 text-lg text-paper/80 leading-relaxed">
                  Après 25 années à Vannes, Marie-Laure a posé ses tours dans
                  une bâtisse en pierre du centre de Ploemel. Murs anciens
                  révélés, atelier baigné de lumière, boutique attenante —
                  l'atelier ouvre ses portes pendant les cours et sur
                  rendez-vous.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href="/projet-de-renovation"
                    className="group inline-flex items-center gap-3 rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-paper"
                  >
                    Suivre la rénovation
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-500 group-hover:rotate-45"
                    />
                  </Link>
                  <Link
                    href="/boutique"
                    className="link-underline text-sm font-medium text-paper"
                  >
                    La boutique métiers d'art →
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Contact final ─────────────────────────────────────── */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-mesh-warm bg-shell/60 px-8 py-20 md:px-16 md:py-28 text-center grain">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-clay/30 blur-3xl"
            />
            <Ornament className="mx-auto text-brand" variant="wave" />
            <SplitText
              as="h2"
              text="Visiter l'atelier"
              className="display-lg mt-8 text-ink"
            />
            <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              L'atelier de Ploemel ouvre ses portes pendant les cours et sur
              rendez-vous. Venez découvrir les pièces, échanger autour d'une
              création — ou réserver votre première séance.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-9 py-4 text-sm font-medium text-paper transition-colors hover:bg-brand"
              >
                Nous écrire
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              </Link>
              <Link
                href="/planning"
                className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-9 py-4 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Voir le planning
              </Link>
            </div>
            <p className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted">
              <MapPin size={13} aria-hidden className="text-brand" />
              {siteConfig.contact.postalCode} {siteConfig.contact.city} ·{" "}
              {siteConfig.contact.region}
            </p>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
