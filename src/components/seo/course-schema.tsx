import { JsonLd } from "./json-ld";
import { siteConfig } from "@/lib/site-config";
import type { Formule } from "@/data/cours";
import type { Course, WithContext } from "schema-dts";

/**
 * JSON-LD Course — une formule de cours de céramique.
 */
export function CourseSchema({ formule }: { formule: Formule }) {
  const isAdult = formule.type === "adulte";
  const isDuo = formule.type === "duo";

  const courseName = isDuo
    ? `Cours céramique duo parent-enfant — ${formule.jour}`
    : isAdult
      ? `Cours céramique adultes — ${formule.jour}`
      : `Cours céramique enfants — ${formule.jour}`;

  const schema: WithContext<Course> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: courseName,
    description: `Cours de céramique en ${formule.duree}, ${formule.creneau}, pour ${formule.public.toLowerCase()}. Atelier Terre Libre à Ploemel, Morbihan.`,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
      sameAs: Object.values(siteConfig.social).filter(Boolean),
    },
    offers: {
      "@type": "Offer",
      price: formule.tarifs.unite,
      priceCurrency: "EUR",
      category: "Cours unique",
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "https://schema.org/OnSite",
      location: {
        "@type": "Place",
        name: siteConfig.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.contact.city,
          addressRegion: siteConfig.contact.region,
          postalCode: siteConfig.contact.postalCode,
          addressCountry: siteConfig.contact.country,
        },
      },
    },
  };

  return <JsonLd schema={schema} />;
}
