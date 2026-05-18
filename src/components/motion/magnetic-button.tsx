"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: Variant;
  strength?: number;
  ariaLabel?: string;
};

/**
 * Bouton magnétique : suit légèrement la position du curseur.
 * Reste accessible — Link Next standard derrière.
 * Le mouvement est ignoré sur mobile (pas de souris).
 */
export function MagneticButton({
  href,
  children,
  className,
  variant = "solid",
  strength = 0.18,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18 });
  const sy = useSpring(my, { stiffness: 220, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    mx.set(x * strength);
    my.set(y * strength);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const styleMap: Record<Variant, string> = {
    solid:
      "bg-ink text-paper hover:bg-deep-warm",
    outline:
      "border border-ink/15 text-ink hover:bg-ink hover:text-paper",
    ghost:
      "border border-paper/40 text-paper hover:bg-paper/10",
  };

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="inline-block will-change-transform"
    >
      <Link
        ref={ref}
        href={href}
        aria-label={ariaLabel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-500",
          styleMap[variant],
          className,
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
