import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site terre-libre.com — identité éditeur et hébergeur.",
  path: "/mentions-legales",
  noindex: true,
});

export default function MentionsLegales() {
  const { legalName, legal, contact, url } = siteConfig;

  return (
    <main
      id="main-content"
      className="mx-auto max-w-3xl px-6 py-16 prose prose-neutral prose-headings:font-display prose-headings:text-ink prose-p:text-ink/85"
    >
      <h1>Mentions légales</h1>

      <h2>Éditeur du site</h2>
      <p>
        <strong>{legalName}</strong>
        <br />
        Directeur de la publication : {legal.publisher}
        <br />
        SIRET : {legal.siret}
        <br />
        {legal.rcs}
        <br />
        Siège social : {contact.address}, {contact.postalCode} {contact.city}, {contact.countryName}
        <br />
        Téléphone : {contact.phoneDisplay}
        <br />
        Email :{" "}
        <a href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </p>

      <h2>Hébergeur</h2>
      <p>
        <strong>{legal.host.name}</strong>
        <br />
        {legal.host.address}
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus présents sur ce site ({url}) — textes, photographies de céramiques, logos, illustrations — sont la propriété exclusive de {legalName} ou de leurs auteurs respectifs.
      </p>
      <p>
        Les céramiques photographiées sont des créations originales de Marie-Laure Bretel. Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, sans autorisation écrite préalable est interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
      </p>
      <p>
        Les photos d'artisans invités à la Boutique Métiers d'Art appartiennent à leurs auteurs respectifs et sont reproduites avec leur accord.
      </p>

      <h2>Crédits</h2>
      <p>
        Conception et développement : Kevin (freelance, Cloudflare Workers + Next.js).
        <br />
        Photographies : Marie-Laure Bretel et photographes invités.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Le traitement des données personnelles collectées via ce site est décrit dans la{" "}
        <a href="/confidentialite">politique de confidentialité</a>.
        Pour exercer vos droits RGPD, contacter :{" "}
        <a href={`mailto:${legal.dpoEmail}`}>{legal.dpoEmail}</a>.
      </p>

      <h2>Conditions générales</h2>
      <p>
        L'utilisation du site est encadrée par les{" "}
        <a href="/cgu">conditions générales d'utilisation</a>.
      </p>
    </main>
  );
}
