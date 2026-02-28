/**
 * Returns the base URL for externally-hosted media (music, videos, images).
 *
 * In development this defaults to "" (files served from public/).
 * In production, set VITE_MEDIA_BASE_URL to your CDN / storage URL, e.g.
 *   https://your-bucket.s3.amazonaws.com
 *   https://cdn.example.com
 *
 * The value should NOT have a trailing slash.
 */
export function getMediaBaseUrl(): string {
  return (import.meta.env.VITE_MEDIA_BASE_URL as string | undefined)?.replace(/\/+$/, '') ?? ''
}

/**
 * Rewrites media paths in an HTML string so that references like
 *   src="/images/...", src="/videos/...", src="/music/...",
 *   data-open-video="/videos/...", data-open-music="/music/..."
 * are prefixed with the external media base URL.
 *
 * No-op when VITE_MEDIA_BASE_URL is empty (local development).
 */
export function prefixMediaInHtml(html: string): string {
  const base = getMediaBaseUrl()
  if (!base) return html
  // Prefix src="/<media>/...", data-open-video="/<media>/...", data-open-music="/<media>/..."
  return html.replace(
    /((?:src|data-open-video|data-open-music)=["'])\/(images|videos|music)\//g,
    `$1${base}/$2/`,
  )
}
