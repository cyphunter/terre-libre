import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SplitText } from "@/components/motion/split-text";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { Ornament } from "@/components/motion/ornament";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";
import {
  boutiqueIntro,
  horairesBoutique,
  artisansInvites,
  boutiqueCommande,
} from "@/data/boutique";
import { categories } from "@/data/ceramiques";

export const metadata: Metadata = buildMetadata({
  title: "Boutique Métiers d'Art",
  description:
    "Boutique Métiers d'Art à Ploemel — céramiques de Marie-Laure Bretel et créations d'artisans invités du Morbihan : verre, bois, bijouterie d'art.",
  path: "/boutique",
});

export default function BoutiquePage() {
  return (
    <main id="main-content">
      <LocalBusinessSchema />

      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <Breadcrumb items={[{ label: "Boutique" }]} />
      </div>

      {/* ─── Hero ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-end">
          <div className="md:col-span-7">
            <ScrollReveal>
              <p className="eyebrow">Boutique métiers d'art</p>
            </ScrollReveal>
            <SplitText
              as="h1"
              text={boutiqueIntro.titre}
              className="display-xl mt-6 text-ink"
            />
            <ScrollReveal delay={0.2}>
              <p className="mt-4 font-display italic-display text-2xl md:text-3xl text-brand max-w-xl">
                {boutiqueIntro.sousTitre}
              </p>
            </ScrollReveal>
            <div className="mt-10 space-y-5 text-lg text-ink/85 leading-relaxed max-w-xl">
              {boutiqueIntro.description.map((p, i) => (
                <ScrollReveal key={i} delay={0.3 + i * 0.1}>
                  <p>{p}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <ScrollReveal>
              <ParallaxImage
                src={boutiqueIntro.imageHero}
                alt={boutiqueIntro.imageAlt}
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

      {/* ─── Catégories céramiques ──────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-shell/40 py-24 md:py-32 grain">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="eyebrow">Céramiques de Marie-Laure</p>
            </ScrollReveal>
            <SplitText
              as="h2"
              text="Pièces tournées à l'atelier"
              className="display-lg mt-6 text-ink"
            />
          </div>

          <ul className="mt-14 grid gap-8 md:grid-cols-3">
            {categories.map((cat, idx) => (
              <ScrollReveal key={cat.slug} delay={idx * 0.06} as="li">
                <Link href={`/ceramiques/${cat.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-paper">
                    <Image
                      src={cat.cover}
                      alt={cat.coverAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover img-zoom"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-ink group-hover:text-brand transition-colors">
                    {cat.label}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Artisans invités ────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Sélection</p>
          </ScrollReveal>
          <SplitText
            as="h2"
            text="Créations d'artisans invités"
            className="display-lg mt-6 text-ink"
          />
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
              Verre, bois, bijouterie — une sélection rigoureuse de créateurs
              locaux qui partagent la même exigence du geste.
            </p>
          </ScrollReveal>
        </div>

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {artisansInvites.map((artisan, idx) => (
            <ScrollReveal key={artisan.slug} delay={idx * 0.06} as="li">
              <article className="group">
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-shell">
                  <Image
                    src={artisan.image}
                    alt={artisan.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover img-zoom"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-brand">
                    {artisan.metier} · {artisan.ville}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-ink">
                    {artisan.nom}
                  </h3>
                  <p className="mt-2 text-sm text-ink/80 leading-relaxed">
                    {artisan.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </ul>
      </section>

      {/* ─── Horaires + Commande ────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-shell/40 py-24 md:py-32 grain">
        <div className="relative mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2">
          <ScrollReveal>
            <div className="h-full rounded-3xl bg-paper p-10 border border-stone/40">
              <Clock className="text-brand" size={22} aria-hidden />
              <h2 className="mt-4 font-display text-3xl text-ink">
                {horairesBoutique.titre}
              </h2>
              <ul className="mt-8 space-y-3 text-ink/85">
                {horairesBoutique.creneaux.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-muted leading-relaxed">
                {horairesBoutique.evenements}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="h-full rounded-3xl bg-paper p-10 border border-stone/40 flex flex-col">
              <Ornament className="text-brand" variant="diamond" />
              <h2 className="mt-4 font-display text-3xl text-ink">
                {boutiqueCommande.titre}
              </h2>
              <div className="mt-8 space-y-3 text-ink/85 leading-relaxed">
                {boutiqueCommande.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-auto pt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-brand"
                >
                  Réserver une pièce
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
