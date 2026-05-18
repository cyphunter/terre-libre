import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/public/breadcrumb";
import { CeramiqueCard } from "@/components/public/ceramique-card";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SplitText } from "@/components/motion/split-text";
import { categories, getCategorie, getPiecesByCategorie } from "@/data/ceramiques";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const categorie = getCategorie(slug);
  if (!categorie) {
    return buildMetadata({ title: "Catégorie introuvable", path: `/ceramiques/${slug}`, noindex: true });
  }
  return buildMetadata({
    title: categorie.label,
    description: categorie.description,
    path: `/ceramiques/${slug}`,
    imageUrl: categorie.cover,
  });
}

export default async function CategoriePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categorie = getCategorie(slug);
  if (!categorie) notFound();

  const pieces = getPiecesByCategorie(categorie.slug);
  const otherCategories = categories.filter((c) => c.slug !== categorie.slug);

  return (
    <main id="main-content">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <Breadcrumb
          items={[
            { label: "Céramiques", href: "/ceramiques" },
            { label: categorie.label },
          ]}
        />
      </div>

      {/* ─── Hero catégorie ──────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 md:gap-16 items-center pb-20 md:pb-28">
          <header className="md:col-span-6">
            <ScrollReveal>
              <p className="eyebrow">Famille de pièces</p>
            </ScrollReveal>
            <SplitText
              as="h1"
              text={categorie.label}
              className="display-xl mt-6 text-ink"
            />
            <ScrollReveal delay={0.2}>
              <p className="mt-8 text-xl text-muted leading-relaxed max-w-xl">
                {categorie.description}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-brand">
                {pieces.length} {pieces.length > 1 ? "pièces" : "pièce"} référencée
                {pieces.length > 1 ? "s" : ""}
              </p>
            </ScrollReveal>
          </header>
          <ScrollReveal className="md:col-span-6">
            <div className="relative aspect-[5/4] md:aspect-[4/5] overflow-hidden rounded-3xl bg-shell shadow-soft">
              <Image
                src={categorie.cover}
                alt={categorie.coverAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Grille pièces ───────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        {pieces.length === 0 ? (
          <ScrollReveal>
            <div className="rounded-3xl bg-shell/60 p-12 text-center">
              <p className="font-display text-2xl text-ink">
                Pièces en cours de référencement
              </p>
              <p className="mt-3 text-muted">
                Les pièces de cette catégorie sont en cours de photographie et
                seront publiées prochainement.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand link-underline"
              >
                Demander des informations
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        ) : (
          <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {pieces.map((piece, idx) => (
              <ScrollReveal key={piece.slug} delay={idx * 0.06} as="li">
                <CeramiqueCard piece={piece} />
              </ScrollReveal>
            ))}
          </ul>
        )}
      </section>

      {/* ─── Autres catégories ───────────────────────────────────── */}
      <section className="relative isolate bg-shell/40 py-24 md:py-32 grain">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="eyebrow">Continuer la visite</p>
            </ScrollReveal>
            <SplitText
              as="h2"
              text="Les autres familles"
              className="display-lg mt-6 text-ink"
            />
          </div>

          <ul className="mt-14 grid gap-8 md:grid-cols-2">
            {otherCategories.map((cat, idx) => (
              <ScrollReveal key={cat.slug} delay={idx * 0.1} as="li">
                <Link
                  href={`/ceramiques/${cat.slug}`}
                  className="group relative block overflow-hidden rounded-3xl bg-paper"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={cat.cover}
                      alt={cat.coverAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover img-zoom"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/15 to-transparent"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-8 text-paper">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-paper/80">
                      Voir la série
                    </p>
                    <h3 className="mt-2 font-display text-3xl">{cat.label}</h3>
                    <p className="mt-2 text-sm text-paper/80 leading-relaxed line-clamp-2 max-w-md">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── CTA contact ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-deep text-paper grain px-8 py-16 md:px-16 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70"
            />
            <div className="relative grid gap-8 md:grid-cols-12 items-center">
              <div className="md:col-span-7">
                <p className="eyebrow text-brand-accent">Réserver</p>
                <h2 className="mt-6 font-display text-3xl md:text-5xl text-paper">
                  Une pièce vous tient à cœur ?
                </h2>
                <p className="mt-6 text-lg text-paper/85 leading-relaxed">
                  Les pièces sont visibles à l'atelier de Ploemel. Pour réserver
                  ou demander une création sur mesure, écrivez à Marie-Laure.
                </p>
              </div>
              <div className="md:col-span-5 md:text-right">
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
