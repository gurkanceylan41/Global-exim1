/**
 * Products Client Component - Premium Redesign
 *
 * Overview page showing 4 main category cards that link to dedicated pages:
 * - GOFRETLER → /Wafers
 * - YAĞLAR → /Oils
 * - SÜT TOZU → /MilkPowder
 * - DOĞAL KURUYEMİŞ → /Nuts
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuSparkles,
  LuBox,
  LuGlobe,
  LuShield,
} from "react-icons/lu";

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

// Floating image card with hover (same as Wafers page)
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

// Premium category card with large image, gradient overlay, and hover effects
function CategoryCard({ category, link, image, t, index, isVisible, color }) {
  return (
    <Link
      href={link}
      className="group relative block overflow-hidden rounded-2xl"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(40px) scale(0.97)",
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s`,
      }}
    >
      {/* Image with aspect ratio */}
      <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={t(`mainCategories.${category}.title`)}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
          quality={85}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
        />
      </div>

      {/* Category number */}
      <div className="absolute top-5 right-5">
        <span className="text-[11px] tracking-[0.2em] text-white/30 font-mono">
          0{index + 1}
        </span>
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-medium mb-2">
            {t(`mainCategories.${category}.subtitle`)}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-4">
            {t(`mainCategories.${category}.title`)}
          </h3>
          <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors duration-300">
            <span className="text-sm font-medium tracking-wide">
              {t("viewCategory")}
            </span>
            <LuArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>

        {/* Animated underline */}
        <div className="mt-4 h-[2px] bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white/70 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
        </div>
      </div>
    </Link>
  );
}

export default function ProductsClient() {
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const categoriesRef = useRef(null);
  const [categoriesVisible, setCategoriesVisible] = useState(false);

  const t = useTranslations("products");

  // Main categories configuration
  const mainCategories = [
    {
      id: "gofretler",
      link: "/Wafers",
      image: "/images/burada/gofret1.png",
      color: "from-rose-900/30 to-orange-900/20",
    },
    {
      id: "yaglar",
      link: "/Oils",
      image: "/images/oils/olive1.jpeg",
      color: "from-emerald-900/30 to-green-900/20",
    },
    {
      id: "suttozu",
      link: "/MilkPowder",
      image: "/images/burada/suttozu.jpeg",
      color: "from-blue-900/30 to-cyan-900/20",
    },
    {
      id: "kuruyemis",
      link: "/Nuts",
      image: "/images/burada/dogal.jpeg",
      color: "from-amber-900/30 to-yellow-900/20",
    },
  ];

  useEffect(() => {
    const entries = [
      { ref: heroRef, setter: setHeroVisible },
      { ref: categoriesRef, setter: setCategoriesVisible },
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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] overflow-hidden flex items-center"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px]" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-emerald-500/5 blur-[100px]" />
          <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-blue-500/5 blur-[80px]" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative w-full px-6 md:px-12 lg:px-24 py-32">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <LuSparkles className="w-4 h-4 text-amber-400" />
              <span className="text-[12px] tracking-[0.2em] uppercase text-amber-300/80 font-medium">
                {t("header.badge")}
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-8 leading-[1.1]"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
              }}
            >
              <span className="font-extralight">
                {t("header.title").split(" ")[0]}{" "}
              </span>
              <span className="font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                {t("header.title").split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p
              className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
              }}
            >
              {t("header.subtitle")}
            </p>

            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s",
              }}
            >
              <a
                href="#categories"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-xl text-sm font-semibold tracking-wide hover:bg-white/90 transition-all duration-300 shadow-lg shadow-white/10"
              >
                {t("selectCategory")}
                <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/Contact"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white rounded-xl text-sm font-semibold tracking-wide hover:bg-white/10 transition-all duration-300"
              >
                {t("contactUs") || "İletişim"}
                <LuArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        id="categories"
        ref={categoriesRef}
        className="py-24 md:py-32 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6">
              <LuBox className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-slate-600 font-semibold">
                {t("header.badge")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight mb-4">
              <span className="font-extralight">
                {t("categoriesTitle")?.split(" ")[0] || "Ürün"}{" "}
              </span>
              <span className="font-bold">
                {t("categoriesTitle")?.split(" ").slice(1).join(" ") ||
                  "Kategorileri"}
              </span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg font-light max-w-2xl mx-auto">
              {t("selectCategory")}
            </p>
          </AnimatedSection>

          {/* Category cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {mainCategories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category.id}
                link={category.link}
                image={category.image}
                t={t}
                index={index}
                isVisible={categoriesVisible}
                color={category.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-amber-500/5 blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-500/5 blur-[100px]" />
        </div>
        <AnimatedSection className="max-w-3xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6 leading-tight">
            <span className="font-extralight">
              {t("ctaTitle")?.split(" ")[0] || "Hemen"}{" "}
            </span>
            <span className="font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              {t("ctaTitle")?.split(" ").slice(1).join(" ") ||
                "İletişime Geçin"}
            </span>
          </h2>
          <p className="text-white/40 text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
            {t("ctaDescription") || t("header.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/Contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-xl text-sm font-semibold tracking-wide hover:bg-white/90 transition-all duration-300 shadow-lg shadow-white/10"
            >
              {t("contactUs") || "İletişime Geçin"}
              <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
