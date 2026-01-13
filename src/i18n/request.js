/**
 * i18n Request Configuration
 *
 * This file configures how translations are loaded for each request.
 * It uses the routing configuration and loads the appropriate message file
 * based on the current locale.
 */

import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Get the locale from the request, fallback to default if not found
  let locale = await requestLocale;

  // Validate that the incoming locale is supported
  // If not valid, fallback to default locale
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  // Dynamically import the messages for the requested locale
  // Messages are stored in /src/messages/{locale}.json
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
