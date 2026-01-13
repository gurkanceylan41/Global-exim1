/**
 * i18n Navigation Utilities
 *
 * Creates locale-aware navigation components and hooks.
 * These utilities automatically handle locale prefixes in URLs.
 */

import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Create navigation utilities with our routing configuration
// This provides locale-aware Link, redirect, usePathname, and useRouter
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
