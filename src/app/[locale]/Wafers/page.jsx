/**
 * Wafers Page
 *
 * Displays wafer products with subcategories:
 * - Rulo Gofretler (wafer-roll)
 * - Gofretler (wafer)
 * - Bisküviler (biscuit)
 */

import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { products } from "../data/productsData";
import CategoryPageClient from "../components/products/CategoryPageClient";

/**
 * Generate page-specific metadata for SEO
 */
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "wafers.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

/**
 * Wafers Page Component
 */
export default async function WafersPage({ params }) {
  const { locale } = await params;

  // Enable static rendering for this locale
  setRequestLocale(locale);

  // Get translations
  const t = await getTranslations("wafers");
  const tProducts = await getTranslations("products");

  // Filter products for wafer categories
  const waferProducts = products.filter((p) =>
    ["wafer-roll", "wafer", "biscuit"].includes(p.category)
  );

  // Subcategories configuration
  const subcategories = [
    { id: "wafer-roll", label: tProducts("subcategories.wafer-roll") },
    { id: "wafer", label: tProducts("subcategories.wafer") },
    { id: "biscuit", label: tProducts("subcategories.biscuit") },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <CategoryPageClient
        products={waferProducts}
        pageTitle={t("hero.title")}
        pageSubtitle={t("hero.subtitle")}
        pageBadge={t("hero.badge")}
        subcategories={subcategories}
        heroGradient="from-rose-950 via-rose-900 to-slate-900"
        heroAccentColor="rose"
        heroFloatingImages={[
          "/images/products/5115.png",
          "/images/products/1215.png",
          "/images/products/99.png",
        ]}
      />
    </div>
  );
}
