/**
 * Oils Client Component - Premium Redesign
 * Professional page about specialty oils, fats and lecithins.
 */

"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  LuArrowRight,
  LuLeaf,
  LuGlobe,
  LuShield,
  LuDroplets,
  LuWheat,
  LuSun,
  LuTreePine,
  LuCircleDot,
  LuSparkles,
  LuArrowUpRight,
} from "react-icons/lu";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FloatingCard from "@/components/products/FloatingCard";

// Static data - outside component to prevent recreation
const oilSources = [
  {
    icon: LuWheat,
    titleKey: "sources.soy.title",
    descKey: "sources.soy.description",
    originsKey: "sources.soy.origins",
  },
  {
    icon: LuLeaf,
    titleKey: "sources.canola.title",
    descKey: "sources.canola.description",
    originsKey: "sources.canola.origins",
  },
  {
    icon: LuTreePine,
    titleKey: "sources.palm.title",
    descKey: "sources.palm.description",
    originsKey: "sources.palm.origins",
  },
  {
    icon: LuCircleDot,
    titleKey: "sources.shea.title",
    descKey: "sources.shea.description",
    originsKey: "sources.shea.origins",
  },
  {
    icon: LuDroplets,
    titleKey: "sources.coconut.title",
    descKey: "sources.coconut.description",
    originsKey: "sources.coconut.origins",
  },
  {
    icon: LuSun,
    titleKey: "sources.sunflower.title",
    descKey: "sources.sunflower.description",
    originsKey: "sources.sunflower.origins",
  },
  {
    icon: LuLeaf,
    titleKey: "sources.olive.title",
    descKey: "sources.olive.description",
    originsKey: "sources.olive.origins",
  },
];

const markets = [
  "markets.bakery",
  "markets.confectionery",
  "markets.dairy",
  "markets.snacks",
  "markets.nutrition",
  "markets.personalCare",
  "markets.plantBased",
  "markets.foodService",
];

// Memoized OilSourceCard component
const OilSourceCard = memo(function OilSourceCard({
  icon: Icon,
  title,
  description,
  origins,
  image,
  index,
}) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-700">
        {image && (
          <div className="relative h-44 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                <Icon className="w-5 h-5 text-emerald-700" />
              </div>
            </div>
          </div>
        )}
        {!image && (
          <div className="p-6 pb-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <Icon className="w-6 h-6 text-emerald-700" />
            </div>
          </div>
        )}
        <div className="p-6">
          <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
            {title}
          </h4>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            {description}
          </p>
          {origins && (
            <div className="pt-4 border-t border-slate-100">
              <span className="text-[10px] tracking-[0.25em] uppercase text-emerald-600 font-semibold">
                Menşei
              </span>
              <p className="text-xs text-slate-600 mt-1.5 font-medium">
                {origins}
              </p>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
});

export default function OilsClient() {
  const t = useTranslations("oils");

  return (
    <div className="bg-white">
      {/* Hero Section - Full Screen with Gradient */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-400/5 blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Product images floating */}
        <AnimatedSection
          delay={0.5}
          className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <div className="relative w-80 h-80">
            <FloatingCard
              src="/images/oils/olive2.jpeg"
              className="absolute -top-8 -left-8 w-40 h-40"
              baseRotate={-6}
            />
            <FloatingCard
              src="/images/oils/olive1.jpeg"
              className="absolute left-30 w-48 h-48"
              baseRotate={4}
            />
            <FloatingCard
              src="/images/oils/olive3.jpeg"
              className="absolute left-8 w-36 h-36"
              baseRotate={-3}
            />
          </div>
        </AnimatedSection>

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24 pointer-events-none">
          <div className="max-w-3xl pointer-events-auto">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <LuDroplets className="w-4 h-4 text-emerald-400" />
                <span className="text-[12px] tracking-[0.2em] uppercase text-emerald-300 font-medium">
                  {t("hero.badge")}
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-8 leading-[1.1]">
                <span className="font-light">
                  {t("hero.title").split(",")[0]},
                </span>
                <br />
                <span className="font-bold bg-gradient-to-r from-emerald-300 to-amber-200 bg-clip-text text-transparent">
                  {t("hero.title").split(",").slice(1).join(",")}
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
                {t("hero.description")}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.45}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/Products"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-xl text-sm font-semibold tracking-wide hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/25"
                >
                  {t("cta.products")}
                  <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/Contact"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white rounded-xl text-sm font-semibold tracking-wide hover:bg-white/10 transition-all duration-300"
                >
                  {t("cta.contact")}
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <AnimatedSection className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
            <LuSparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-emerald-700 font-semibold">
              Global Exim
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 mb-8 leading-tight">
            <span className="font-light">{t("intro.title")} </span>
            <span className="font-bold">{t("intro.titleHighlight")}</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            {t("intro.description")}
          </p>
        </div>
      </AnimatedSection>

      {/* Doğadan Sofranıza Section */}
      <section className="py-24 md:py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
                <Image
                  src="/images/oils/olive-grove.jpeg"
                  alt="Zeytin Bahçesi"
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <LuDroplets className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">Premium</div>
                    <div className="text-xs text-slate-400 font-medium">
                      Zeytinyağı
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
                <LuLeaf className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[11px] tracking-[0.2em] uppercase text-emerald-700 font-semibold">
                  Zeytinyağı
                </span>
              </span>
              <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 mb-6 leading-tight">
                <span className="font-light">{t("grove.title")} </span>
                <span className="font-bold">
                  {t("grove.titleHighlight")}
                </span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full mb-6" />
              <p className="text-slate-500 text-base leading-relaxed">
                {t("grove.description")}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Responsible Sourcing Section */}
      <section className="py-24 md:py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
                <LuShield className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[11px] tracking-[0.2em] uppercase text-emerald-700 font-semibold">
                  {t("responsible.badge")}
                </span>
              </span>
              <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 mb-6 leading-tight">
                <span className="font-light">{t("responsible.title")} </span>
                <span className="font-bold">
                  {t("responsible.titleHighlight")}
                </span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full mb-6" />
              <p className="text-slate-500 text-base leading-relaxed mb-10">
                {t("responsible.description")}
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  {
                    icon: LuLeaf,
                    labelKey: "responsible.pillars.sustainable",
                    color: "from-emerald-50 to-green-50",
                  },
                  {
                    icon: LuGlobe,
                    labelKey: "responsible.pillars.community",
                    color: "from-blue-50 to-cyan-50",
                  },
                  {
                    icon: LuShield,
                    labelKey: "responsible.pillars.environment",
                    color: "from-amber-50 to-orange-50",
                  },
                ].map((pillar) => {
                  const PillarIcon = pillar.icon;
                  return (
                    <div key={pillar.labelKey} className="text-center group">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500`}
                      >
                        <PillarIcon className="w-7 h-7 text-emerald-700" />
                      </div>
                      <span className="text-sm text-slate-700 font-semibold">
                        {t(pillar.labelKey)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
                <Image
                  src="/images/oils/olive5.jpeg"
                  alt={t("responsible.title")}
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                    <LuLeaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">100%</div>
                    <div className="text-xs text-slate-400 font-medium">
                      Sürdürülebilir
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
        </div>
        <AnimatedSection className="max-w-3xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6 leading-tight">
            <span className="font-light">{t("cta.title")} </span>
            <span className="font-bold bg-gradient-to-r from-emerald-300 to-amber-200 bg-clip-text text-transparent">
              {t("cta.titleHighlight")}
            </span>
          </h2>
          <p className="text-white/50 text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/Products"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-xl text-sm font-semibold tracking-wide hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/25"
            >
              {t("cta.products")}
              <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/Contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white rounded-xl text-sm font-semibold tracking-wide hover:bg-white/10 transition-all duration-300"
            >
              {t("cta.contact")}
              <LuArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
