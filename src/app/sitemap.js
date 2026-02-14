/**
 * Dynamic Sitemap Generator
 *
 * Generates sitemap.xml with all pages and locale variants.
 * Includes tr (default), en, and ru locales.
 */

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.globalexim.com';

  // Define all routes
  const routes = [
    '',           // Home
    '/About',
    '/Contact',
    '/Products',
    '/Wafers',
    '/Oils',
    '/MilkPowder',
    '/Nuts',
  ];

  // Define all locales
  const locales = ['tr', 'en', 'ru'];
  const defaultLocale = 'tr';

  // Generate sitemap entries for all routes and locales
  const sitemapEntries = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      // For default locale (tr), don't add locale prefix
      const url = locale === defaultLocale
        ? `${baseUrl}${route}`
        : `${baseUrl}/${locale}${route}`;

      // Create alternates for hreflang
      const alternates = {
        languages: {},
      };

      locales.forEach((altLocale) => {
        const langCode = altLocale === 'tr' ? 'tr-TR' : altLocale === 'en' ? 'en-US' : 'ru-RU';
        alternates.languages[langCode] = altLocale === defaultLocale
          ? `${baseUrl}${route}`
          : `${baseUrl}/${altLocale}${route}`;
      });

      // Add x-default pointing to default locale
      alternates.languages['x-default'] = `${baseUrl}${route}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route === '/Products' ? 0.9 : 0.8,
        alternates,
      });
    });
  });

  return sitemapEntries;
}
