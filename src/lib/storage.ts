/**
 * Helpers R2 — résolution URL publique d'un fichier média.
 *
 * Stratégie :
 *  - Si NEXT_PUBLIC_MEDIA_BASE défini (ex. https://media.terre-libre.com) → URL directe (0 hit Worker)
 *  - Sinon → route proxy /media/<path> servie par le Worker (marche partout)
 */

import { getCloudflareContext } from "@opennextjs/cloudflare";

type EnvWithMediaBucket = {
  MEDIA_BUCKET?: R2Bucket;
};

export function getMediaUrl(storagePath: string | null | undefined): string | null {
  if (!storagePath) return null;
  const cleanPath = storagePath.replace(/^\/+/, "");
  const base = process.env.NEXT_PUBLIC_MEDIA_BASE;
  if (base) {
    return `${base.replace(/\/+$/, "")}/${cleanPath}`;
  }
  return `/media/${cleanPath}`;
}

export async function getMediaBucket(): Promise<R2Bucket | undefined> {
  const { env } = await getCloudflareContext({ async: true });
  return (env as unknown as EnvWithMediaBucket).MEDIA_BUCKET;
}

/**
 * Upload côté serveur. Valider taille + MIME AVANT d'appeler.
 * Préférer compresser côté client (browser-image-compression) avant POST.
 */
export async function uploadMedia(
  path: string,
  body: ReadableStream | ArrayBuffer | string | Blob,
  contentType: string,
): Promise<void> {
  const bucket = await getMediaBucket();
  if (!bucket) {
    throw new Error("MEDIA_BUCKET non configuré dans l'environnement Cloudflare.");
  }
  await bucket.put(path, body, {
    httpMetadata: { contentType, cacheControl: "public, max-age=31536000, immutable" },
  });
}

export const ALLOWED_MIME = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
  "image/svg+xml",
] as const;

export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024; // 10 MB
