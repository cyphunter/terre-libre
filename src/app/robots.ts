import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.url.replace(/\/+$/, "");
  const isProd =
    process.env.NEXT_PUBLIC_ENV === "production" ||
    base.includes("terre-libre.com");

  // En staging / preview : désindexer tout
  if (!isProd) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/media/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
