"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40">
      {/* Overlay de fond — fade in/out propre sans interpolation par du gris.
          Le texte reste invariablement en couleur brand → pas de flash blanc/blanc. */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "bg-paper/92 backdrop-blur-md border-b border-stone/35 shadow-[0_1px_0_0_rgb(28_20_16/0.04)]",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <Link
          href="/"
          className="group flex flex-col leading-none"
          aria-label={`${siteConfig.name} — accueil`}
        >
          <span
            className="font-display text-2xl md:text-3xl tracking-tight text-brand transition-colors duration-300 group-hover:text-brand-deep"
            style={{ textShadow: "0 1px 2px rgb(28 20 16 / 0.15)" }}
          >
            {siteConfig.name}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-brand/75">
            Atelier de céramique · Ploemel
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-sm">
            {siteConfig.navigation.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "group relative py-1 transition-colors duration-300",
                      isActive
                        ? "text-brand font-medium"
                        : "text-brand/80 hover:text-brand",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute -bottom-1 left-0 right-0 h-px origin-left bg-brand transition-transform duration-500",
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-brand transition-colors duration-300 hover:bg-brand/10"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            id="mobile-nav"
            aria-label="Navigation mobile"
            className="lg:hidden border-t border-stone/40 bg-paper overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {siteConfig.navigation.map((item, i) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-md px-3 py-4 text-base transition-colors",
                        isActive
                          ? "bg-shell text-brand font-medium"
                          : "text-brand/85 hover:bg-shell/60 hover:text-brand",
                      )}
                    >
                      <span>{item.label}</span>
                      <span aria-hidden className="text-brand-accent">
                        →
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
