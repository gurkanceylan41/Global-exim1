/**
 * ProductFilters - Client Component
 *
 * Interactive filter bar with subcategory tabs and search.
 * Separated for minimal client bundle while keeping interactivity.
 */

"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { LuSearch, LuX } from "react-icons/lu";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Product card component
function ProductCard({ product, index, t, getProductName }) {
  return (
    <AnimatedSection delay={index * 0.03}>
      <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-700">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-white">
          <div className="w-full h-full flex items-center justify-center p-6">
            <img
              src={product.image || "/images/products/default.jpg"}
              alt={product.name}
              className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23f8fafc' width='200' height='200'/%3E%3Ctext fill='%2394a3b8' font-family='system-ui' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 border-t border-slate-50">
          {product.brand && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 mb-3">
              <span className="text-[9px] tracking-[0.2em] uppercase text-slate-400 font-semibold">
                {product.brand}
              </span>
            </div>
          )}
          <h3 className="text-sm tracking-[0.02em] font-semibold text-slate-900 mb-3 line-clamp-2 min-h-[2.5rem] group-hover:text-slate-700 transition-colors">
            {getProductName(product.code, product.name)}
          </h3>

          <div className="w-8 h-[2px] bg-slate-200 rounded-full mb-4 group-hover:w-16 group-hover:bg-slate-400 transition-all duration-700" />

          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-400 tracking-[0.1em] uppercase font-medium">
                {t("labels.code")}
              </span>
              <span className="text-slate-700 font-semibold bg-slate-50 px-2.5 py-1 rounded-md">
                {product.code}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400 tracking-[0.1em] uppercase font-medium">
                {t("labels.weight")}
              </span>
              <span className="text-slate-700 font-semibold">
                {product.weight}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400 tracking-[0.1em] uppercase font-medium">
                {t("labels.units")}
              </span>
              <span className="text-slate-700 font-semibold">
                {product.units}
              </span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function ProductFilters({ products, subcategories = null }) {
  const [activeSubcategory, setActiveSubcategory] = useState(
    subcategories ? subcategories[0]?.id : null
  );
  const [searchTerm, setSearchTerm] = useState("");

  const t = useTranslations("products");

  const getProductName = (code, fallbackName) => {
    try {
      const translated = t(`productNames.${code}`);
      return translated.startsWith("productNames.") ? fallbackName : translated;
    } catch {
      return fallbackName;
    }
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (subcategories && activeSubcategory) {
      filtered = products.filter((p) => p.category === activeSubcategory);
    }

    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          (product.name || "").toLowerCase().includes(lowerSearch) ||
          (product.brand || "").toLowerCase().includes(lowerSearch) ||
          (product.code || "").toLowerCase().includes(lowerSearch)
      );
    }

    return filtered;
  }, [products, activeSubcategory, searchTerm, subcategories]);

  return (
    <>
      {/* Filters & Search Section */}
      <section className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {subcategories && subcategories.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {subcategories.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubcategory(sub.id)}
                    className={`px-6 py-3 text-sm tracking-[0.05em] font-medium rounded-full transition-all duration-500 ${
                      activeSubcategory === sub.id
                        ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                        : "bg-white text-slate-500 border border-slate-200 hover:border-slate-400 hover:text-slate-900 hover:shadow-md"
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}

            <div className="relative w-full md:w-80">
              <LuSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-4 h-4" />
              <input
                type="text"
                className="w-full bg-slate-50 border border-slate-200 rounded-full text-slate-900 placeholder-slate-400 py-3 pl-11 pr-10 focus:outline-none focus:border-slate-400 focus:bg-white focus:shadow-md transition-all duration-300 text-sm font-light tracking-wide"
                placeholder={t("search.placeholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <LuX className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results count */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-2">
        <p className="text-xs tracking-[0.2em] uppercase text-slate-400 font-medium">
          {filteredProducts.length} {t("results") || "ürün"}
        </p>
      </div>

      {/* Products Grid */}
      <section className="max-w-6xl mx-auto px-6 py-8 pb-32">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-32">
            <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mx-auto mb-6">
              <LuSearch className="w-8 h-8 text-slate-300" />
            </div>
            <p className="text-slate-400 text-base font-light tracking-wide mb-2">
              {t("emptyState")}
            </p>
            <p className="text-slate-300 text-sm font-light">
              {t("tryDifferentSearch") || "Farklı bir arama deneyin"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={`${product.code}-${index}`}
                product={product}
                index={index}
                t={t}
                getProductName={getProductName}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
