import { JsonLd } from "./json-ld";
import { siteConfig, canonicalUrl } from "@/lib/site-config";
import { ceramiste } from "@/data/ceramiste";
import type { Person, WithContext } from "schema-dts";

/**
 * JSON-LD Person — Marie-Laure Bretel, céramiste d'art.
 * À utiliser sur la page /la-ceramiste.
 */
export function PersonSchema() {
  const schema: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/la-ceramiste/#person`,
    name: ceramiste.nom,
    jobTitle: ceramiste.titre,
    description: ceramiste.introduction[0],
    url: canonicalUrl("/la-ceramiste"),
    image: `${siteConfig.url}${ceramiste.portraitImage}`,
    knowsAbout: [
      ...ceramiste.techniques.map((t) => t.nom),
      "Céramique d'art",
      "Porcelaine",
      "Grès blanc",
      "Tournage",
    ],
    worksFor: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      addressCountry: siteConfig.contact.country,
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };

  return <JsonLd schema={schema} />;
}
