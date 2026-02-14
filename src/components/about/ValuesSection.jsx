/**
 * Values Section
 *
 * Server Component - SEO optimized.
 * Displays the company's core values in a numbered horizontal layout
 * with AnimatedSection wrappers for scroll animations.
 */

import { LuShieldCheck, LuTrendingUp, LuHandshake, LuAward } from "react-icons/lu";
import { getTranslations } from "next-intl/server";
import AnimatedSection from "@/components/ui/AnimatedSection";

const values = [
  {
    icon: LuShieldCheck,
    titleKey: "items.reliability.title",
    descriptionKey: "items.reliability.description",
  },
  {
    icon: LuTrendingUp,
    titleKey: "items.innovation.title",
    descriptionKey: "items.innovation.description",
  },
  {
    icon: LuHandshake,
    titleKey: "items.customerFocus.title",
    descriptionKey: "items.customerFocus.description",
  },
  {
    icon: LuAward,
    titleKey: "items.excellence.title",
    descriptionKey: "items.excellence.description",
  },
];

export default async function ValuesSection() {
  const t = await getTranslations("about.values");

  return (
    <div className="py-28 md:py-36 px-6 bg-white relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-slate-400 font-medium">
            {t("badge")}
          </span>
          <div className="w-10 h-[1px] bg-slate-300 mx-auto mt-4 mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[0.02em] text-slate-900 mb-6">
            <span className="font-extralight">{t("title")} </span>
            <span className="font-bold">{t("titleHighlight")}</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        {/* Values - Numbered horizontal rows */}
        <div className="space-y-0">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="group grid grid-cols-[auto_1fr] md:grid-cols-[60px_auto_1fr] gap-6 md:gap-10 items-start py-10 border-t border-slate-200 last:border-b"
              >
                {/* Number */}
                <span className="text-[11px] tracking-[0.2em] text-slate-300 font-light pt-1">
                  0{index + 1}
                </span>

                {/* Title + Icon */}
                <div className="flex items-center gap-3 md:min-w-[220px]">
                  <IconComponent className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors duration-300 shrink-0" />
                  <h3 className="text-sm tracking-[0.12em] uppercase font-medium text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                    {t(value.titleKey)}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-500 text-sm font-light leading-relaxed col-span-2 md:col-span-1 group-hover:text-slate-700 transition-colors duration-300">
                  {t(value.descriptionKey)}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}
