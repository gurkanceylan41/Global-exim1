/**
 * Home Page
 *
 * Main landing page displaying the hero section and about section.
 * Uses server-side translations for metadata and client components for interactive content.
 */

import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import AboutSection from "./components/home/AboutSection";
import HeroSection from "./components/home/HeroSection";

/**
 * Generate page-specific metadata for SEO
 * Translations are loaded server-side for optimal performance
 */
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

/**
 * Home Page Component
 *
 * @param {Object} props - Component props
 * @param {Object} props.params - Route parameters including locale
 */
export default async function HomePage({ params }) {
  const { locale } = await params;

  // Enable static rendering for this locale
  setRequestLocale(locale);

  return (
    <>
      {/* Hero section with main tagline and CTA buttons */}
      <HeroSection />

      {/* About section with company highlights and statistics */}
      <AboutSection />
    </>
  );
}
