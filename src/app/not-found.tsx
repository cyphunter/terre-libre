import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page introuvable",
  description: "Cette page n'existe pas ou a été déplacée.",
  path: "/404",
  noindex: true,
});

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 text-center py-20"
    >
      <p className="font-display text-8xl text-brand">404</p>
      <h1 className="mt-6 font-display text-3xl md:text-4xl text-ink">
        Cette page semble s'être perdue
      </h1>
      <p className="mt-4 text-muted leading-relaxed">
        Le chemin que vous cherchez n'existe pas, ou la page a été déplacée. Retournez à l'accueil ou explorez le catalogue de céramiques.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-paper hover:bg-brand transition-colors"
        >
          Retour à l'accueil
          <span aria-hidden>→</span>
        </Link>
        <Link
          href="/ceramiques"
          className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-8 py-4 text-sm font-medium text-ink hover:bg-ink/5 transition-colors"
        >
          Voir les céramiques
        </Link>
      </div>
    </main>
  );
}
