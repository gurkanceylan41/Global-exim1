/**
 * Robots.txt Configuration
 *
 * Controls search engine crawler access to the site.
 * Allows all pages and points to the sitemap.
 */

export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.globalexim.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
