/**
 * Products Client Component
 *
 * Interactive client-side component for product filtering and search.
 * Handles category filtering, search functionality, and product grid display.
 */

"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import {
  FaSearch,
  FaBox,
  FaCookie,
  FaLayerGroup,
  FaShoppingBag,
} from "react-icons/fa";

export default function ProductsClient({ products }) {
  // State for current filter and search
  const [currentCategory, setCurrentCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Get translations
  const t = useTranslations("products");

  // Get product names translations object for lookup
  const getProductName = (code, fallbackName) => {
    try {
      const translated = t(`productNames.${code}`);
      // If translation returns the key itself, use fallback
      return translated.startsWith("productNames.") ? fallbackName : translated;
    } catch {
      return fallbackName;
    }
  };

  // Category configuration with icons
  const categories = [
    { id: "all", labelKey: "categories.all", icon: FaShoppingBag },
    { id: "wafer-roll", labelKey: "categories.waferRoll", icon: FaLayerGroup },
    { id: "wafer", labelKey: "categories.wafer", icon: FaBox },
    { id: "biscuit", labelKey: "categories.biscuit", icon: FaCookie },
    { id: "dried", labelKey: "categories.dried", icon: FaShoppingBag },
  ];

  // Category name mapping for product cards
  const categoryNameKeys = {
    "wafer-roll": "categoryNames.waferRoll",
    wafer: "categoryNames.wafer",
    biscuit: "categoryNames.biscuit",
    dried: "categoryNames.dried",
  };

  // Category icons mapping
  const categoryIcons = {
    "wafer-roll": FaLayerGroup,
    wafer: FaBox,
    biscuit: FaCookie,
    dried: FaShoppingBag,
  };

  // Helper function to get translated category name
  const getCategoryName = (category) => {
    const key = categoryNameKeys[category];
    return key ? t(key) : category;
  };

  // Helper function to get category icon
  const getCategoryIcon = (category) => {
    return categoryIcons[category] || FaBox;
  };

  // Filter products based on category and search term
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        currentCategory === "all" || product.category === currentCategory;
      const lowerSearch = searchTerm.toLowerCase();
      const matchesSearch =
        (product.name || "").toLowerCase().includes(lowerSearch) ||
        (product.brand || "").toLowerCase().includes(lowerSearch) ||
        (product.code || "").toLowerCase().includes(lowerSearch);
      return matchesCategory && matchesSearch;
    });
  }, [products, currentCategory, searchTerm]);

  return (
    <>
      {/* Filters Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 shadow-xl">
          {/* Search Input */}
          <div className="relative mb-6">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#53B6F0] w-5 h-5" />
            <input
              type="text"
              className="w-full bg-slate-900/60 border border-slate-700/60 text-white placeholder-slate-400 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#53B6F0] focus:ring-2 focus:ring-[#53B6F0]/30 transition-all duration-300"
              placeholder={t("search.placeholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCurrentCategory(cat.id)}
                  className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    currentCategory === cat.id
                      ? "bg-gradient-to-r from-[#53B6F0] to-cyan-500 text-white shadow-lg shadow-[#53B6F0]/30"
                      : "bg-slate-700/60 text-slate-300 hover:bg-slate-700 hover:text-white hover:shadow-lg"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {t(cat.labelKey)}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        {filteredProducts.length === 0 ? (
          // Empty State
          <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-2xl p-12 text-center shadow-xl">
            <div className="text-slate-400 text-xl">
              {t("emptyState")}
            </div>
          </div>
        ) : (
          // Product Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => {
              const CategoryIcon = getCategoryIcon(product.category);
              return (
                <div
                  key={`${product.code}-${index}`}
                  className="group bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-2xl overflow-hidden hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-[#53B6F0]/30 hover:border-[#53B6F0]/60 hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Product Image */}
                  <div className="relative h-72 bg-white overflow-hidden p-6">
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={product.image || "/images/products/default.jpg"}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/400x400/ffffff/53B6F0?text=Cizmeci+TIME";
                        }}
                      />
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none"></div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-[#53B6F0] to-cyan-500 text-white px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-lg">
                      <CategoryIcon className="w-3 h-3" />
                      {getCategoryName(product.category)}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-5">
                    {/* Brand */}
                    {product.brand && (
                      <div className="text-[#53B6F0] text-xs font-semibold mb-2 uppercase tracking-wider">
                        {product.brand}
                      </div>
                    )}

                    {/* Product Name - Uses translation if available, fallback to original name */}
                    <h3 className="text-white font-bold text-base mb-4 line-clamp-2 group-hover:text-[#53B6F0] transition-colors duration-300">
                      {getProductName(product.code, product.name)}
                    </h3>

                    {/* Product Specs */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-t border-slate-700/50">
                        <span className="text-slate-400 text-sm">{t("labels.code")}</span>
                        <span className="text-white font-semibold text-sm">
                          {product.code}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-t border-slate-700/50">
                        <span className="text-slate-400 text-sm">{t("labels.weight")}</span>
                        <span className="text-white font-semibold text-sm">
                          {product.weight}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-t border-slate-700/50">
                        <span className="text-slate-400 text-sm">
                          {t("labels.units")}
                        </span>
                        <span className="text-white font-semibold text-sm">
                          {product.units}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
