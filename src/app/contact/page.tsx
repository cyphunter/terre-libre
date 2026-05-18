import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Mail, Instagram, Facebook, Clock, ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SplitText } from "@/components/motion/split-text";
import { ContactForm } from "@/components/public/contact-form";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contactez l'atelier Terre Libre à Ploemel — questions sur les céramiques, cours, stages, expositions ou location d'atelier. Formulaire, email et réseaux sociaux.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <Breadcrumb items={[{ label: "Contact" }]} />
      </div>

      {/* ─── Hero ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <header className="max-w-4xl">
          <ScrollReveal>
            <p className="eyebrow">Échangeons</p>
          </ScrollReveal>
          <SplitText
            as="h1"
            text="Écrire à l'atelier"
            className="display-xl mt-6 text-ink"
          />
          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-xl text-muted leading-relaxed max-w-2xl">
              Question sur une pièce, inscription à un cours, projet de stage ou
              de location d'atelier — utilisez le formulaire ci-dessous ou
              retrouvez-moi sur les réseaux.
            </p>
          </ScrollReveal>
        </header>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ─── Coordonnées ─────────────────────────────────────── */}
          <ScrollReveal className="lg:col-span-4 space-y-10">
            <section>
              <h2 className="eyebrow">L'atelier</h2>
              <div className="mt-6 space-y-5 text-ink/85">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={17}
                    className="mt-1 shrink-0 text-brand"
                    aria-hidden
                  />
                  <address className="not-italic leading-relaxed">
                    {siteConfig.contact.address && siteConfig.contact.address !== "Adresse à confirmer" && (
                      <>
                        {siteConfig.contact.address}
                        <br />
                      </>
                    )}
                    {siteConfig.contact.postalCode} {siteConfig.contact.city}
                    <br />
                    {siteConfig.contact.region}
                  </address>
                </div>
                <div className="flex items-start gap-3">
                  <Mail
                    size={17}
                    className="mt-1 shrink-0 text-brand"
                    aria-hidden
                  />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-brand transition-colors break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock
                    size={17}
                    className="mt-1 shrink-0 text-brand"
                    aria-hidden
                  />
                  <p className="whitespace-pre-line leading-relaxed text-sm text-muted">
                    {siteConfig.contact.openingHoursLabel}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="eyebrow">Sur les réseaux</h2>
              <ul className="mt-6 space-y-3">
                {siteConfig.social.instagram && (
                  <li>
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-ink/85 hover:text-brand transition-colors"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone/60 group-hover:bg-ink group-hover:text-paper transition-colors">
                        <Instagram size={16} aria-hidden />
                      </span>
                      @terrelibre_ploemel
                    </a>
                  </li>
                )}
                {siteConfig.social.facebook && (
                  <li>
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-ink/85 hover:text-brand transition-colors"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone/60 group-hover:bg-ink group-hover:text-paper transition-colors">
                        <Facebook size={16} aria-hidden />
                      </span>
                      Terre Libre — Vannes
                    </a>
                  </li>
                )}
              </ul>
            </section>

            <section className="rounded-2xl bg-shell/60 p-6 border border-stone/40">
              <p className="text-sm text-ink/85 leading-relaxed">
                Pour les{" "}
                <span className="font-medium">cours et stages</span>, mentionnez
                vos disponibilités et votre niveau d'expérience. Pour les{" "}
                <span className="font-medium">pièces uniques</span>, indiquez la
                référence si elle figure dans le catalogue.
              </p>
            </section>
          </ScrollReveal>

          {/* ─── Formulaire ──────────────────────────────────────── */}
          <ScrollReveal delay={0.1} className="lg:col-span-8">
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA planning ──────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-deep text-paper grain px-8 py-16 md:px-16 md:py-24 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70"
            />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl text-paper">
                Vous préférez venir directement&nbsp;?
              </h2>
              <p className="mt-6 text-lg text-paper/85 max-w-2xl mx-auto leading-relaxed">
                L'atelier est ouvert pendant les cours (lundi, mercredi,
                samedi) et lors des journées portes ouvertes. Consultez le
                planning pour les créneaux d'ouverture.
              </p>
              <Link
                href="/planning"
                className="mt-10 group inline-flex items-center gap-3 rounded-full bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-paper"
              >
                Voir le planning
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
