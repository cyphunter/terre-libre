"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 text-center py-20"
    >
      <p className="font-display text-8xl text-brand">500</p>
      <h1 className="mt-6 font-display text-3xl md:text-4xl text-ink">
        Une erreur est survenue
      </h1>
      <p className="mt-4 text-muted leading-relaxed">
        Nous sommes désolés, quelque chose ne s'est pas bien passé. Réessayez dans quelques instants ou contactez-nous si le problème persiste.
        {error.digest && (
          <span className="block text-xs mt-3 text-muted/70">
            Référence : {error.digest}
          </span>
        )}
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-paper hover:bg-brand transition-colors"
      >
        Réessayer
        <span aria-hidden>→</span>
      </button>
    </main>
  );
}
