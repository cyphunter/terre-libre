import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * Proxy R2 pour les médias.
 *
 * URL : /media/<path>
 * Ex : /media/ceramiques/utiles/bol-tournesol.jpg
 *
 * Avantage : pas besoin de custom domain R2, marche partout dès le déploiement.
 * Inconvénient : un hit Worker par image (compté dans le free tier).
 *
 * Migration recommandée à terme : configurer un custom domain R2 public
 * (ex: media.terre-libre.com) et définir NEXT_PUBLIC_MEDIA_BASE dans .env
 * pour bypasser ce proxy.
 */
export const runtime = "edge";

const CACHE_CONTROL = "public, max-age=31536000, immutable";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  const key = path.join("/");

  if (!key) {
    return new Response("Not Found", { status: 404 });
  }

  const { env } = await getCloudflareContext({ async: true });
  const bucket = (env as { MEDIA_BUCKET?: R2Bucket }).MEDIA_BUCKET;

  if (!bucket) {
    return new Response("Bucket not configured", { status: 500 });
  }

  const object = await bucket.get(key);
  if (!object) {
    return new Response("Not Found", { status: 404 });
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("Cache-Control", CACHE_CONTROL);
  headers.set("ETag", object.httpEtag);

  return new Response(object.body, { headers });
}
