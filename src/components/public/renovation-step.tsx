import { ParallaxImage } from "@/components/motion/parallax-image";
import type { EtapeRenovation } from "@/data/renovation";
import { cn } from "@/lib/utils";

type Props = {
  etape: EtapeRenovation;
  invert?: boolean;
};

export function RenovationStep({ etape, invert = false }: Props) {
  return (
    <article className="grid items-center gap-10 md:gap-16 md:grid-cols-12">
      <div className={cn("md:col-span-7", invert ? "md:order-2" : "md:order-1")}>
        <ParallaxImage
          src={etape.imagePrincipale}
          alt={etape.imageAlt}
          aspectRatio="4/3"
          className="rounded-3xl shadow-soft"
          amount={50}
          sizes="(max-width: 768px) 100vw, 55vw"
        />
      </div>

      <div className={cn("md:col-span-5", invert ? "md:order-1" : "md:order-2")}>
        <div className="flex items-baseline gap-4">
          <span className="font-display text-6xl text-brand/30 italic-display leading-none">
            {String(etape.numero).padStart(2, "0")}
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-brand">
              Étape {etape.numero}
            </p>
            <p className="mt-1 text-sm text-muted">{etape.date}</p>
          </div>
        </div>

        <h2 className="mt-6 font-display text-3xl md:text-4xl text-ink leading-tight">
          {etape.titre}
        </h2>
        <p className="mt-2 font-display italic-display text-xl text-brand">
          {etape.sousTitre}
        </p>
        <div className="mt-6 space-y-4 text-ink/85 leading-relaxed">
          {etape.texte.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
