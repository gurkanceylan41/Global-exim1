/**
 * Nuts Page
 *
 * Premium natural nuts and dried fruits page with Bunge-style design.
 */

import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import NutsClient from "../components/nuts/NutsClient";

/**
 * Generate page-specific metadata for SEO
 */
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nuts.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

/**
 * Nuts Page Component
 */
export default async function NutsPage({ params }) {
  const { locale } = await params;

  // Enable static rendering for this locale
  setRequestLocale(locale);

  return (
    <div className="w-full min-h-screen bg-white">
      <NutsClient />
    </div>
  );
}
