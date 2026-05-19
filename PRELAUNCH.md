# Checklist pré-livraison — Terre Libre

À cocher **à 100 %** avant mise en ligne. Aucune exception.

## Contenu client

- [ ] **SIRET** réel renseigné dans `src/lib/site-config.ts` (`legal.siret`)
- [ ] **Adresse exacte** de l'atelier renseignée (`contact.address`)
- [ ] **Téléphone** réel renseigné (`contact.phone` + `phoneDisplay`)
- [ ] **Email** validé (`contact.email`)
- [ ] **Coordonnées GPS** ajustées avec l'adresse réelle (`contact.geo`)
- [ ] **Forme juridique** confirmée (`legalName`, `legal.rcs`, `legal.capital`)
- [ ] **Photos** Marie-Laure : portrait, atelier, céramiques HD, étapes rénovation
- [ ] **Pièces du catalogue** : photos + descriptions + dimensions complétées dans `src/data/ceramiques.ts`
- [ ] **OG image** 1200×630 placée dans `/public/images/og/og-default.jpg`
- [ ] **Favicon set** complet : favicon.ico + icon-192.png + icon-512.png + apple-touch-icon.png

## Qualité technique

- [ ] Lighthouse mobile ≥ 95 sur les 4 catégories (Perf, A11y, SEO, Best Practices) — joindre rapport
- [ ] LCP < 2.5s · INP < 200ms · CLS < 0.1 · FCP < 1.8s (mobile 4G simulé)
- [ ] `npm run typecheck` : 0 erreur
- [ ] `npm run lint` : 0 erreur
- [ ] Bundle JS initial < 170 KB gzip
- [ ] Console navigateur sur toutes les routes principales : 0 erreur / 0 warning bloquant

## Accessibilité (WCAG 2.1 AA)

- [ ] Navigation clavier complète (Tab, Shift+Tab, Enter, Esc)
- [ ] Focus visible partout (`focus-visible` ring brand)
- [ ] Skip-to-content présent et fonctionnel (lien `#main-content`)
- [ ] Contraste 4.5:1 (ink sur paper = 13.2:1 ✅, brand sur paper = 4.9:1 ✅) — vérifié axe DevTools
- [ ] Tous `alt` renseignés sur les photos (vides si décoratif)
- [ ] Formulaire contact : `<label>` lié, messages erreur clairs en français, `aria-invalid` + `aria-describedby`
- [ ] `prefers-reduced-motion` respecté (ReducedMotionProvider + ken-burns désactivé)
- [ ] Test lecteur d'écran (NVDA ou VoiceOver) sur page d'accueil et /contact

## SEO

- [ ] 1 seul `<h1>` par page, hiérarchie h1-h6 logique
- [ ] `Metadata` Next.js sur toutes les pages (titre, description, canonical, OG)
- [ ] JSON-LD typés : LocalBusiness (layout), Person (/la-ceramiste), Event (/expositions), Course (/cours), BreadcrumbList (pages profondes)
- [ ] OpenGraph image 1200×630 testée (Facebook Debugger + Twitter Card Validator)
- [ ] `sitemap.xml` accessible (`/sitemap.xml`) — contient toutes les routes
- [ ] `robots.txt` valide (`/robots.txt`)
- [ ] URLs slugs FR clairs, sans `.html`, sans query string
- [ ] **301 redirects WordPress** testés (`/mes-ceramiques`, `/le-projet-de-renovation`, etc.) avec `curl -I`
- [ ] Google Search Console : site ajouté + sitemap soumis
- [ ] Bing Webmaster Tools : ajouté

## Sécurité

- [ ] Headers présents (test [securityheaders.com](https://securityheaders.com) → **A+**)
  - [ ] CSP
  - [ ] HSTS
  - [ ] X-Frame-Options : DENY
  - [ ] X-Content-Type-Options : nosniff
  - [ ] Referrer-Policy
  - [ ] Permissions-Policy
- [ ] HTTPS partout, 0 mixed content
- [ ] Validation Zod sur la Server Action `sendContactMessage`
- [ ] Honeypot anti-spam testé (champ `website` rempli → succès silencieux, pas d'envoi)
- [ ] Rate limiting actif via Cloudflare WAF sur `/contact` (5 envois max / 10 min / IP)
- [ ] Secrets via `wrangler secret put` (`RESEND_API_KEY`, `CONTACT_RECIPIENT_EMAIL`), 0 clé en clair

## Légal RGPD France

- [ ] Page Mentions légales en ligne (raison sociale, SIRET, hébergeur Cloudflare)
- [ ] Page Politique de confidentialité en ligne (RGPD, durée conservation 3 ans)
- [ ] Page CGU en ligne (pas de e-commerce → pas de CGV ni rétractation requise)
- [ ] Formulaire contact : case RGPD **non pré-cochée** + lien vers politique
- [ ] Pas de bandeau cookies requis (Cloudflare Web Analytics uniquement, sans cookie tiers)

## Email (Resend)

- [ ] Domaine `terre-libre.com` vérifié sur Resend (statut "verified")
- [ ] SPF + DKIM (3 CNAME) + DMARC + return-path présents en DNS Cloudflare
- [ ] Test envoi vers Gmail + Outlook → reçus en inbox (pas spam)
- [ ] `from` = `contact@terre-libre.com` (pas Gmail/OVH)
- [ ] Test formulaire de contact en prod : Marie-Laure reçoit la notification + visiteur reçoit l'accusé

## DNS / Domaine

- [ ] OVH (ou autre registrar) NS pointe vers Cloudflare (vérif `dig NS terre-libre.com`)
- [ ] A/CNAME @ et www → Workers (proxy ON 🟠)
- [ ] DNS Resend (SPF + DKIM + DMARC) propagés (vérif `dig TXT terre-libre.com`)
- [ ] SSL/TLS mode "Full (strict)" activé
- [ ] Cert SSL valide (vérif `curl -I https://terre-libre.com`)
- [ ] Email forwarding `contact@terre-libre.com` → email réel Marie-Laure (Cloudflare Email Routing)

## Cloudflare resources

- [ ] R2 bucket `terre-libre-media` créé
- [ ] Pas de binding D1 ni KV dans `wrangler.jsonc` (showcase pur — confirmé)
- [ ] `observability.enabled = true` dans `wrangler.jsonc`

## Responsive & cross-browser

- [ ] Tests sur 5 breakpoints : 375 / 768 / 1024 / 1440 / 1920
- [ ] iOS Safari (Mac Simulator ou device réel)
- [ ] Android Chrome
- [ ] Pas de scrollbar horizontale à 320px de large
- [ ] Touch targets ≥ 44×44px (boutons CTA, liens nav mobile)
- [ ] Menu burger mobile fonctionne (ouvre/ferme/se ferme au changement de page)

## Assets

- [ ] Images en WebP/AVIF (sauf SVG quand nécessaire pour logos)
- [ ] Hero LCP < 200 KB (compressé)
- [ ] Favicon set complet :
  - [ ] `/favicon.ico`
  - [ ] `/icon-192.png`
  - [ ] `/icon-512.png`
  - [ ] `/apple-touch-icon.png` (180×180)
  - [ ] `/manifest.webmanifest`
- [ ] Polices Fraunces + Inter via `next/font` (preload + display swap)

## Pages d'erreur

- [ ] `/not-found.tsx` personnalisée (404 céramique) et testée (`/route-qui-n-existe-pas`)
- [ ] `/error.tsx` personnalisée et testée

## Monitoring

- [ ] Endpoint `/health` répond 200 (`curl https://terre-libre.com/health`)
- [ ] Cloudflare Web Analytics activé pour le domaine
- [ ] Uptime monitoring externe (BetterStack / UptimeRobot) configuré check 5 min sur `/health`
- [ ] Alertes uptime → email Kevin

## Repo & CI/CD

- [ ] README à jour
- [ ] Branches protégées (main protégée, PR review requise)
- [ ] Secrets GitHub Actions configurés (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `RESEND_API_KEY`)
- [ ] CI verte sur dernier commit
- [ ] Deploy auto sur push `main` vérifié

## Livraison client

- [ ] `LIVRAISON.md` rempli (accès, comment éditer site-config.ts + data/*, procédures)
- [ ] Tableau d'accès remis (Cloudflare, Resend, GitHub, Registrar, GSC, monitoring)
- [ ] Démo client : tour du site, comment publier/éditer une céramique, comment changer un tarif
- [ ] Contrat de maintenance signé (si applicable)
