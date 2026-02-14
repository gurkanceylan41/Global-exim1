/**
 * Root Layout with i18n Support
 *
 * This layout wraps all pages with internationalization support.
 * It provides:
 * - Locale-specific HTML lang attribute for SEO
 * - Translation provider (NextIntlClientProvider) for client components
 * - Dynamic metadata based on current locale
 * - Consistent header across all pages
 * - JSON-LD structured data for SEO
 */

import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Header from "@/components/shared/Header";

// Base URL for SEO
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.globalexim.com';

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

  // Determine canonical URL based on locale
  const canonicalUrl = locale === 'tr' ? baseUrl : `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t.title,
      template: t.titleTemplate,
    },
    description: t.description,
    keywords: t.keywords,
    authors: [{ name: "Global Exim" }],
    creator: "Global Exim",
    publisher: "Global Exim",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: locale === "tr" ? "tr_TR" : locale === "en" ? "en_US" : "ru_RU",
      url: canonicalUrl,
      siteName: "Global Exim",
      title: t.title,
      description: t.description,
      images: [
        {
          url: `${baseUrl}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Global Exim - International Trade Partner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: [`${baseUrl}/images/og-image.png`],
      creator: "@globalexim",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "tr-TR": baseUrl,
        "en-US": `${baseUrl}/en`,
        "ru-RU": `${baseUrl}/ru`,
        "x-default": baseUrl,
      },
    },
    verification: {
      // Add verification codes when available
      // google: 'verification-code',
      // yandex: 'verification-code',
    },
  };
}

/**
 * Organization JSON-LD Schema
 */
function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Global Exim",
    url: baseUrl,
    logo: `${baseUrl}/logo1.png`,
    description: "Quality wafer and biscuit manufacturer exporting to 70+ countries. Your trusted partner in international trade.",
    foundingDate: "2010",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      maxValue: 200,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
      addressLocality: "Istanbul",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+90-536-885-4619",
        contactType: "sales",
        availableLanguage: ["Turkish", "English", "Russian"],
      },
    ],
    sameAs: [
      "https://www.instagram.com/hlydmr90/",
      "https://x.com/globalexim",
      "https://wa.me/905368854619",
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 41.0082,
        longitude: 28.9784,
      },
      geoRadius: "10000 km",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

/**
 * WebSite JSON-LD Schema for search functionality
 */
function WebSiteSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Global Exim",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/Products?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
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
      <head>
        {/* JSON-LD Structured Data */}
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap the app with NextIntlClientProvider to enable translations in client components */}
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main id="main-content">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
