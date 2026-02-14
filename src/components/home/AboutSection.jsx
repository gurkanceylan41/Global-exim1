/**
 * About Section Component (Home Page)
 *
 * Server Component - SEO optimized.
 * Displays company highlights, key values, and statistics on the home page.
 * Uses AnimatedSection wrapper for scroll animations.
 */

import Link from "next/link";
import { LuArrowRight, LuShieldCheck, LuTrendingUp, LuHandshake, LuAward } from "react-icons/lu";
import { getTranslations } from "next-intl/server";
import AnimatedSection from "@/components/ui/AnimatedSection";

const highlights = [
  {
    icon: LuShieldCheck,
    titleKey: "highlights.reliability.title",
    descriptionKey: "highlights.reliability.description",
  },
  {
    icon: LuTrendingUp,
    titleKey: "highlights.innovation.title",
    descriptionKey: "highlights.innovation.description",
  },
  {
    icon: LuHandshake,
    titleKey: "highlights.customerFocus.title",
    descriptionKey: "highlights.customerFocus.description",
  },
  {
    icon: LuAward,
    titleKey: "highlights.excellence.title",
    descriptionKey: "highlights.excellence.description",
  },
];

const bottomStats = [
  { labelKey: "bottomStats.shipments", value: "10K+" },
  { labelKey: "bottomStats.satisfaction", value: "99.8%" },
  { labelKey: "bottomStats.network", value: "70+" },
  { labelKey: "bottomStats.industryExp", value: "15+" },
];

export default async function AboutSection() {
  const t = await getTranslations("home.about");

  return (
    <div className="py-28 md:py-36 px-6 bg-white relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
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
            <span className="text-slate-800 font-medium">{t("years")}</span>{" "}
            uluslararası ticarette köprü kuruyoruz.{" "}
            <span className="text-slate-800 font-medium">{t("countries")}</span>{" "}
            faaliyet göstererek işinizi dünya pazarlarına taşıyoruz.
          </p>
        </AnimatedSection>

        {/* Highlights Grid */}
        <AnimatedSection delay={0.1} className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 md:p-10 hover:bg-slate-50 transition-all duration-500"
                >
                  <IconComponent className="w-5 h-5 text-slate-400 mb-6 group-hover:text-slate-700 transition-colors duration-300" />
                  <h3 className="text-sm tracking-[0.12em] uppercase font-medium text-slate-900 mb-3">
                    {t(item.titleKey)}
                  </h3>
                  <div className="w-6 h-[1px] bg-slate-300 mb-4 group-hover:w-10 transition-all duration-300" />
                  <p className="text-slate-500 text-sm font-light leading-relaxed">
                    {t(item.descriptionKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Bottom Stats */}
        <AnimatedSection delay={0.2} className="flex items-center justify-center max-w-3xl mx-auto mb-16">
          {bottomStats.map((stat, index) => (
            <div key={index} className="contents">
              <div className="flex-1 text-center py-4">
                <div className="text-2xl md:text-3xl font-extralight text-slate-900 tracking-wide mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-slate-400 font-light">
                  {t(stat.labelKey)}
                </div>
              </div>
              {index < bottomStats.length - 1 && (
                <div className="w-[1px] h-10 bg-slate-200" />
              )}
            </div>
          ))}
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="text-center">
          <Link href="/About">
            <button className="group inline-flex items-center gap-3 px-8 py-3.5 border border-slate-900 text-slate-900 text-sm tracking-[0.1em] uppercase font-medium hover:bg-slate-900 hover:text-white transition-all duration-300">
              <span>{t("cta")}</span>
              <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
