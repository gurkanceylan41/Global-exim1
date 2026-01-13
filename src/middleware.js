/**
 * i18n Middleware Configuration
 *
 * This middleware handles locale detection and routing for internationalization.
 * It intercepts requests and redirects to the appropriate locale-prefixed URL.
 *
 * Features:
 * - Automatic locale detection from browser preferences
 * - URL-based locale routing (/ru/... for Russian, / for Turkish default)
 * - Seamless handling of locale switching
 */

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Create the i18n middleware with our routing configuration
export default createMiddleware(routing);

// Configure which paths the middleware should handle
// This matcher ensures the middleware runs on all pages except static files and API routes
export const config = {
  matcher: [
    // Match all pathnames except for:
    // - API routes (/api/...)
    // - Static files (/_next/static/..., /_next/image/..., /favicon.ico)
    // - Public files with extensions (images, fonts, etc.)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
