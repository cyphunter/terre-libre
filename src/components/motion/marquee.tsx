import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: readonly string[];
  separator?: string;
  className?: string;
  itemClassName?: string;
};

/**
 * Marquee texte défilement infini horizontal.
 * Anim CSS pure (transform translateX) — pas de JS.
 */
export function Marquee({
  items,
  separator = "·",
  className,
  itemClassName,
}: MarqueeProps) {
  // Duplique la liste pour boucler sans saut visible.
  const doubled = [...items, ...items];

  return (
    <div className={cn("marquee py-5 select-none", className)}>
      <div className="marquee__track">
        {doubled.map((it, i) => (
          <span
            key={`${it}-${i}`}
            className={cn(
              "inline-flex items-center gap-10 whitespace-nowrap font-display italic-display text-2xl md:text-3xl text-ink/65",
              itemClassName,
            )}
            aria-hidden={i >= items.length || undefined}
          >
            <span>{it}</span>
            <span className="text-brand/80 not-italic">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
