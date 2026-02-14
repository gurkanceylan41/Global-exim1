/**
 * Category Page Component - Server/Client Hybrid
 *
 * SEO optimized category page. Hero is server-rendered,
 * filters and products use client components for interactivity.
 */

import Image from "next/image";
import { LuBox } from "react-icons/lu";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FloatingCard from "@/components/products/FloatingCard";
import ProductFilters from "@/components/products/ProductFilters";
import ScrollToTopButton from "@/components/products/ScrollToTopButton";

// Accent color mappings for gradient hero
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

export default function CategoryPageClient({
  products,
  pageTitle,
  pageSubtitle,
  pageBadge,
  subcategories = null,
  heroImage = null,
  heroGradient = null,
  heroAccentColor = null,
  heroFloatingImages = null,
}) {
  const useGradientHero = !!heroGradient;
  const accent = accentColors[heroAccentColor] || accentColors.rose;

  return (
    <div className="bg-white">
      {/* ===== GRADIENT HERO (like Oils page) ===== */}
      {useGradientHero && (
        <section className="relative h-screen min-h-[700px] overflow-hidden">
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
            <AnimatedSection
              delay={0.3}
              className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 hidden lg:block"
            >
              <div className="relative w-80 h-80">
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
            </AnimatedSection>
          )}

          {/* Hero content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24">
            <AnimatedSection className="max-w-3xl">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${accent.badgeBg} backdrop-blur-sm mb-8`}
              >
                <LuBox className={`w-4 h-4 ${accent.badgeIcon}`} />
                <span
                  className={`text-[12px] tracking-[0.2em] uppercase ${accent.badge} font-medium`}
                >
                  {pageBadge}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-8 leading-[1.1]">
                <span className="font-light">{pageTitle.split(" ")[0]}</span>
                <br />
                <span
                  className={`font-bold bg-gradient-to-r ${accent.titleGradient} bg-clip-text text-transparent`}
                >
                  {pageTitle.split(" ").slice(1).join(" ") || pageTitle}
                </span>
              </h1>

              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
                {pageSubtitle}
              </p>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ===== IMAGE HERO (original style) ===== */}
      {!useGradientHero && heroImage && (
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
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
            <AnimatedSection className="max-w-6xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-5">
                <LuBox className="w-3.5 h-3.5 text-white/70" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-white/70 font-medium">
                  {pageBadge}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-4 leading-[1.1]">
                <span className="font-extralight">
                  {pageTitle.split(" ")[0]}{" "}
                </span>
                <span className="font-bold">
                  {pageTitle.split(" ").slice(1).join(" ") || pageTitle}
                </span>
              </h1>
              <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                {pageSubtitle}
              </p>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Header (if no hero at all) */}
      {!useGradientHero && !heroImage && (
        <header className="relative pt-36 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-slate-100/50 blur-[100px]" />

          <AnimatedSection className="max-w-6xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <LuBox className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-slate-500 font-semibold">
                {pageBadge}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 mb-6 leading-tight">
              <span className="font-extralight">
                {pageTitle.split(" ")[0]}{" "}
              </span>
              <span className="font-bold">
                {pageTitle.split(" ").slice(1).join(" ") || pageTitle}
              </span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              {pageSubtitle}
            </p>
          </AnimatedSection>
        </header>
      )}

      {/* Product Filters and Grid - Client Component */}
      <ProductFilters products={products} subcategories={subcategories} />

      {/* Scroll to top button - Client Component */}
      <ScrollToTopButton />
    </div>
  );
}
