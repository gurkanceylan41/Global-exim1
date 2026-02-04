/**
 * Products Client Component
 *
 * Interactive client-side component for product filtering and search.
 * Minimal design matching the site's clean aesthetic.
 */

"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { LuSearch } from "react-icons/lu";

export default function ProductsClient({ products }) {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const headerRef = useRef(null);
  const filtersRef = useRef(null);
  const cardRefs = useRef([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const t = useTranslations("products");

  const categories = [
    { id: "all", labelKey: "categories.all" },
    { id: "wafer-roll", labelKey: "categories.waferRoll" },
    { id: "wafer", labelKey: "categories.wafer" },
    { id: "biscuit", labelKey: "categories.biscuit" },
    { id: "dried", labelKey: "categories.dried" },
  ];

  const categoryNameKeys = {
    "wafer-roll": "categoryNames.waferRoll",
    wafer: "categoryNames.wafer",
    biscuit: "categoryNames.biscuit",
    dried: "categoryNames.dried",
  };

  const getCategoryName = (category) => {
    const key = categoryNameKeys[category];
    return key ? t(key) : category;
  };

  const getProductName = (code, fallbackName) => {
    try {
      const translated = t(`productNames.${code}`);
      return translated.startsWith("productNames.") ? fallbackName : translated;
    } catch {
      return fallbackName;
    }
  };

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

  useEffect(() => {
    const entries = [
      { ref: headerRef, setter: setHeaderVisible },
      { ref: filtersRef, setter: setFiltersVisible },
    ];

    const observers = entries.map(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    setCardVisibility(new Array(filteredProducts.length).fill(false));
    cardRefs.current = cardRefs.current.slice(0, filteredProducts.length);
  }, [filteredProducts]);

  useEffect(() => {
    const observers = cardRefs.current.map((el, index) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCardVisibility((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.05 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [filteredProducts]);

  return (
    <>
      {/* Header */}
      <header
        className="pt-36 pb-16 px-6 border-b border-slate-200"
        ref={headerRef}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <span
            className="inline-block text-[11px] tracking-[0.3em] uppercase text-slate-400 font-medium"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {t("header.badge")}
          </span>

          <div
            className="w-10 h-[1px] bg-slate-300 mx-auto mt-4 mb-6"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "scaleX(1)" : "scaleX(0)",
              transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
            }}
          />

          {/* Title */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl tracking-[0.02em] text-slate-900 mb-6"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            <span className="font-extralight">
              {t("header.title").split(" ")[0]}{" "}
            </span>
            <span className="font-bold">
              {t("header.title").split(" ").slice(1).join(" ")}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
            }}
          >
            {t("header.subtitle")}
          </p>
        </div>
      </header>

      {/* Filters Section */}
      <div className="max-w-5xl mx-auto px-6 py-10" ref={filtersRef}>
        {/* Search Input */}
        <div
          className="relative mb-8"
          style={{
            opacity: filtersVisible ? 1 : 0,
            transform: filtersVisible ? "translateY(0)" : "translateY(15px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <LuSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 w-4 h-4" />
          <input
            type="text"
            className="w-full bg-transparent border-b border-slate-200 text-slate-900 placeholder-slate-400 py-3 pl-7 pr-4 focus:outline-none focus:border-slate-900 transition-colors duration-300 text-sm font-light tracking-wide"
            placeholder={t("search.placeholder")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => setCurrentCategory(cat.id)}
              className={`px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase font-medium transition-all duration-300 ${
                currentCategory === cat.id
                  ? "bg-slate-900 text-white"
                  : "bg-transparent text-slate-500 border border-slate-200 hover:border-slate-400 hover:text-slate-900"
              }`}
              style={{
                opacity: filtersVisible ? 1 : 0,
                transform: filtersVisible
                  ? "translateY(0)"
                  : "translateY(10px)",
                transition: `opacity 0.4s ease ${
                  0.2 + index * 0.08
                }s, transform 0.4s ease ${
                  0.2 + index * 0.08
                }s, background-color 0.3s, color 0.3s, border-color 0.3s`,
              }}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-[1px] bg-slate-200" />
      </div>

      {/* Products Grid */}
      <div className="max-w-5xl mx-auto px-6 py-16 pb-28">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-sm font-light tracking-wide">
              {t("emptyState")}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {filteredProducts.map((product, index) => (
              <div
                key={`${product.code}-${index}`}
                ref={(el) => (cardRefs.current[index] = el)}
                className="group bg-white p-6 border border-slate-200 -mt-px -ml-px flex flex-col"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  opacity: cardVisibility[index] ? 1 : 0,
                  transform: !cardVisibility[index]
                    ? "translateY(25px)"
                    : hoveredCard === index
                      ? "translateY(-8px)"
                      : "translateY(0)",
                  transition: cardVisibility[index]
                    ? "opacity 0.5s ease, transform 0.6s ease-in-out"
                    : `opacity 0.5s ease ${(index % 3) * 0.1}s, transform 0.5s ease ${(index % 3) * 0.1}s`,
                }}
              >
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden mb-6 bg-white">
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <img
                      src={product.image || "/images/products/default.jpg"}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x400/f8fafc/94a3b8?text=No+Image";
                      }}
                    />
                  </div>
                </div>

                {/* Category */}
                <span className="text-[10px] tracking-[0.2em] uppercase text-slate-400 font-light mb-2">
                  {getCategoryName(product.category)}
                </span>

                {/* Product Name */}
                <h3 className="text-sm tracking-[0.05em] font-medium text-slate-900 mb-1 line-clamp-2 group-hover:text-slate-700 transition-colors duration-300">
                  {getProductName(product.code, product.name)}
                </h3>

                {/* Brand */}
                {product.brand && (
                  <span className="text-[11px] text-slate-400 font-light mb-4">
                    {product.brand}
                  </span>
                )}

                {/* Divider */}
                <div className="w-6 h-[1px] bg-slate-200 my-4 group-hover:w-10 transition-all duration-500" />

                {/* Product Specs */}
                <div className="space-y-0 mt-auto">
                  <div className="flex justify-between items-center py-2 border-t border-slate-100">
                    <span className="text-[11px] tracking-[0.1em] uppercase text-slate-400 font-light">
                      {t("labels.code")}
                    </span>
                    <span className="text-sm text-slate-700 font-medium">
                      {product.code}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-slate-100">
                    <span className="text-[11px] tracking-[0.1em] uppercase text-slate-400 font-light">
                      {t("labels.weight")}
                    </span>
                    <span className="text-sm text-slate-700 font-medium">
                      {product.weight}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-slate-100 border-b">
                    <span className="text-[11px] tracking-[0.1em] uppercase text-slate-400 font-light">
                      {t("labels.units")}
                    </span>
                    <span className="text-sm text-slate-700 font-medium">
                      {product.units}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
