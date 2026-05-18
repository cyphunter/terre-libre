import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SplitText } from "@/components/motion/split-text";
import { Ornament } from "@/components/motion/ornament";
import { categories } from "@/data/ceramiques";

export const metadata: Metadata = buildMetadata({
  title: "Céramiques",
  description:
    "Découvrez les céramiques tournées par Marie-Laure Bretel à l'atelier Terre Libre — pièces utiles, décoratives et série Coquillages en porcelaine et grès blanc.",
  path: "/ceramiques",
});

export default function CeramiquesIndex() {
  return (
    <main id="main-content">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <Breadcrumb items={[{ label: "Céramiques" }]} />
      </div>

      {/* ─── Header éditorial ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <div className="grid gap-10 md:grid-cols-12 items-end">
          <header className="md:col-span-7">
            <ScrollReveal>
              <p className="eyebrow">Le catalogue</p>
            </ScrollReveal>
            <SplitText
              as="h1"
              text="Mes céramiques"
              className="display-xl mt-6 text-ink"
            />
            <ScrollReveal delay={0.2}>
              <p className="mt-8 text-xl text-muted leading-relaxed max-w-2xl">
                Chaque pièce naît du tournage à la main, dans l'atelier de
                Ploemel. Porcelaine et grès blanc cuits à haute température,
                émaux travaillés par trempage et aspersion.
              </p>
              <p className="mt-4 font-display italic-display text-2xl text-brand max-w-xl">
                Trois familles, un même geste — révéler la matière.
              </p>
            </ScrollReveal>
          </header>
          <ScrollReveal delay={0.3} className="md:col-span-5">
            <Ornament className="text-brand hidden md:block" variant="diamond" />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Catégories — grandes cards éditoriales ─────────────── */}
      <section
        aria-labelledby="categories-heading"
        className="mx-auto max-w-7xl px-6 pb-24 md:pb-32"
      >
        <h2 id="categories-heading" className="sr-only">
          Catégories de céramiques
        </h2>
        <ul className="space-y-20 md:space-y-32">
          {categories.map((cat, idx) => {
            const isReverse = idx % 2 === 1;
            return (
              <li key={cat.slug}>
                <Link
                  href={`/ceramiques/${cat.slug}`}
                  className="group grid gap-8 md:grid-cols-12 md:gap-16 items-center"
                >
                  <ScrollReveal
                    className={`md:col-span-7 ${isReverse ? "md:order-2" : ""}`}
                  >
                    <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-shell">
                      <Image
                        src={cat.cover}
                        alt={cat.coverAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-cover img-zoom"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-deep/20 via-transparent to-transparent"
                      />
                    </div>
                  </ScrollReveal>

                  <div
                    className={`md:col-span-5 ${isReverse ? "md:order-1" : ""}`}
                  >
                    <ScrollReveal delay={0.15}>
                      <p className="eyebrow">
                        0{idx + 1} — Famille
                      </p>
                      <h3 className="mt-6 font-display text-4xl md:text-5xl text-ink group-hover:text-brand transition-colors">
                        {cat.label}
                      </h3>
                      <p className="mt-6 text-lg text-ink/80 leading-relaxed">
                        {cat.description}
                      </p>
                      <span className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-ink">
                        <span className="link-underline">Découvrir la série</span>
                        <span
                          aria-hidden
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-all duration-500 group-hover:bg-ink group-hover:text-paper"
                        >
                          <ArrowUpRight size={15} />
                        </span>
                      </span>
                    </ScrollReveal>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ─── CTA contact ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-deep text-paper grain px-8 py-16 md:px-16 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70"
            />
            <div className="relative grid gap-8 md:grid-cols-12 items-center">
              <div className="md:col-span-7">
                <p className="eyebrow text-brand-accent">Commander</p>
                <h2 className="mt-6 font-display text-3xl md:text-5xl text-paper">
                  Une pièce vous intéresse ?
                </h2>
                <p className="mt-6 text-lg text-paper/85 leading-relaxed">
                  Toutes les pièces sont visibles à l'atelier ou peuvent être
                  réservées par contact direct. Pour les pièces uniques épuisées,
                  des commandes sur mesure sont possibles — délai de 4 à 8 semaines.
                </p>
              </div>
              <div className="md:col-span-5 md:text-right">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-paper"
                >
                  Demander une pièce
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
