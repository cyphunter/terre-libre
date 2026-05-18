import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { Exposition } from "@/data/expositions";
import { cn } from "@/lib/utils";

const statusLabel: Record<Exposition["status"], string> = {
  "a-venir": "À venir",
  "en-cours": "En cours",
  passee: "Archives",
};

const statusClass: Record<Exposition["status"], string> = {
  "a-venir": "bg-brand text-paper",
  "en-cours": "bg-success text-paper",
  passee: "bg-stone text-ink/70",
};

function formatDateBlock(dateDebut: string) {
  // ISO YYYY-MM-DD → day + short month
  const d = new Date(dateDebut + "T00:00:00");
  const day = String(d.getDate()).padStart(2, "0");
  const month = d
    .toLocaleString("fr-FR", { month: "short" })
    .replace(".", "")
    .toUpperCase();
  return { day, month, year: d.getFullYear() };
}

export function EventCard({ exposition }: { exposition: Exposition }) {
  const date = formatDateBlock(exposition.dateDebut);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-paper border border-stone/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[5/4] overflow-hidden bg-shell">
        <Image
          src={exposition.image}
          alt={exposition.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover img-zoom"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent"
        />
        <span
          className={cn(
            "absolute top-4 left-4 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em]",
            statusClass[exposition.status],
          )}
        >
          {statusLabel[exposition.status]}
        </span>

        {/* Bloc date magazine */}
        <div className="absolute bottom-4 right-4 flex flex-col items-center rounded-lg bg-paper/95 backdrop-blur px-3 py-2 text-center shadow-lg">
          <span className="font-display text-3xl text-ink leading-none">
            {date.day}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand mt-1">
            {date.month}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-7">
        <p className="text-[10px] uppercase tracking-[0.22em] text-brand">
          {exposition.dateAffichage}
        </p>
        <h3 className="font-display text-2xl text-ink leading-tight">
          {exposition.titre}
        </h3>
        <p className="inline-flex items-center gap-1.5 text-sm text-muted">
          <MapPin size={13} className="text-brand" aria-hidden />
          {exposition.lieu} · {exposition.ville}
        </p>
        <p className="text-sm text-ink/80 leading-relaxed line-clamp-3">
          {exposition.description}
        </p>
        {exposition.lienExterne && (
          <a
            href={exposition.lienExterne}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-brand pt-2"
          >
            Plus d'infos
            <ArrowUpRight size={13} />
          </a>
        )}
      </div>
    </article>
  );
}
