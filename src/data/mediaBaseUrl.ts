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

const bundledImageFilenames = new Set([
  'gt-moga-build.jpg',
  'gt-moga-poster.jpg',
  'gt-moga-system.jpg',
  'gt-moga-team.jpg',
  'motionplus-sloss-tech.jpg',
])

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

  // Keep portfolio photos bundled with SharpXP while older media stays on the CDN.
  return html.replace(
    /((?:src|data-open-video|data-open-music)=["'])\/(images|videos|music)\/([^"']+)/g,
    (_match, prefix: string, directory: string, relativePath: string) => {
      if (directory === 'images' && bundledImageFilenames.has(relativePath)) {
        return `${prefix}/images/${relativePath}`
      }
      return `${prefix}${base}/${directory}/${relativePath}`
    },
  )
}
