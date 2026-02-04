/**
 * Products Page
 *
 * Product catalog page with filtering and search functionality.
 * Displays products in a minimal grid with category filters.
 */

import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { products } from "../data/productsData";
import ProductsClient from "../components/products/ProductsClient";

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
      <ProductsClient products={products} />
    </div>
  );
}
