import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Ornament } from "@/components/motion/ornament";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-deep text-paper grain">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-80"
      />

      {/* Citation / signature */}
      <div className="relative mx-auto max-w-7xl px-6 pt-24 md:pt-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16 pb-16 border-b border-paper/15">
          <div className="md:col-span-7">
            <Ornament className="text-brand-accent mb-8" variant="diamond" />
            <p className="font-display text-3xl md:text-5xl text-paper leading-[1.15] text-balance italic-display">
              «&nbsp;Tant de doutes et de surprises avec la Terre — c'est ce
              dialogue patient qui m'occupe depuis vingt-cinq ans.&nbsp;»
            </p>
            <p className="mt-6 text-sm text-paper/60 uppercase tracking-[0.25em]">
              Marie-Laure Bretel · Céramiste d'art
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-accent">
              Visiter l'atelier
            </p>
            <p className="text-lg text-paper/85 leading-relaxed">
              Marie-Laure ouvre les portes de Terre Libre pendant les cours et
              sur rendez-vous. Échanger autour d'une pièce, réserver une séance,
              ou flâner dans la boutique métiers d'art — bienvenue.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 self-start rounded-full bg-paper px-7 py-3 text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-paper"
            >
              Nous écrire
              <ArrowUpRight
                size={16}
                className="transition-transform duration-500 group-hover:rotate-45"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Identité */}
          <div className="md:col-span-4">
            <p className="font-display text-3xl text-paper">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-paper/65 leading-relaxed">
              {siteConfig.baseline}
            </p>

            <div className="mt-8 flex items-center gap-3">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 text-paper hover:bg-paper hover:text-ink transition-all duration-500 hover:-translate-y-0.5"
                >
                  <Instagram size={17} />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 text-paper hover:bg-paper hover:text-ink transition-all duration-500 hover:-translate-y-0.5"
                >
                  <Facebook size={17} />
                </a>
              )}
            </div>
          </div>

          {/* Plan du site */}
          <nav aria-label="Plan du site" className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-accent mb-6">
              Découvrir
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {siteConfig.footerSitemap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-paper/75 hover:text-paper transition-colors"
                  >
                    <span className="link-underline">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-accent mb-6">
              Contact
            </p>
            <address className="not-italic text-sm space-y-4 text-paper/80">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-brand-accent" aria-hidden />
                <span>
                  {siteConfig.contact.postalCode} {siteConfig.contact.city}
                  <br />
                  {siteConfig.contact.region}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-1 shrink-0 text-brand-accent" aria-hidden />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-paper transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-paper/15 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-paper/55">
          <p>
            © {year} {siteConfig.legalName}. Tous droits réservés.
          </p>
          <nav aria-label="Liens légaux">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {siteConfig.footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-paper transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
