import { JsonLd } from "./json-ld";
import { siteConfig } from "@/lib/site-config";
import type { Exposition } from "@/data/expositions";
import type { Event, WithContext } from "schema-dts";

/**
 * JSON-LD Event — une exposition.
 */
export function EventSchema({ exposition }: { exposition: Exposition }) {
  const schema: WithContext<Event> = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: exposition.titre,
    description: exposition.description,
    startDate: exposition.dateDebut,
    endDate: exposition.dateFin,
    eventStatus:
      exposition.status === "passee"
        ? "https://schema.org/EventScheduled"
        : "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: `${siteConfig.url}${exposition.image}`,
    location: {
      "@type": "Place",
      name: exposition.lieu,
      address: {
        "@type": "PostalAddress",
        addressLocality: exposition.ville,
        addressCountry: "FR",
      },
    },
    organizer: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
  };

  return <JsonLd schema={schema} />;
}
