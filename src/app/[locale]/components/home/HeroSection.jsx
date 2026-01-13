/**
 * Hero Section Component
 *
 * Full-screen hero section with background image, main tagline,
 * call-to-action buttons, and key statistics.
 * Uses translations for all text content.
 */

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaGlobe, FaShippingFast, FaAward } from "react-icons/fa";
import { useTranslations } from "next-intl";
import ScrollButton from "./ScrollButton";

export default function HeroSection() {
  // Get translations for the home.hero namespace
  const t = useTranslations("home.hero");

  return (
    <section className="relative w-full h-screen min-h-[600px]">
      {/* Background Image - Full screen with subtle zoom animation */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/home1.jpg"
          alt="Global Exim Banner"
          fill
          className="object-cover scale-105 animate-subtle-zoom"
          priority
          quality={90}
        />
      </div>

      {/* Gradient Overlay - Creates depth and improves text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />

      {/* Animated Grid Background - Subtle visual effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Main Content - Centered vertically and horizontally */}
      <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-5 pt-32 pb-12 z-10">
        {/* Main Title with Gradient Animation */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-white via-[#53B6F0] to-white bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              {t("title")}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-xl animate-shine"></span>
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl lg:text-3xl font-light mb-4 max-w-3xl animate-fade-in-up animation-delay-200">
          {t("tagline")}
        </p>

        {/* Description */}
        <p className="mt-2 text-sm md:text-lg max-w-2xl text-gray-300 leading-relaxed animate-fade-in-up animation-delay-400">
          {t("description")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in-up animation-delay-600">
          {/* Primary CTA - Products */}
          <Link
            href="/Products"
            className="group px-8 py-4 bg-[#53B6F0] text-white font-semibold rounded-lg shadow-lg hover:bg-[#4aa3db] hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center"
          >
            {t("ctaProducts")}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Secondary CTA - Contact */}
          <Link
            href="/Contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300"
          >
            {t("ctaContact")}
          </Link>
        </div>

        {/* Statistics Grid */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-4xl w-full animate-fade-in-up animation-delay-800">
          {/* Countries Stat */}
          <div className="flex flex-col items-center gap-2 p-3 md:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <FaGlobe className="text-2xl md:text-4xl text-[#53B6F0]" />
            <p className="text-xl md:text-3xl font-bold">50+</p>
            <p className="text-xs md:text-sm text-gray-300">{t("stats.countries")}</p>
          </div>

          {/* Deliveries Stat */}
          <div className="flex flex-col items-center gap-2 p-3 md:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <FaShippingFast className="text-2xl md:text-4xl text-[#53B6F0]" />
            <p className="text-xl md:text-3xl font-bold">1000+</p>
            <p className="text-xs md:text-sm text-gray-300">
              {t("stats.deliveries")}
            </p>
          </div>

          {/* Experience Stat */}
          <div className="flex flex-col items-center gap-2 p-3 md:p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <FaAward className="text-2xl md:text-4xl text-[#53B6F0]" />
            <p className="text-xl md:text-3xl font-bold">15+</p>
            <p className="text-xs md:text-sm text-gray-300">{t("stats.experience")}</p>
          </div>
        </div>

        {/* Scroll Indicator - Client Component for interactivity */}
        <ScrollButton />
      </div>
    </section>
  );
}
