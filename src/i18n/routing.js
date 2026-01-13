/**
 * i18n Routing Configuration
 *
 * This file defines the supported locales and default locale for the application.
 * Used by next-intl to handle locale-based routing.
 *
 * Supported languages:
 * - tr: Turkish (Turkce) - Default language
 * - ru: Russian (Русский) - Cyrillic alphabet
 */

import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // List of all supported locales
  locales: ['tr', 'ru'],

  // Default locale when no locale is specified in the URL
  defaultLocale: 'tr',

  // Locale prefix strategy: 'always' shows locale in URL for all languages
  // 'as-needed' hides the default locale from URL
  localePrefix: 'as-needed'
});

// Export locales for use in other parts of the application
export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;
