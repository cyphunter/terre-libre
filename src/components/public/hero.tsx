"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SplitText } from "@/components/motion/split-text";
import { cn } from "@/lib/utils";

type HeroProps = {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  imageAlt: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  variant?: "fullscreen" | "tall" | "compact";
  align?: "left" | "center";
  /** Marker éditorial affiché en coin (ex: "Atelier · Ploemel") */
  marker?: string;
  /** Photo secondaire affichée en pastille bas-droite (effet magazine) */
  secondaryImage?: { src: string; alt: string };
  /** Petit chiffre / stat (ex: "25 ans de tournage") */
  highlight?: { label: string; value: string };
  /** Affiche un indicateur "scroll" en bas */
  showScrollHint?: boolean;
};

export function Hero({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  ctaPrimary,
  ctaSecondary,
  variant = "tall",
  align = "left",
  marker,
  secondaryImage,
  highlight,
  showScrollHint = true,
}: HeroProps) {
  const heightClass =
    variant === "fullscreen"
      ? "min-h-[100svh]"
      : variant === "tall"
        ? "min-h-[88svh] md:min-h-[92svh]"
        : "min-h-[60svh]";

  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <section
      className={cn(
        "relative isolate flex w-full overflow-hidden bg-deep text-paper grain",
        heightClass,
      )}
    >
      {/* Background image + parallax */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover ken-burns"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-deep/65 via-deep/30 to-deep/85"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-deep/55 via-transparent to-transparent"
        />
      </div>

      {/* Marker éditorial coin haut-gauche */}
      {marker && (
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-32 left-6 md:top-40 md:left-12 z-10 hidden md:block"
        >
          <span className="eyebrow text-paper/80">{marker}</span>
        </motion.p>
      )}

      {/* Pastille image secondaire (style magazine) */}
      {secondaryImage && (
        <motion.figure
          initial={{ opacity: 0, scale: 0.85, rotate: -7 }}
          animate={{ opacity: 1, scale: 1, rotate: -3.5 }}
          transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-8 top-32 md:right-14 md:top-40 hidden lg:block z-10"
        >
          <div className="relative h-52 w-40 overflow-hidden rounded-2xl ring-4 ring-paper/10 shadow-2xl">
            <Image
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              fill
              sizes="200px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-deep/70 to-transparent"
            />
          </div>
          <figcaption className="mt-3 text-right text-[10px] uppercase tracking-[0.25em] text-paper/65">
            Marie-Laure · à l&apos;atelier
          </figcaption>
        </motion.figure>
      )}

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end gap-6 px-6 pb-20 pt-32 md:pb-28 md:pt-40 w-full">
        <div className={cn("flex flex-col gap-5 max-w-4xl", alignClass)}>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="eyebrow text-brand-accent"
            >
              {subtitle}
            </motion.p>
          )}

          <SplitText
            as="h1"
            text={title}
            className="display-xl text-paper text-balance"
            delay={0.3}
            stagger={0.05}
          />

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-lg md:text-xl text-paper/85 leading-relaxed max-w-2xl text-pretty"
            >
              {description}
            </motion.p>
          )}

          {(ctaPrimary || ctaSecondary) && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {ctaPrimary && (
                <Link
                  href={ctaPrimary.href}
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-paper px-9 py-4 text-sm font-medium text-ink transition-colors duration-500"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 origin-left scale-x-0 bg-brand transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  />
                  <span className="relative transition-colors duration-500 group-hover:text-paper">
                    {ctaPrimary.label}
                  </span>
                  <span
                    aria-hidden
                    className="relative transition-all duration-500 group-hover:translate-x-1 group-hover:text-paper"
                  >
                    →
                  </span>
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="group inline-flex items-center gap-3 rounded-full border border-paper/40 px-9 py-4 text-sm font-medium text-paper transition-colors duration-500 hover:bg-paper/10"
                >
                  <span>{ctaSecondary.label}</span>
                  <span
                    aria-hidden
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              )}
            </motion.div>
          )}
        </div>

        {/* Bottom row : highlight + scroll hint */}
        <div className="mt-auto pt-12">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
            className="hidden md:block hairline text-paper origin-left"
          />
          <div className="mt-8 flex items-end justify-between gap-6">
            {highlight ? (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="hidden md:flex flex-col gap-1"
              >
                <span className="font-display text-5xl text-paper italic-display leading-none">
                  {highlight.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-paper/65">
                  {highlight.label}
                </span>
              </motion.div>
            ) : (
              <div />
            )}

            {showScrollHint && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.8 }}
                className="hidden md:flex flex-col items-center gap-2 text-paper/65"
              >
                <span className="text-[10px] uppercase tracking-[0.32em] rotate-90 origin-center pt-6">
                  Scroll
                </span>
                <ChevronDown size={18} className="scroll-hint" aria-hidden />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
