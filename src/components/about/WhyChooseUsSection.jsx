/**
 * Why Choose Us Section
 *
 * Split layout: left side with key stats and certifications,
 * right side with features list. Uses AnimatedSection for scroll animations.
 */

"use client";

import React from "react";
import {
  LuShieldCheck,
  LuMapPin,
  LuClock,
  LuChartBar,
  LuHandshake,
  LuBadgeCheck,
  LuLeaf,
} from "react-icons/lu";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Static data - outside component to prevent recreation
const features = [
  { icon: LuShieldCheck, textKey: "features.payment" },
  { icon: LuMapPin, textKey: "features.network" },
  { icon: LuClock, textKey: "features.support" },
  { icon: LuChartBar, textKey: "features.pricing" },
];

const WhyChooseUsSection = () => {
  const t = useTranslations("about.whyUs");

  return (
    <div className="py-28 md:py-36 px-6 bg-white relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Stats & Certifications */}
          <div>
            {/* Big stat */}
            <AnimatedSection>
              <LuHandshake className="w-6 h-6 text-slate-300 mb-6" />
              <div className="text-6xl md:text-7xl font-extralight text-slate-900 tracking-wide mb-2">
                1000+
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-slate-400 font-light">
                {t("partnerCount")}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="w-full h-[1px] bg-slate-200 my-10" />
            </AnimatedSection>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-6">
              <AnimatedSection delay={0.3}>
                <div className="group">
                  <LuBadgeCheck className="w-5 h-5 text-slate-300 mb-3 group-hover:text-slate-600 transition-colors duration-300" />
                  <div className="text-sm text-slate-600 font-light leading-relaxed">
                    {t("certifications.iso")}
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <div className="group">
                  <LuLeaf className="w-5 h-5 text-slate-300 mb-3 group-hover:text-slate-600 transition-colors duration-300" />
                  <div className="text-sm text-slate-600 font-light leading-relaxed">
                    {t("certifications.eco")}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Right - Title & Features */}
          <div>
            {/* Badge */}
            <AnimatedSection>
              <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-slate-400 font-medium">
                {t("badge")}
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="w-10 h-[1px] bg-slate-300 mt-4 mb-6" />
            </AnimatedSection>

            {/* Title */}
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl md:text-4xl tracking-[0.02em] text-slate-900 mb-4">
                <span className="font-extralight">{t("title")} </span>
                <span className="font-bold">{t("titleHighlight")}</span>
              </h2>
            </AnimatedSection>

            {/* Subtitle */}
            <AnimatedSection delay={0.3}>
              <p className="text-slate-500 text-base font-light leading-relaxed mb-10">
                {t("subtitle")}
              </p>
            </AnimatedSection>

            {/* Features */}
            <div className="space-y-0">
              {features.map((feature, i) => (
                <AnimatedSection key={i} delay={0.4 + i * 0.1}>
                  <div className="group flex items-center gap-4 py-5 border-t border-slate-200 last:border-b">
                    <feature.icon className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors duration-300 shrink-0" />
                    <span className="text-sm tracking-[0.05em] text-slate-600 font-light group-hover:text-slate-900 transition-colors duration-300">
                      {t(feature.textKey)}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
