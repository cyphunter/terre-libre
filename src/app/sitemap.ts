import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { categories } from "@/data/ceramiques";

/**
 * Sitemap dynamique du site Terre Libre.
 * Toutes les routes sont statiques — pas de fetch DB.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/+$/, "");
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/ceramiques`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...categories.map((c) => ({
      url: `${base}/ceramiques/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/la-ceramiste`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/cours`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/stages`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/planning`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/expositions`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/presse`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/projet-de-renovation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/boutique`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/location-atelier`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
    { url: `${base}/confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
    { url: `${base}/cgu`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
  ];

  return routes;
}
