import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et traitement des données personnelles sur terre-libre.com.",
  path: "/confidentialite",
  noindex: true,
});

export default function Confidentialite() {
  return (
    <main
      id="main-content"
      className="mx-auto max-w-3xl px-6 py-16 prose prose-neutral prose-headings:font-display prose-headings:text-ink prose-p:text-ink/85"
    >
      <h1>Politique de confidentialité</h1>

      <p>
        La présente politique décrit comment {siteConfig.legalName} traite vos données personnelles lorsque vous utilisez le site {siteConfig.url}.
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        {siteConfig.legalName} — {siteConfig.contact.postalCode} {siteConfig.contact.city}.
        <br />
        Contact :{" "}
        <a href={`mailto:${siteConfig.legal.dpoEmail}`}>
          {siteConfig.legal.dpoEmail}
        </a>
      </p>

      <h2>2. Données collectées</h2>
      <ul>
        <li>
          <strong>Formulaire de contact</strong> : nom, email, téléphone (facultatif), sujet et message.
        </li>
        <li>
          <strong>Analytics</strong> : Cloudflare Web Analytics — métriques anonymes agrégées (pages vues, durée, performances). <em>Aucun cookie tiers, aucune donnée personnelle identifiable.</em>
        </li>
      </ul>
      <p>
        Le site ne dépose pas de cookies de tracking, ni publicitaires.
      </p>

      <h2>3. Finalités</h2>
      <ul>
        <li>Répondre à vos demandes envoyées via le formulaire de contact</li>
        <li>Vous transmettre les informations demandées (cours, stages, devis location)</li>
        <li>Améliorer le fonctionnement du site (analytics anonymes)</li>
      </ul>

      <h2>4. Base légale</h2>
      <p>
        Vos données de contact sont traitées sur la base de votre <strong>consentement explicite</strong> (case à cocher lors du formulaire). Les analytics anonymes reposent sur l'<strong>intérêt légitime</strong> à mesurer l'audience du site.
      </p>

      <h2>5. Durée de conservation</h2>
      <ul>
        <li>Demandes de contact : <strong>3 ans</strong> après le dernier échange, puis suppression.</li>
        <li>Analytics : agrégés, pas de stockage individuel.</li>
      </ul>

      <h2>6. Destinataires</h2>
      <p>
        Vos données ne sont communiquées à <strong>aucun tiers commercial</strong>. Elles sont uniquement consultées par Marie-Laure Bretel pour répondre à vos demandes.
      </p>
      <p>
        Sous-traitants techniques :
      </p>
      <ul>
        <li><strong>Cloudflare Inc.</strong> (hébergement) — sans accès aux contenus de vos messages.</li>
        <li><strong>Resend</strong> (envoi des messages du formulaire) — opérateur d'envoi d'emails, conforme RGPD.</li>
      </ul>

      <h2>7. Vos droits</h2>
      <p>
        Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'<strong>accès</strong>, de <strong>rectification</strong>, d'<strong>effacement</strong>, de <strong>limitation</strong>, de <strong>portabilité</strong> et d'<strong>opposition</strong>.
      </p>
      <p>
        Pour exercer ces droits :{" "}
        <a href={`mailto:${siteConfig.legal.dpoEmail}`}>
          {siteConfig.legal.dpoEmail}
        </a>.
      </p>
      <p>
        Vous pouvez également déposer une réclamation auprès de la{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
          CNIL
        </a>.
      </p>

      <h2>8. Cookies</h2>
      <p>
        Ce site n'utilise <strong>aucun cookie de tracking</strong>. Seuls des cookies strictement nécessaires au fonctionnement technique du site peuvent être déposés (préférences, sécurité). Cloudflare Web Analytics fonctionne sans cookie.
      </p>

      <h2>9. Sécurité</h2>
      <p>
        Les données sont transmises en HTTPS (chiffrement TLS) et stockées sur l'infrastructure Cloudflare, certifiée ISO 27001 et conforme au RGPD.
      </p>

      <h2>10. Mise à jour</h2>
      <p>
        Cette politique peut être mise à jour. La date de dernière modification figure en bas de page. Les modifications majeures vous seront signalées.
      </p>

      <p className="text-sm text-muted">
        <em>Dernière mise à jour : mai 2026.</em>
      </p>
    </main>
  );
}
