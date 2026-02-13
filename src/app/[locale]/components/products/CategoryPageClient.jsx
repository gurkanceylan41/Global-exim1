/**
 * Category Page Client Component - Premium Redesign
 *
 * Reusable component for category-specific product pages.
 * Used by Wafers, MilkPowder, Nuts, and Oils pages.
 */

"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { LuSearch, LuX, LuBox, LuArrowUp } from "react-icons/lu";

// Animated section helper
function AnimatedSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// Premium product card
function ProductCard({ product, index, isVisible, t, getProductName }) {
  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(30px) scale(0.97)",
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`,
      }}
    >
      {/* Product Image - pure white bg so white image edges blend seamlessly */}
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
        {/* Subtle bottom fade into content area */}
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

        {/* Animated divider */}
        <div className="w-8 h-[2px] bg-slate-200 rounded-full mb-4 group-hover:w-16 group-hover:bg-slate-400 transition-all duration-700" />

        {/* Product details */}
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
  );
}

// Floating image card with hover
function FloatingCard({ src, className, baseRotate }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${className} relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl cursor-pointer`}
      style={{
        transform: hovered
          ? "rotate(0deg) scale(1.12)"
          : `rotate(${baseRotate}deg) scale(1)`,
        boxShadow: hovered
          ? "0 30px 60px rgba(0,0,0,0.6)"
          : "0 15px 30px rgba(0,0,0,0.3)",
        transition:
          "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease",
        zIndex: hovered ? 10 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          pointerEvents: "none",
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}

// Subcategory pill button
function SubcategoryButton({ isActive, onClick, label, index, isVisible }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 text-sm tracking-[0.05em] font-medium rounded-full transition-all duration-500 ${
        isActive
          ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
          : "bg-white text-slate-500 border border-slate-200 hover:border-slate-400 hover:text-slate-900 hover:shadow-md"
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(15px)",
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s`,
      }}
    >
      {label}
    </button>
  );
}

export default function CategoryPageClient({
  products,
  pageTitle,
  pageSubtitle,
  pageBadge,
  subcategories = null,
  heroImage = null,
  // Gradient hero settings (like Oils page style)
  heroGradient = null, // e.g. "from-rose-950 via-rose-900 to-slate-900"
  heroAccentColor = null, // e.g. "rose" for accent elements
  heroFloatingImages = null, // array of image paths for floating cards
}) {
  const [activeSubcategory, setActiveSubcategory] = useState(
    subcategories ? subcategories[0]?.id : null
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [productsVisible, setProductsVisible] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const productsRef = useRef(null);

  const t = useTranslations("products");

  // Use gradient hero mode if heroGradient is provided
  const useGradientHero = !!heroGradient;

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);

    setTimeout(() => setFiltersVisible(true), 200);
    setTimeout(() => setProductsVisible(true), 400);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Accent color mappings
  const accentColors = {
    rose: {
      badge: "text-rose-300",
      badgeBg: "bg-white/10 border-white/10",
      badgeIcon: "text-rose-400",
      blur1: "bg-rose-500/10",
      blur2: "bg-amber-500/10",
      blur3: "bg-rose-400/5",
      titleGradient: "from-rose-300 to-amber-200",
    },
    emerald: {
      badge: "text-emerald-300",
      badgeBg: "bg-white/10 border-white/10",
      badgeIcon: "text-emerald-400",
      blur1: "bg-emerald-500/10",
      blur2: "bg-amber-500/10",
      blur3: "bg-emerald-400/5",
      titleGradient: "from-emerald-300 to-amber-200",
    },
    blue: {
      badge: "text-blue-300",
      badgeBg: "bg-white/10 border-white/10",
      badgeIcon: "text-blue-400",
      blur1: "bg-blue-500/10",
      blur2: "bg-cyan-500/10",
      blur3: "bg-blue-400/5",
      titleGradient: "from-blue-300 to-cyan-200",
    },
    amber: {
      badge: "text-amber-300",
      badgeBg: "bg-white/10 border-white/10",
      badgeIcon: "text-amber-400",
      blur1: "bg-amber-500/10",
      blur2: "bg-orange-500/10",
      blur3: "bg-amber-400/5",
      titleGradient: "from-amber-300 to-orange-200",
    },
  };

  const accent = accentColors[heroAccentColor] || accentColors.rose;

  return (
    <div className="bg-white">
      {/* ===== GRADIENT HERO (like Oils page) ===== */}
      {useGradientHero && (
        <section
          ref={headerRef}
          className="relative h-screen min-h-[700px] overflow-hidden"
        >
          {/* Animated gradient background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${heroGradient}`}
          />

          {/* Decorative blur elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`absolute top-20 right-20 w-96 h-96 rounded-full ${accent.blur1} blur-3xl`}
            />
            <div
              className={`absolute bottom-20 left-10 w-80 h-80 rounded-full ${accent.blur2} blur-3xl`}
            />
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full ${accent.blur3} blur-3xl`}
            />
          </div>

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Floating product images */}
          {heroFloatingImages && heroFloatingImages.length >= 3 && (
            <div className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 hidden lg:block">
              <div
                className="relative w-80 h-80"
                style={{
                  opacity: headerVisible ? 1 : 0,
                  transform: headerVisible
                    ? "translateX(0) rotate(0deg)"
                    : "translateX(60px) rotate(5deg)",
                  transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
                }}
              >
                <FloatingCard
                  src={heroFloatingImages[0]}
                  className="absolute -top-8 -left-8 w-40 h-40"
                  baseRotate={-6}
                />
                <FloatingCard
                  src={heroFloatingImages[1]}
                  className="absolute left-30 w-48 h-48"
                  baseRotate={4}
                />
                <FloatingCard
                  src={heroFloatingImages[2]}
                  className="absolute left-8 w-36 h-36"
                  baseRotate={-3}
                />
              </div>
            </div>
          )}

          {/* Hero content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24 pointer-events-none">
            <div className="max-w-3xl pointer-events-auto">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${accent.badgeBg} backdrop-blur-sm mb-8`}
                style={{
                  opacity: headerVisible ? 1 : 0,
                  transform: headerVisible
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <LuBox className={`w-4 h-4 ${accent.badgeIcon}`} />
                <span
                  className={`text-[12px] tracking-[0.2em] uppercase ${accent.badge} font-medium`}
                >
                  {pageBadge}
                </span>
              </div>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-8 leading-[1.1]"
                style={{
                  opacity: headerVisible ? 1 : 0,
                  transform: headerVisible
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
                }}
              >
                <span className="font-light">{pageTitle.split(" ")[0]}</span>
                <br />
                <span
                  className={`font-bold bg-gradient-to-r ${accent.titleGradient} bg-clip-text text-transparent`}
                >
                  {pageTitle.split(" ").slice(1).join(" ") || pageTitle}
                </span>
              </h1>

              <p
                className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10"
                style={{
                  opacity: headerVisible ? 1 : 0,
                  transform: headerVisible
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
                }}
              >
                {pageSubtitle}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ===== IMAGE HERO (original style) ===== */}
      {!useGradientHero && heroImage && (
        <section
          ref={headerRef}
          className="relative h-[50vh] min-h-[400px] overflow-hidden"
        >
          <Image
            src={heroImage}
            alt={pageTitle}
            fill
            className="object-cover"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 pb-16 pt-8 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-5"
                style={{
                  opacity: headerVisible ? 1 : 0,
                  transform: headerVisible
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <LuBox className="w-3.5 h-3.5 text-white/70" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-white/70 font-medium">
                  {pageBadge}
                </span>
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-4 leading-[1.1]"
                style={{
                  opacity: headerVisible ? 1 : 0,
                  transform: headerVisible
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
                }}
              >
                <span className="font-extralight">
                  {pageTitle.split(" ")[0]}{" "}
                </span>
                <span className="font-bold">
                  {pageTitle.split(" ").slice(1).join(" ") || pageTitle}
                </span>
              </h1>
              <p
                className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-2xl"
                style={{
                  opacity: headerVisible ? 1 : 0,
                  transform: headerVisible
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
                }}
              >
                {pageSubtitle}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Header (if no hero at all) */}
      {!useGradientHero && !heroImage && (
        <header
          ref={headerRef}
          className="relative pt-36 pb-20 px-6 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-slate-100/50 blur-[100px]" />

          <div className="max-w-6xl mx-auto text-center relative">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
              style={{
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? "translateY(0)" : "translateY(15px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <LuBox className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-slate-500 font-semibold">
                {pageBadge}
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 mb-6 leading-tight"
              style={{
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
              }}
            >
              <span className="font-extralight">
                {pageTitle.split(" ")[0]}{" "}
              </span>
              <span className="font-bold">
                {pageTitle.split(" ").slice(1).join(" ") || pageTitle}
              </span>
            </h1>
            <p
              className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
              style={{
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? "translateY(0)" : "translateY(15px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
              }}
            >
              {pageSubtitle}
            </p>
          </div>
        </header>
      )}

      {/* Filters & Search Section */}
      <section className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {subcategories && subcategories.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {subcategories.map((sub, index) => (
                  <SubcategoryButton
                    key={sub.id}
                    isActive={activeSubcategory === sub.id}
                    onClick={() => {
                      setActiveSubcategory(sub.id);
                      setProductsVisible(false);
                      setTimeout(() => setProductsVisible(true), 100);
                    }}
                    label={sub.label}
                    index={index}
                    isVisible={filtersVisible}
                  />
                ))}
              </div>
            )}

            <div
              className="relative w-full md:w-80"
              style={{
                opacity: filtersVisible ? 1 : 0,
                transform: filtersVisible
                  ? "translateY(0)"
                  : "translateY(10px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
              }}
            >
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
        <AnimatedSection>
          <p className="text-xs tracking-[0.2em] uppercase text-slate-400 font-medium">
            {filteredProducts.length} {t("results") || "ürün"}
          </p>
        </AnimatedSection>
      </div>

      {/* Products Grid */}
      <section ref={productsRef} className="max-w-6xl mx-auto px-6 py-8 pb-32">
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
                isVisible={productsVisible}
                t={t}
                getProductName={getProductName}
              />
            ))}
          </div>
        )}
      </section>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-slate-900 text-white shadow-lg shadow-slate-900/30 flex items-center justify-center z-50 transition-all duration-500 hover:bg-slate-700 hover:scale-110 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <LuArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
