import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Conditions générales d'utilisation",
  description:
    "Conditions générales d'utilisation du site terre-libre.com.",
  path: "/cgu",
  noindex: true,
});

export default function CguPage() {
  return (
    <main
      id="main-content"
      className="mx-auto max-w-3xl px-6 py-16 prose prose-neutral prose-headings:font-display prose-headings:text-ink prose-p:text-ink/85"
    >
      <h1>Conditions générales d'utilisation</h1>

      <p>
        Les présentes conditions générales d'utilisation (« CGU ») régissent l'accès et l'usage du site {siteConfig.url} (le « Site »), édité par {siteConfig.legalName}.
      </p>

      <h2>1. Objet du site</h2>
      <p>
        Le Site est un site de présentation institutionnel de l'atelier de céramique Terre Libre à Ploemel (56). Il présente les céramiques de Marie-Laure Bretel, l'offre de cours, stages, location d'atelier et expositions, ainsi que les artisans invités de la Boutique Métiers d'Art.
      </p>
      <p>
        Le Site ne propose pas de vente en ligne. Toute commande ou réservation se fait via le formulaire de contact, par téléphone ou directement à l'atelier.
      </p>

      <h2>2. Acceptation des conditions</h2>
      <p>
        L'utilisation du Site implique l'acceptation pleine et entière des présentes CGU. {siteConfig.legalName} se réserve le droit de modifier ces conditions à tout moment. Les utilisateurs sont invités à les consulter régulièrement.
      </p>

      <h2>3. Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments du Site — textes, photographies de céramiques, illustrations, logos, charte graphique — est protégé par le droit d'auteur et reste la propriété exclusive de {siteConfig.legalName} ou de ses ayants droit.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, sans autorisation écrite préalable est strictement interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
      </p>

      <h2>4. Liens hypertextes</h2>
      <p>
        Le Site peut contenir des liens vers des sites tiers (réseaux sociaux, médias, partenaires). {siteConfig.legalName} n'exerce aucun contrôle sur ces sites et ne saurait être tenue responsable de leur contenu.
      </p>

      <h2>5. Limitation de responsabilité</h2>
      <p>
        {siteConfig.legalName} met tout en œuvre pour assurer l'exactitude et l'actualité des informations diffusées sur le Site. Toutefois, des erreurs ou omissions peuvent survenir. L'utilisateur reconnaît utiliser ces informations sous sa propre responsabilité.
      </p>
      <p>
        En aucun cas {siteConfig.legalName} ne pourra être tenue responsable de dommages directs ou indirects résultant de l'utilisation du Site ou de l'impossibilité d'y accéder.
      </p>

      <h2>6. Données personnelles</h2>
      <p>
        Le traitement des données personnelles est décrit dans la{" "}
        <a href="/confidentialite">politique de confidentialité</a>.
      </p>

      <h2>7. Droit applicable</h2>
      <p>
        Les présentes CGU sont régies par le droit français. Tout litige relatif à leur interprétation ou exécution sera soumis aux tribunaux compétents du ressort de Lorient (Morbihan).
      </p>

      <h2>8. Contact</h2>
      <p>
        Pour toute question relative aux présentes CGU : <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>
    </main>
  );
}
