import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig, canonicalUrl } from "@/lib/site-config";
import type { BreadcrumbList, WithContext } from "schema-dts";

type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: readonly Crumb[] }) {
  const allItems: Crumb[] = [{ label: "Accueil", href: "/" }, ...items];

  const schema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: canonicalUrl(item.href) } : {}),
    })),
  };

  return (
    <>
      <JsonLd schema={schema} />
      <nav aria-label="Fil d'Ariane" className="text-sm">
        <ol className="flex flex-wrap items-center gap-1.5 text-muted">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-brand transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={isLast ? "text-ink font-medium" : ""}
                  >
                    {item.label}
                  </span>
                )}
                {!isLast && (
                  <ChevronRight size={14} className="text-stone" aria-hidden />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      {/* Hint pour le voiceover : le nom du fournisseur de site est dans le siteConfig */}
      <span className="sr-only">
        Vous naviguez sur {siteConfig.name}
      </span>
    </>
  );
}
