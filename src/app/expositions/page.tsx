import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SplitText } from "@/components/motion/split-text";
import { Ornament } from "@/components/motion/ornament";
import { EventCard } from "@/components/public/event-card";
import { EventSchema } from "@/components/seo/event-schema";
import {
  getExpositionsAVenir,
  getExpositionsPassees,
  expositions,
} from "@/data/expositions";

export const metadata: Metadata = buildMetadata({
  title: "Expositions",
  description:
    "Calendrier des expositions, marchés de créateurs et journées portes ouvertes de Marie-Laure Bretel — atelier Terre Libre, Ploemel, Morbihan.",
  path: "/expositions",
});

export default function ExpositionsPage() {
  const aVenir = getExpositionsAVenir();
  const passees = getExpositionsPassees();

  return (
    <main id="main-content">
      {expositions.map((expo) => (
        <EventSchema key={expo.slug} exposition={expo} />
      ))}

      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <Breadcrumb items={[{ label: "Expositions" }]} />
      </div>

      {/* ─── Hero ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-end">
          <header className="md:col-span-8">
            <ScrollReveal>
              <p className="eyebrow">Rencontrer</p>
            </ScrollReveal>
            <SplitText
              as="h1"
              text="Expositions & rendez-vous"
              className="display-xl mt-6 text-ink"
            />
            <ScrollReveal delay={0.2}>
              <p className="mt-8 text-xl text-muted leading-relaxed max-w-2xl">
                Journées portes ouvertes, salons de métiers d'art et marchés de
                créateurs en Bretagne sud — où retrouver l'atelier Terre Libre
                tout au long de l'année.
              </p>
            </ScrollReveal>
          </header>
          <ScrollReveal delay={0.3} className="md:col-span-4">
            <div className="rounded-3xl bg-shell/60 p-6 border border-stone/40">
              <p className="eyebrow">Évènements à venir</p>
              <p className="mt-3 font-display text-5xl text-brand italic-display leading-none">
                {aVenir.length}
              </p>
              <p className="mt-2 text-sm text-muted">
                Prochains rendez-vous publics
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── À venir ─────────────────────────────────────────────── */}
      {aVenir.length > 0 ? (
        <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <SplitText
              as="h2"
              text="À venir"
              className="display-lg text-ink"
            />
            <p className="text-sm text-muted">
              {aVenir.length} évènement{aVenir.length > 1 ? "s" : ""} à venir
            </p>
          </div>
          <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {aVenir.map((expo, idx) => (
              <ScrollReveal key={expo.slug} delay={idx * 0.06} as="li">
                <EventCard exposition={expo} />
              </ScrollReveal>
            ))}
          </ul>
        </section>
      ) : (
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <ScrollReveal>
            <div className="rounded-3xl bg-shell/60 p-12 text-center border border-stone/40">
              <Ornament className="mx-auto text-brand" variant="diamond" />
              <p className="mt-6 font-display text-2xl text-ink">
                Pas d'évènement prévu pour le moment
              </p>
              <p className="mt-3 text-muted">
                Le prochain calendrier est en préparation — revenez bientôt
                ou suivez l'atelier sur Instagram.
              </p>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ─── Archives ────────────────────────────────────────────── */}
      {passees.length > 0 && (
        <section className="relative isolate overflow-hidden bg-shell/40 py-24 md:py-32 grain">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <ScrollReveal>
                  <p className="eyebrow">Archives</p>
                </ScrollReveal>
                <SplitText
                  as="h2"
                  text="Évènements passés"
                  className="display-lg mt-6 text-ink"
                />
              </div>
              <p className="text-sm text-muted">
                {passees.length} évènement{passees.length > 1 ? "s" : ""}{" "}
                référencé{passees.length > 1 ? "s" : ""}
              </p>
            </div>
            <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {passees.map((expo, idx) => (
                <ScrollReveal key={expo.slug} delay={idx * 0.06} as="li">
                  <EventCard exposition={expo} />
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ─── CTA contact ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-deep text-paper grain px-8 py-16 md:px-16 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70"
            />
            <div className="relative grid gap-8 md:grid-cols-12 items-center">
              <div className="md:col-span-8">
                <p className="eyebrow text-brand-accent">Inviter l'atelier</p>
                <h2 className="mt-6 font-display text-3xl md:text-5xl text-paper">
                  Un évènement à organiser ?
                </h2>
                <p className="mt-6 text-lg text-paper/85 leading-relaxed">
                  Marie-Laure participe à des salons, marchés de créateurs et
                  journées portes ouvertes dans le Morbihan. Pour proposer une
                  exposition ou un stand, écrivez à l'atelier.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-paper"
                >
                  Contacter l'atelier
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
