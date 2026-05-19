# Terre Libre — instructions Claude (spécifiques projet)

> Règles agence : voir `../CLAUDE.md` à la racine de `freelance/`.
> Référence détaillée : voir `../CONVENTIONS.md`.

## Identité du projet

- **Client** : Marie-Laure Bretel, céramiste d'art
- **Activité** : Atelier de céramique + boutique métiers d'art + cours / stages / location
- **Site** : `https://terre-libre.com`
- **Refonte** : oui — ancien site WordPress `terrelibre.com` (redirects 301 dans `middleware.ts`)
- **SITE_ID** : `terre-libre` (variable Cloudflare seulement — **pas de DB**)
- **D1** : **AUCUNE** — showcase pur, contenu dans `site-config.ts` + `data/*.ts`
- **R2 bucket** : `terre-libre-media`
- **KV** : **AUCUN** — site 100 % static, aucun cache runtime nécessaire
- **Email expéditeur** : `contact@terre-libre.com` (Resend)
- **Localisation** : Ploemel (56400), Bretagne sud
- **Réseaux** : Instagram `@terrelibre_ploemel`, Facebook `Terre-Libre-Vannes`

## Stack

- Next.js 16 App Router + React 19 + TypeScript strict
- Tailwind v4 (`@theme` dans `globals.css`)
- `framer-motion` (animations subtiles), `lucide-react`, `schema-dts`
- `resend` + `@react-email/components` (formulaire contact)
- `zod` (validation)
- Hébergement : Cloudflare Workers via `@opennextjs/cloudflare`

## Direction artistique

- **Palette** terre / argile / coquillage :
  - `--color-paper: #faf6f1` (écru)
  - `--color-ink: #2c2520` (encre brune)
  - `--color-brand: #8c6e4d` (terre cuite)
  - `--color-brand-accent: #b89070` (argile claire)
  - `--color-sand: #e8dcc4`, `--color-shell: #f3ead7`, `--color-stone: #d4c5a9`
  - `--color-deep: #1a1410` (footer, hero overlay)
- **Polices** : Fraunces (display, titres) + Inter (body) — `next/font/google`
- **Animations** : Framer Motion subtil — `ScrollReveal` (fade-up au scroll), `ken-burns` sur hero. Respect `prefers-reduced-motion` via `<ReducedMotionProvider>` au layout.
- **Ton** : éditorial, artisanal, contemplatif (cohérent avec l'univers céramique)
- **Style** : grandes photos, beaucoup d'espace, h2 en serif, palette terre

## Sources de contenu client-éditables

| Fichier | Contenu |
|---|---|
| `src/lib/site-config.ts` | Coordonnées, navigation, mentions légales, social, footer |
| `src/data/ceramiste.ts` | Bio Marie-Laure, philosophie, techniques, parcours |
| `src/data/ceramiques.ts` | Catégories (utiles/décoratives/coquillages) + pièces |
| `src/data/cours.ts` | Formules cours adultes/enfants/duos + tarifs 2025/26 |
| `src/data/stages.ts` | Stages thématiques |
| `src/data/planning.ts` | Planning hebdo récurrent + dates exceptionnelles |
| `src/data/expositions.ts` | Expositions à venir / passées |
| `src/data/presse.ts` | Articles de presse |
| `src/data/renovation.ts` | 6 étapes de rénovation de l'atelier |
| `src/data/boutique.ts` | Boutique Métiers d'Art + artisans invités |
| `src/data/location.ts` | Location d'atelier (individuels + groupes) |

## Architecture des pages

```
/                        → Accueil (hero, intro céramiste, catégories, cours, expos, CTA)
/ceramiques              → Index 3 catégories
/ceramiques/[slug]       → Détail catégorie (utiles, decoratives, coquillages)
/la-ceramiste            → Bio + parcours + philosophie + inspiration
/cours                   → Formules + initiation + techniques + inscription
/stages                  → Liste stages + infos pratiques
/planning                → Créneaux hebdo + dates exceptionnelles
/expositions             → À venir + archives
/presse                  → Articles presse
/projet-de-renovation    → 6 étapes du chantier
/boutique                → Catalogue + artisans invités + horaires
/location-atelier        → 2 formules (individuels / groupes)
/contact                 → Formulaire + coordonnées + plan
/mentions-legales        → Auto-construit depuis site-config.legal
/confidentialite         → Politique RGPD
/cgu                     → Conditions générales d'utilisation
/health                  → JSON status (pour monitoring)
/media/[...path]         → Proxy R2 (fallback sans custom domain)
```

## SEO

- JSON-LD typés (`schema-dts`) :
  - `LocalBusiness` (`Store` sous-type) → layout root et page `/boutique`
  - `Person` → `/la-ceramiste`
  - `Event` × N → `/expositions`
  - `Course` × N → `/cours`
  - `BreadcrumbList` → chaque page profonde
- Sitemap dynamique avec toutes routes statiques + sous-catégories céramiques
- OG image 1200×630 dans `/public/images/og/og-default.jpg` (à fournir)

## Points d'attention spécifiques

- **PAS DE DB** : ne jamais proposer Drizzle/D1/auth, ne jamais importer `getDb`. Le contenu est éditable via les fichiers `data/*.ts`, pas via un back-office.
- **Champs `À CONFIRMER`** dans `site-config.ts` : SIRET, téléphone, email exact, adresse exacte de l'atelier Ploemel. À récupérer auprès de Marie-Laure avant mise en ligne.
- **Photos** : `public/images/` est vide pour le moment — utiliser des placeholders Unsplash céramique (license commerciale OK) en attendant le shooting client. Compresser < 300 KB, WebP, dimensions max 1920×1080 hero.
- **Tarifs 2025/26 figés** dans `data/cours.ts` (65€/cours adulte, 30€/cours enfant, etc.) — à mettre à jour à chaque rentrée.
- **Redirects 301** : les anciens slugs WordPress (`/mes-ceramiques`, `/le-projet-de-renovation`, etc.) sont mappés dans `middleware.ts` → ne pas casser le SEO existant.
- **Resend** : domaine `terre-libre.com` doit être vérifié (SPF + DKIM + DMARC) avant prod. Secrets : `RESEND_API_KEY` + `CONTACT_RECIPIENT_EMAIL` via `wrangler secret put`.
- **Cloudflare Email Routing** : forward `contact@terre-libre.com` → email réel de Marie-Laure (à configurer en DNS).
- **Honeypot anti-spam** : champ `website` caché dans le formulaire — si rempli, réponse silencieuse 200 OK mais aucun envoi.

## Commandes courantes

```powershell
npm run dev               # localhost:3000
npm run typecheck         # 0 erreur
npm run lint
npm run build             # OpenNext build
npm run preview           # prod-like local

# Cloudflare resources (avant premier deploy)
wrangler r2 bucket create terre-libre-media
wrangler kv namespace create terre-libre-kv
# → coller l'id retourné dans wrangler.jsonc

# Secrets
wrangler secret put RESEND_API_KEY
wrangler secret put CONTACT_RECIPIENT_EMAIL

# Deploy
npm run deploy
```
