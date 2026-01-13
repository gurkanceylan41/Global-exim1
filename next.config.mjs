/**
 * Next.js Configuration with i18n Support
 *
 * This configuration integrates next-intl for internationalization.
 * The plugin handles automatic message loading and locale detection.
 */

import createNextIntlPlugin from 'next-intl/plugin';

// Create the next-intl plugin with the path to the request configuration
const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // You can add other Next.js config options here
};

// Export the config wrapped with the next-intl plugin
export default withNextIntl(nextConfig);
