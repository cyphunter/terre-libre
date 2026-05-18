import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Article } from "@/data/presse";

export function PressCard({ article }: { article: Article }) {
  const ArticleContent = (
    <>
      {article.image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-shell">
          <Image
            src={article.image}
            alt={article.imageAlt ?? article.titre}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-col gap-3 p-6">
        <div className="flex flex-wrap items-baseline gap-3 text-sm">
          <span className="font-medium text-brand uppercase tracking-wider text-xs">
            {article.media}
          </span>
          <time
            dateTime={article.date}
            className="text-muted text-xs"
          >
            {article.dateAffichage}
          </time>
        </div>
        <h3 className="font-display text-xl text-ink">
          {article.titre}
        </h3>
        <p className="text-sm text-ink/80 leading-relaxed">
          {article.extrait}
        </p>
        {article.auteur && (
          <p className="text-xs text-muted">— {article.auteur}</p>
        )}
        {article.lienExterne && (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand mt-2">
            Lire l'article
            <ExternalLink size={14} aria-hidden />
          </span>
        )}
      </div>
    </>
  );

  if (article.lienExterne) {
    return (
      <a
        href={article.lienExterne}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col rounded-2xl overflow-hidden bg-paper border border-stone/40 transition-shadow hover:shadow-soft"
      >
        {ArticleContent}
      </a>
    );
  }

  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden bg-paper border border-stone/40">
      {ArticleContent}
    </article>
  );
}
