import { NextResponse, type NextRequest } from "next/server";

/**
 * Middleware global Terre Libre.
 *
 * Responsabilités :
 *  1. 301 legacy redirects (anciens slugs WordPress → nouveaux slugs Next.js)
 *
 * Les headers de sécurité (CSP, HSTS, X-Frame-Options, etc.) sont émis
 * via next.config.ts → headers().
 *
 * Pas d'authentification : Terre Libre est un site vitrine sans back-office.
 */

const LEGACY_REDIRECTS: Record<string, string> = {
  // Anciens slugs WordPress de terrelibre.com vers nouvelles URLs
  "/mes-ceramiques": "/ceramiques",
  "/mes-ceramiques/": "/ceramiques",
  "/la-ceramiste/": "/la-ceramiste",
  "/expositions-2025": "/expositions",
  "/expositions-2025/": "/expositions",
  "/presse/": "/presse",
  "/le-projet-de-renovation": "/projet-de-renovation",
  "/le-projet-de-renovation/": "/projet-de-renovation",
  "/boutique-metiers-dart": "/boutique",
  "/boutique-metiers-dart/": "/boutique",
  "/location-datelier": "/location-atelier",
  "/location-datelier/": "/location-atelier",
  "/cours-de-ceramique": "/cours",
  "/cours-de-ceramique/": "/cours",
  "/stages-de-tournage-thematiques": "/stages",
  "/stages-de-tournage-thematiques/": "/stages",
  "/planning-cours-stages": "/planning",
  "/planning-cours-stages/": "/planning",
  "/contact/": "/contact",
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const redirect = LEGACY_REDIRECTS[pathname];
  if (redirect && redirect !== pathname) {
    const url = req.nextUrl.clone();
    url.pathname = redirect;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon-|apple-touch-|manifest|robots.txt|sitemap.xml|media/).*)",
  ],
};
