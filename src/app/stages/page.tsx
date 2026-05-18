import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SplitText } from "@/components/motion/split-text";
import { Ornament } from "@/components/motion/ornament";
import { StageCard } from "@/components/public/stage-card";
import { stages, stagesInfo } from "@/data/stages";

export const metadata: Metadata = buildMetadata({
  title: "Stages de tournage",
  description:
    "Stages thématiques de tournage à l'atelier Terre Libre — week-ends intensifs, journées découverte porcelaine, formats personnalisés pour groupes constitués.",
  path: "/stages",
});

export default function StagesPage() {
  return (
    <main id="main-content">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <Breadcrumb
          items={[
            { label: "Cours & stages", href: "/cours" },
            { label: "Stages" },
          ]}
        />
      </div>

      {/* ─── Hero ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-end">
          <header className="md:col-span-8">
            <ScrollReveal>
              <p className="eyebrow">Approfondir</p>
            </ScrollReveal>
            <SplitText
              as="h1"
              text="Stages thématiques"
              className="display-xl mt-6 text-ink"
            />
            <ScrollReveal delay={0.2}>
              <p className="mt-8 text-xl text-muted leading-relaxed max-w-2xl">
                Formats courts et intensifs pour approfondir une technique ou
                découvrir un matériau spécifique — un week-end créatif en
                Bretagne sud, ou plusieurs demi-journées espacées.
              </p>
            </ScrollReveal>
          </header>
          <ScrollReveal delay={0.3} className="md:col-span-4">
            <div className="rounded-3xl bg-shell/60 p-6 border border-stone/40">
              <p className="eyebrow">Maximum</p>
              <p className="mt-3 font-display text-5xl text-brand italic-display leading-none">
                4
              </p>
              <p className="mt-2 text-sm text-muted">
                Participants par stage — encadrement personnalisé garanti
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Liste stages ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((s, idx) => (
            <ScrollReveal key={s.slug} delay={idx * 0.06} as="li">
              <StageCard stage={s} />
            </ScrollReveal>
          ))}
        </ul>
      </section>

      {/* ─── Infos pratiques ─────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-shell/40 py-24 md:py-32 grain">
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="text-center">
            <ScrollReveal>
              <Ornament className="mx-auto text-brand" variant="wave" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="eyebrow mt-6 justify-center inline-flex">
                Pratique
              </p>
            </ScrollReveal>
            <SplitText
              as="h2"
              text="Informations pratiques"
              className="display-lg mt-6 text-ink text-balance"
            />
          </div>

          <dl className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              { key: "Réservation", value: stagesInfo.reservation },
              { key: "Inclus", value: stagesInfo.inclusion },
              { key: "Stage privé", value: stagesInfo.groupe },
              { key: "Attestation", value: stagesInfo.certificat },
            ].map((item, idx) => (
              <ScrollReveal key={item.key} delay={idx * 0.06}>
                <div className="group rounded-3xl bg-paper p-7 border border-stone/40 transition-all duration-500 hover:border-ink/15 hover:shadow-sm">
                  <dt className="eyebrow">{item.key}</dt>
                  <dd className="mt-4 text-ink/85 leading-relaxed">
                    {item.value}
                  </dd>
                </div>
              </ScrollReveal>
            ))}
          </dl>

          <ScrollReveal delay={0.4}>
            <div className="mt-14 text-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-9 py-4 text-sm font-medium text-paper transition-colors hover:bg-brand"
              >
                Demander des informations
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
