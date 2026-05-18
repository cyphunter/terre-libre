import { JsonLd } from "./json-ld";
import { siteConfig } from "@/lib/site-config";
import type { Store, WithContext } from "schema-dts";

/**
 * JSON-LD Store (sous-type de LocalBusiness) pour les pages
 * boutique / vitrine. Plus précis que LocalBusiness générique.
 */
export function LocalBusinessSchema() {
  const schema: WithContext<Store> = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${siteConfig.url}/#store`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    image: `${siteConfig.url}/images/og/og-default.jpg`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      postalCode: siteConfig.contact.postalCode,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      addressCountry: siteConfig.contact.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.geo.latitude,
      longitude: siteConfig.contact.geo.longitude,
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    areaServed: { "@type": "AdministrativeArea", name: "Morbihan, Bretagne" },
  };

  return <JsonLd schema={schema} />;
}
