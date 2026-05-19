# Terre Libre

Site vitrine pour Marie-Laure Bretel, céramiste d'art à Ploemel (Morbihan).

> Refonte du WordPress legacy `terrelibre.com` — Next.js 16 + Cloudflare Workers, showcase pur sans DB.

## Démarrage rapide

```powershell
# 1. Installer les dépendances
npm install

# 2. Créer les ressources Cloudflare (une fois)
wrangler r2 bucket create terre-libre-media

# 3. Lancer le dev
npm run dev          # http://localhost:3000

# 4. (Avant deploy prod) Secrets
wrangler secret put RESEND_API_KEY
wrangler secret put CONTACT_RECIPIENT_EMAIL

# 5. Deploy
npm run deploy
```

## Stack

- **Next.js 16** App Router + React 19 + TypeScript strict
- **Cloudflare Workers** via `@opennextjs/cloudflare`
- **R2** pour médias (bucket `terre-libre-media`)
- **Tailwind v4** (palette terre / argile / coquillage)
- **Framer Motion** animations subtiles (`ScrollReveal`, `ken-burns`)
- **Resend** + React Email (formulaire contact)
- **Zod** validation
- **schema-dts** JSON-LD typé (LocalBusiness, Person, Event, Course)

## Pas de base de données

Site **showcase pur** — tout le contenu est dans :
- `src/lib/site-config.ts` — identité, contact, navigation, mentions légales
- `src/data/*.ts` — céramiste, céramiques, cours, stages, expositions, presse, rénovation, boutique, location

Pour modifier le contenu : éditer ces fichiers sur GitHub → déploiement auto sur push `main`.

## Scripts

| Script | Effet |
|---|---|
| `npm run dev` | Serveur dev Next.js |
| `npm run build` | Build OpenNext (prod Workers) |
| `npm run preview` | Build + preview Workers local |
| `npm run deploy` | Build + deploy Workers prod |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |

## Structure

```
src/
├── app/                            # routes App Router
│   ├── page.tsx                    # accueil
│   ├── ceramiques/                 # catalogue
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── la-ceramiste/page.tsx
│   ├── cours/page.tsx
│   ├── stages/page.tsx
│   ├── planning/page.tsx
│   ├── expositions/page.tsx
│   ├── presse/page.tsx
│   ├── projet-de-renovation/page.tsx
│   ├── boutique/page.tsx
│   ├── location-atelier/page.tsx
│   ├── contact/
│   │   ├── page.tsx
│   │   └── actions.ts              # Server Action Resend
│   ├── mentions-legales/page.tsx
│   ├── confidentialite/page.tsx
│   ├── cgu/page.tsx
│   ├── health/route.ts
│   ├── media/[...path]/route.ts    # proxy R2
│   ├── sitemap.ts / robots.ts
│   ├── not-found.tsx / error.tsx
│   ├── layout.tsx
│   └── globals.css                 # palette terre
├── components/
│   ├── ui/                         # button, input, textarea, label
│   ├── public/                     # header, footer, hero, gallery, cards, breadcrumb
│   ├── motion/                     # ReducedMotionProvider, ScrollReveal
│   └── seo/                        # JsonLd + schemas LocalBusiness, Person, Event, Course
├── data/                           # contenu client-éditable (10 fichiers)
├── emails/                         # React Email templates
├── lib/
│   ├── site-config.ts              # source unique contenu
│   ├── resend.ts                   # client Resend + destinataire
│   ├── seo.ts                      # buildMetadata()
│   ├── storage.ts                  # R2 helpers
│   ├── image-loader.ts             # custom next/image loader
│   ├── sanitize.ts
│   ├── utils.ts                    # cn()
│   └── schemas/contact.ts          # Zod schema formulaire
└── middleware.ts                   # 301 legacy WordPress → nouvelles URLs
```

## Documentation

- [`CLAUDE.md`](./CLAUDE.md) — instructions spécifiques au projet (pour Claude Code)
- [`PRELAUNCH.md`](./PRELAUNCH.md) — checklist à 100 % avant mise en ligne
- [`LIVRAISON.md`](./LIVRAISON.md) — doc client remise à la mise en ligne
- [`../CLAUDE.md`](../CLAUDE.md) — règles agence
- [`../CONVENTIONS.md`](../CONVENTIONS.md) — référence technique détaillée
