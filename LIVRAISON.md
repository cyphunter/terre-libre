# Livraison — Terre Libre

> Document remis à Marie-Laure Bretel le jour de la mise en ligne. À conserver précieusement.

## Informations générales

- **Site** : https://terre-libre.com
- **Mis en ligne le** : `JJ/MM/AAAA`
- **Développeur** : Kevin — fostraceur999@gmail.com
- **Repo GitHub** : `<URL à compléter>`

## Comment modifier le contenu du site

### 1. Coordonnées, navigation, mentions légales

Fichier unique : `src/lib/site-config.ts` sur GitHub.

1. Ouvrir le fichier sur GitHub
2. Cliquer l'icône crayon (Edit)
3. Modifier les valeurs entre guillemets (ex : `phone: "06 12 34 56 78"`)
4. Cliquer **Commit changes** en bas
5. Le site se met à jour automatiquement en 2 à 3 minutes

### 2. Ajouter une céramique au catalogue

Fichier : `src/data/ceramiques.ts`

1. Préparer la photo :
   - Format WebP ou JPG, dimensions max 1200×1200, poids < 300 KB
   - La déposer dans `public/images/ceramiques/<categorie>/` (utiles / decoratives / coquillages)
2. Dans `ceramiques.ts`, ajouter un objet dans le tableau `pieces` :
   ```ts
   {
     slug: "nom-unique-court",
     categorie: "utiles",                  // ou "decoratives", "coquillages"
     nom: "Bol Tournesol",
     description: "Description courte.",
     matiere: "porcelaine",                // ou "grès blanc", "porcelaine et grès"
     dimensions: "Ø 14 cm × H 7 cm",
     image: "/images/ceramiques/utiles/bol-tournesol.jpg",
     imageAlt: "Description pour les non-voyants",
     prixIndicatif: "Sur demande",         // ou "85 €"
     unique: true,                          // optionnel
   },
   ```
3. Commit → la pièce apparaît dans `/ceramiques/utiles`.

### 3. Modifier les tarifs des cours

Fichier : `src/data/cours.ts` → tableau `formules` → ajuster `tarifs.unite`, `cinq`, `dix`.

### 4. Ajouter une exposition

Fichier : `src/data/expositions.ts` → ajouter un objet en haut du tableau `expositions` avec `status: "a-venir"`.

### 5. Modifier les mentions légales

Fichier : `src/lib/site-config.ts` → bloc `legal: { ... }` (SIRET, RCS, capital, publisher).

## Accès importants

| Service | URL | Compte |
|---|---|---|
| **Cloudflare** | https://dash.cloudflare.com | `<email Marie-Laure>` (2FA actif) |
| **Resend** (emails) | https://resend.com | `<email>` |
| **GitHub** (code) | `<URL repo>` | `<username>` |
| **Registrar domaine** | OVH / autre | `<identifiant>` |
| **Google Search Console** | https://search.google.com/search-console | `<email>` |
| **Cloudflare Web Analytics** | https://dash.cloudflare.com/?to=/:account/analytics | inclus dans compte Cloudflare |
| **BetterStack** (uptime) | https://betterstack.com | `<email>` |

> Conserver ces accès dans un gestionnaire de mots de passe (1Password, Bitwarden).

## Email du site

- **Adresse expéditrice (transactionnel)** : `contact@terre-libre.com` (Resend)
- **Réception** : les messages du formulaire de contact arrivent dans la boîte mail réelle de Marie-Laure (via Cloudflare Email Routing — `contact@terre-libre.com` → `<email réel>`)
- **Délivrabilité** : monitorée via le dashboard Resend

## Sauvegarde

- **Médias R2** : redondés Cloudflare (durabilité 99.999999999 %)
- **Code** : versionné sur GitHub
- **Pas de base de données** sur ce site → pas de backup DB nécessaire

## Procédure d'urgence

### Site cassé / inaccessible

1. Vérifier le statut Cloudflare : https://www.cloudflarestatus.com/
2. Contacter Kevin : fostraceur999@gmail.com
3. Rollback possible en 30 s vers la version précédente (Kevin s'en charge)

### Compromission compte / faille suspectée

1. Changer immédiatement le mot de passe Cloudflare + activer 2FA si pas déjà fait
2. Contacter Kevin pour audit logs et rotation des secrets Resend

### Spam / abus formulaire de contact

1. Vérifier les logs Workers Cloudflare
2. Kevin peut activer rate limiting renforcé via WAF en 5 minutes

## Maintenance

- **Mises à jour techniques** (sécurité, dépendances) : `<incluses / à la demande / non incluses>`
- **Évolutions** (nouvelles fonctionnalités — réservation en ligne, e-commerce, blog) : devis au cas par cas
- **Support** : email Kevin — délais de réponse `<à préciser>`

## Évolutions possibles (V2)

- Back-office admin pour gérer galerie / planning / expositions sans toucher au code (D1 + Better-Auth)
- Réservation cours en ligne avec paiement Stripe
- E-commerce boutique métiers d'art
- Blog / actualités
- Multi-langue FR / EN

## Contact

**Kevin** — Développeur freelance
fostraceur999@gmail.com

---

*Document remis à la mise en ligne. Pour toute question, n'hésitez pas à me contacter.*
