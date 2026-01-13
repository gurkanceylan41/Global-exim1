/**
 * Root Layout with i18n Support
 *
 * This layout wraps all pages with internationalization support.
 * It provides:
 * - Locale-specific HTML lang attribute for SEO
 * - Translation provider (NextIntlClientProvider) for client components
 * - Dynamic metadata based on current locale
 * - Consistent header across all pages
 */

import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Header from "./components/shared/Header";

// Configure Google Fonts - Geist Sans and Geist Mono
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

/**
 * Generate static params for all supported locales
 * This enables static generation for each locale
 */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/**
 * Generate dynamic metadata based on the current locale
 * This ensures proper SEO for each language version
 */
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.metadata;

  return {
    title: {
      default: t.title,
      template: t.titleTemplate,
    },
    description: t.description,
    keywords: t.keywords,
    authors: [{ name: "Global Exim" }],
    creator: "Global Exim",
    openGraph: {
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "ru_RU",
      siteName: "Global Exim",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      // Add alternate language links for SEO
      languages: {
        tr: "/",
        ru: "/ru",
      },
    },
  };
}

/**
 * Root Layout Component
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {Object} props.params - Route parameters including locale
 */
export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  // Validate that the incoming locale is supported
  // If not, show 404 page
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering for this locale
  setRequestLocale(locale);

  // Load messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap the app with NextIntlClientProvider to enable translations in client components */}
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
