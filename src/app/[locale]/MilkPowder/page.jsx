/**
 * Milk Powder Page
 *
 * Premium milk powder products page with Bunge-style design.
 */

import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import MilkPowderClient from "@/components/milkpowder/MilkPowderClient";

/**
 * Generate page-specific metadata for SEO
 */
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "milkPowder.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

/**
 * Milk Powder Page Component
 */
export default async function MilkPowderPage({ params }) {
  const { locale } = await params;

  // Enable static rendering for this locale
  setRequestLocale(locale);

  return (
    <div className="w-full min-h-screen bg-white">
      <MilkPowderClient />
    </div>
  );
}
