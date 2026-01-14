/**
 * About Page Hero Section
 *
 * Full-screen hero introducing the company with animated statistics.
 * Uses translations for all text content.
 */

"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { FaGlobe, FaUsers, FaShippingFast, FaAward } from "react-icons/fa";

const HeroSection = () => {
  // Get translations for the about section
  const t = useTranslations("about");

  // Statistics configuration with icons
  const stats = [
    { value: "70+", labelKey: "stats.countries", icon: FaGlobe },
    { value: "1000+", labelKey: "stats.customers", icon: FaUsers },
    { value: "10K+", labelKey: "stats.shipments", icon: FaShippingFast },
    { value: "15+", labelKey: "stats.experience", icon: FaAward },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen flex items-center">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="text-center space-y-8">
          {/* Badge with animated dot */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-full border border-blue-500/20">
            <div className="relative">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping absolute"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <span className="text-slate-300 text-sm font-medium tracking-wide">
              {t("hero.badge")}
            </span>
          </div>

          {/* Main Title with Gradient */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {t("hero.title")}
                </span>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 blur-3xl -z-10 animate-pulse"></div>
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto font-light leading-relaxed">
            <span className="text-slate-300 font-semibold">{t("hero.years")}</span>{" "}
            {t("hero.descriptionText")}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Card content */}
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-slate-900/70 transition-all duration-300 transform hover:-translate-y-2">
                  <stat.icon className="w-10 h-10 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-5xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold">
                    {t(stat.labelKey)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider - Decorative element at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-24 md:h-32"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(15 23 42)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="rgb(15 23 42)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(15 23 42)" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 C240,150 480,150 720,100 C960,50 1200,50 1440,100 L1440,200 L0,200 Z"
            fill="url(#waveGradient)"
            opacity="0.3"
          />
          <path
            d="M0,120 C240,80 480,80 720,120 C960,160 1200,160 1440,120 L1440,200 L0,200 Z"
            fill="rgb(15 23 42)"
            opacity="0.6"
          />
          <path
            d="M0,140 C320,100 640,100 960,140 C1120,160 1280,160 1440,140 L1440,200 L0,200 Z"
            fill="rgb(2 6 23)"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
