/**
 * Featured Section Component
 *
 * Bunge-inspired featured cards section with agricultural theme.
 * Three-column layout with large images and overlay text.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { useTranslations } from "next-intl";

const features = [
  {
    id: "sustainable",
    image: "/images/burada/Farmer Using Tablet in Soybean Field Hero-1.webp",
    categoryKey: "featured.items.sustainable.category",
    titleKey: "featured.items.sustainable.title",
    descriptionKey: "featured.items.sustainable.description",
    href: "/About",
    overlay: "gradient",
  },
  {
    id: "supply",
    image: "/images/burada/tedarik.jpeg",
    categoryKey: "featured.items.supply.category",
    titleKey: "featured.items.supply.title",
    descriptionKey: "featured.items.supply.description",
    href: "/Products",
    overlay: "gradient",
  },
  {
    id: "quality",
    image: "/images/burada/kalite.jpeg",
    categoryKey: "featured.items.quality.category",
    titleKey: "featured.items.quality.title",
    descriptionKey: "featured.items.quality.description",
    href: "/Contact",
    overlay: "gradient",
  },
];

export default function FeaturedSection() {
  const t = useTranslations("home");
  const sectionRef = useRef(null);
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <div>
            <span
              className="inline-block text-[11px] tracking-[0.3em] uppercase text-slate-400 font-medium"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(15px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              {t("featured.badge")}
            </span>
            <div
              className="w-10 h-[1px] bg-slate-300 mt-4 mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
              }}
            />
            <h2
              className="text-3xl md:text-4xl lg:text-5xl tracking-[0.02em] text-slate-900"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
              }}
            >
              <span className="font-extralight">{t("featured.title")} </span>
              <span className="font-bold">{t("featured.titleHighlight")}</span>
            </h2>
          </div>

          <Link
            href="/About"
            className="group inline-flex items-center gap-2 mt-6 md:mt-0 text-slate-600 hover:text-slate-900 transition-colors"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
            }}
          >
            <span className="text-sm tracking-[0.1em] uppercase font-medium">
              {t("featured.viewAll")}
            </span>
            <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={feature.id}
              href={feature.href}
              className="group block"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${0.4 + index * 0.15}s, transform 0.7s ease ${0.4 + index * 0.15}s`,
              }}
            >
              <article className="relative h-[400px] md:h-[480px] overflow-hidden bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
                {/* Background Image */}
                <Image
                  src={feature.image}
                  alt={t(feature.titleKey)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={90}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  {/* Category Badge */}
                  <span className="inline-block self-start px-3 py-1.5 mb-4 text-[10px] tracking-[0.2em] uppercase font-medium bg-white/15 backdrop-blur-md text-white rounded-full border border-white/20">
                    {t(feature.categoryKey)}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 leading-tight">
                    {t(feature.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/70 font-light leading-relaxed mb-4 line-clamp-2">
                    {t(feature.descriptionKey)}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                    <span className="text-xs tracking-[0.15em] uppercase font-medium">
                      {t("featured.readMore")}
                    </span>
                    <LuArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
