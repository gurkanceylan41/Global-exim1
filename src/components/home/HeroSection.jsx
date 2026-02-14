/**
 * Hero Section Component
 *
 * Full-screen hero section with background image, main tagline,
 * call-to-action buttons, and key statistics.
 * Uses translations for all text content.
 */

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import ScrollButton from "./ScrollButton";

export default function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative w-full h-screen min-h-[600px]">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover scale-105"
        >
          <source src="/soulpressed_intro.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Main Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-5 pt-32 pb-12 z-10">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] mb-6 animate-fade-in-up">
          <span className="font-extralight">{t("title").split(" ")[0]} </span>
          <span className="font-bold">{t("title").split(" ").slice(1).join(" ")}</span>
        </h1>

        {/* Thin line under title */}
        <div className="w-20 h-[1px] bg-white/40 mb-6 animate-fade-in-up animation-delay-200" />

        {/* Tagline */}
        <p className="text-base md:text-xl lg:text-2xl font-extralight tracking-[0.15em] uppercase mb-4 max-w-3xl animate-fade-in-up animation-delay-200">
          {t("tagline")}
        </p>

        {/* Description */}
        <p className="mt-2 text-sm md:text-base max-w-2xl text-white/60 font-light leading-relaxed animate-fade-in-up animation-delay-400">
          {t("description")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12 animate-fade-in-up animation-delay-600">
          <Link
            href="/Products"
            className="group px-8 py-3.5 bg-white text-slate-900 text-sm tracking-[0.1em] uppercase font-medium hover:bg-white/90 transition-all duration-300 flex items-center gap-3 justify-center"
          >
            {t("ctaProducts")}
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <Link
            href="/Contact"
            className="px-8 py-3.5 text-sm tracking-[0.1em] uppercase font-medium border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            {t("ctaContact")}
          </Link>
        </div>

        {/* Statistics */}
        <div className="mt-20 flex items-center gap-0 max-w-2xl w-full animate-fade-in-up animation-delay-800">
          {/* Countries */}
          <div className="flex-1 flex flex-col items-center gap-1 py-4">
            <p className="text-3xl md:text-4xl font-extralight tracking-wide">50+</p>
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/40 font-light">
              {t("stats.countries")}
            </p>
          </div>

          <div className="w-[1px] h-12 bg-white/15" />

          {/* Deliveries */}
          <div className="flex-1 flex flex-col items-center gap-1 py-4">
            <p className="text-3xl md:text-4xl font-extralight tracking-wide">1000+</p>
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/40 font-light">
              {t("stats.deliveries")}
            </p>
          </div>

          <div className="w-[1px] h-12 bg-white/15" />

          {/* Experience */}
          <div className="flex-1 flex flex-col items-center gap-1 py-4">
            <p className="text-3xl md:text-4xl font-extralight tracking-wide">15+</p>
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/40 font-light">
              {t("stats.experience")}
            </p>
          </div>
        </div>

        <ScrollButton />
      </div>
    </section>
  );
}
