/**
 * Products Page
 *
 * Overview page showing category cards that link to dedicated product pages.
 */

import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import ProductsClient from "@/components/products/ProductsClient";

/**
 * Generate page-specific metadata for SEO
 */
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

/**
 * Products Page Component
 */
export default async function ProductsPage({ params }) {
  const { locale } = await params;

  // Enable static rendering for this locale
  setRequestLocale(locale);

  // Get translations for server-rendered content
  const t = await getTranslations("products");

  return (
    <div className="w-full min-h-screen bg-white">
      <ProductsClient />
    </div>
  );
}
