import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SplitText } from "@/components/motion/split-text";
import { Ornament } from "@/components/motion/ornament";
import { PressCard } from "@/components/public/press-card";
import { articles } from "@/data/presse";

export const metadata: Metadata = buildMetadata({
  title: "Presse",
  description:
    "Articles de presse — Ouest France, Le Télégramme, Métiers d'Art Bretagne — sur l'atelier Terre Libre et la céramiste Marie-Laure Bretel.",
  path: "/presse",
});

export default function PressePage() {
  return (
    <main id="main-content">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <Breadcrumb items={[{ label: "Presse" }]} />
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <header className="max-w-4xl">
          <ScrollReveal>
            <p className="eyebrow">Ils en parlent</p>
          </ScrollReveal>
          <SplitText
            as="h1"
            text="Presse & médias"
            className="display-xl mt-6 text-ink"
          />
          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-xl text-muted leading-relaxed max-w-2xl">
              Articles et reportages consacrés à l'atelier Terre Libre, au
              parcours de Marie-Laure Bretel et au projet de rénovation à
              Ploemel.
            </p>
          </ScrollReveal>
        </header>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        {articles.length === 0 ? (
          <ScrollReveal>
            <div className="rounded-3xl bg-shell/60 p-12 text-center border border-stone/40">
              <Ornament className="mx-auto text-brand" variant="diamond" />
              <p className="mt-6 font-display text-2xl text-ink">
                Aucun article référencé pour le moment
              </p>
              <p className="mt-3 text-muted">
                Les articles publiés au cours des prochains mois seront mis en
                ligne ici.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, idx) => (
              <ScrollReveal key={article.slug} delay={idx * 0.06} as="li">
                <PressCard article={article} />
              </ScrollReveal>
            ))}
          </ul>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-deep text-paper grain px-8 py-16 md:px-16 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70"
            />
            <div className="relative grid gap-8 md:grid-cols-12 items-center">
              <div className="md:col-span-8">
                <p className="eyebrow text-brand-accent">Journaliste ?</p>
                <h2 className="mt-6 font-display text-3xl md:text-5xl text-paper">
                  Visiter, photographier, interviewer
                </h2>
                <p className="mt-6 text-lg text-paper/85 leading-relaxed">
                  Pour toute demande de reportage, d'interview ou de visite de
                  l'atelier, contactez-moi directement. Photos haute définition
                  disponibles sur demande.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-paper"
                >
                  Me contacter
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
