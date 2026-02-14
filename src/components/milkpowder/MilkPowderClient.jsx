/**
 * Milk Powder Client Component - Premium Redesign
 * Professional page about milk powder products.
 */

"use client";

import { memo } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  LuArrowRight,
  LuDroplets,
  LuShield,
  LuCircleCheck,
  LuFlaskConical,
  LuBaby,
  LuFactory,
  LuPackage,
  LuSparkles,
  LuGlobe,
  LuAward,
  LuArrowUpRight,
  LuTruck,
  LuThermometer,
} from "react-icons/lu";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Static data - outside component to prevent recreation
const productTypes = [
  {
    icon: LuDroplets,
    titleKey: "products.whole.title",
    descKey: "products.whole.description",
    specsKey: "products.whole.specs",
  },
  {
    icon: LuFlaskConical,
    titleKey: "products.skim.title",
    descKey: "products.skim.description",
    specsKey: "products.skim.specs",
  },
  {
    icon: LuFactory,
    titleKey: "products.industrial.title",
    descKey: "products.industrial.description",
    specsKey: "products.industrial.specs",
  },
  {
    icon: LuBaby,
    titleKey: "products.baby.title",
    descKey: "products.baby.description",
    specsKey: "products.baby.specs",
  },
];

const applications = [
  "applications.bakery",
  "applications.confectionery",
  "applications.dairy",
  "applications.iceCream",
  "applications.chocolate",
  "applications.babyFood",
  "applications.sports",
  "applications.recombined",
];

const stats = [
  { value: "25+", labelKey: "stats.years", icon: LuAward },
  { value: "50+", labelKey: "stats.countries", icon: LuGlobe },
  { value: "100K+", labelKey: "stats.tons", icon: LuTruck },
  { value: "ISO", labelKey: "stats.certified", icon: LuShield },
];

// Memoized ProductTypeCard component
const ProductTypeCard = memo(function ProductTypeCard({
  icon: Icon,
  title,
  description,
  specs,
  index,
}) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-700 p-8 h-full">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-7 h-7 text-blue-700" />
        </div>
        <h4 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors">
          {title}
        </h4>
        <p className="text-sm text-slate-500 leading-relaxed mb-5">
          {description}
        </p>
        {specs && (
          <div className="pt-5 border-t border-slate-100">
            <span className="text-[10px] tracking-[0.25em] uppercase text-blue-600 font-semibold">
              Özellikler
            </span>
            <p className="text-xs text-slate-600 mt-2 font-medium leading-relaxed">
              {specs}
            </p>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
});

// Memoized StatCard component
const StatCard = memo(function StatCard({ value, label, icon: Icon, index }) {
  return (
    <AnimatedSection delay={index * 0.12}>
      <div className="text-center group">
        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
          <Icon className="w-7 h-7 text-blue-300" />
        </div>
        <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          {value}
        </div>
        <div className="text-white/50 text-sm tracking-wide uppercase font-medium">
          {label}
        </div>
      </div>
    </AnimatedSection>
  );
});

export default function MilkPowderClient() {
  const t = useTranslations("milkPowder");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-sky-950" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-400/5 blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Abstract decorative element - milk powder themed */}
        <AnimatedSection
          delay={0.5}
          className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <div className="relative w-80 h-80">
            {/* Large glass circle */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-white/10 to-blue-300/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-200/15 to-sky-100/10 flex items-center justify-center">
                <LuDroplets className="w-16 h-16 text-blue-300/60" />
              </div>
            </div>
            {/* Floating stat card 1 */}
            <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <LuShield className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">ISO 9001</div>
                  <div className="text-[10px] text-white/40">Sertifikalı</div>
                </div>
              </div>
            </div>
            {/* Floating stat card 2 */}
            <div className="absolute top-4 right-0 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center">
                  <LuGlobe className="w-5 h-5 text-sky-300" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">50+</div>
                  <div className="text-[10px] text-white/40">Ülke</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24 pointer-events-none">
          <div className="max-w-3xl pointer-events-auto">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                <LuDroplets className="w-4 h-4 text-blue-400" />
                <span className="text-[12px] tracking-[0.2em] uppercase text-blue-300 font-medium">
                  {t("hero.badge")}
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-8 leading-[1.1]">
                <span className="font-light">
                  {t("hero.title").split(" ")[0]}{" "}
                </span>
                <span className="font-bold bg-gradient-to-r from-blue-300 to-sky-200 bg-clip-text text-transparent">
                  {t("hero.title").split(" ").slice(1).join(" ")}
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
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white rounded-xl text-sm font-semibold tracking-wide hover:bg-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/25"
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

        <AnimatedSection
          delay={1}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </AnimatedSection>
      </section>

      {/* Introduction Section */}
      <AnimatedSection className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <LuSparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-blue-700 font-semibold">
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

      {/* Quality Section */}
      <section className="py-24 md:py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <LuShield className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-[11px] tracking-[0.2em] uppercase text-blue-700 font-semibold">
                  {t("quality.badge")}
                </span>
              </span>
              <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 mb-6 leading-tight">
                <span className="font-light">{t("quality.title")} </span>
                <span className="font-bold">{t("quality.titleHighlight")}</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-sky-300 rounded-full mb-6" />
              <p className="text-slate-500 text-base leading-relaxed mb-8">
                {t("quality.description")}
              </p>
              <ul className="space-y-4">
                {["feature1", "feature2", "feature3", "feature4"].map(
                  (feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-4 text-sm text-slate-600 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                        <LuCircleCheck className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="pt-1.5 font-medium">
                        {t(`quality.features.${feature}`)}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">
                {/* Abstract quality visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-6 p-8">
                    {[
                      {
                        icon: LuShield,
                        label: "HACCP",
                        color: "from-blue-100 to-sky-100",
                      },
                      {
                        icon: LuAward,
                        label: "ISO 9001",
                        color: "from-sky-100 to-blue-100",
                      },
                      {
                        icon: LuThermometer,
                        label: "Kontrollü",
                        color: "from-blue-100 to-indigo-100",
                      },
                      {
                        icon: LuCircleCheck,
                        label: "Sertifikalı",
                        color: "from-indigo-100 to-blue-100",
                      },
                    ].map((item, i) => {
                      const ItemIcon = item.icon;
                      return (
                        <div
                          key={i}
                          className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-sm`}
                        >
                          <div className="w-14 h-14 rounded-xl bg-white/80 flex items-center justify-center shadow-sm">
                            <ItemIcon className="w-7 h-7 text-blue-700" />
                          </div>
                          <span className="text-sm font-bold text-blue-900">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <LuAward className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">
                      ISO 9001
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      Sertifikalı
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-blue-950 via-slate-900 to-sky-950 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-sky-400/5 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.labelKey}
                value={stat.value}
                label={t(stat.labelKey)}
                icon={stat.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Types Section */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <LuPackage className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-[11px] tracking-[0.2em] uppercase text-blue-700 font-semibold">
                  {t("products.badge")}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight">
                <span className="font-light">{t("products.title")} </span>
                <span className="font-bold">{t("products.titleHighlight")}</span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productTypes.map((product, index) => (
              <ProductTypeCard
                key={product.titleKey}
                icon={product.icon}
                title={t(product.titleKey)}
                description={t(product.descKey)}
                specs={t(product.specsKey)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Section */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-400/5 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection className="order-2 lg:order-1 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800">
                {/* Abstract packaging visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-5 p-8">
                    {[
                      { size: "25 kg", type: "Çuval" },
                      { size: "10 kg", type: "Kutu" },
                      { size: "1 kg", type: "Paket" },
                      { size: "Bulk", type: "Konteyner" },
                    ].map((pkg, i) => (
                      <div
                        key={i}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-5 flex flex-col items-center justify-center gap-2 border border-white/10 hover:bg-white/15 transition-colors"
                      >
                        <LuPackage className="w-8 h-8 text-blue-300" />
                        <span className="text-lg font-bold text-white">
                          {pkg.size}
                        </span>
                        <span className="text-[10px] text-white/50 uppercase tracking-wider">
                          {pkg.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Decorative glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
              </div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2" delay={0.1}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
                <LuPackage className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[11px] tracking-[0.2em] uppercase text-blue-300 font-semibold">
                  {t("packaging.badge")}
                </span>
              </span>
              <h2 className="text-3xl md:text-4xl tracking-tight mb-6 leading-tight">
                <span className="font-light">{t("packaging.title")} </span>
                <span className="font-bold text-blue-300">
                  {t("packaging.titleHighlight")}
                </span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-sky-300 rounded-full mb-6" />
              <p className="text-white/60 text-base leading-relaxed mb-8">
                {t("packaging.description")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["option1", "option2", "option3", "option4"].map((option) => (
                  <div
                    key={option}
                    className="flex items-center gap-3 text-sm text-white/70 group p-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                      <LuPackage className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="font-medium">
                      {t(`packaging.options.${option}`)}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <AnimatedSection className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <LuFactory className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-blue-700 font-semibold">
                {t("applications.badge")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900">
              <span className="font-light">{t("applications.title")} </span>
              <span className="font-bold">
                {t("applications.titleHighlight")}
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {applications.map((app) => (
              <span
                key={app}
                className="px-6 py-3 bg-slate-50 text-slate-700 text-sm font-medium rounded-xl border border-slate-100 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 cursor-pointer"
              >
                {t(app)}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-br from-blue-950 via-slate-900 to-sky-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sky-500/5 blur-3xl" />
        </div>
        <AnimatedSection className="max-w-3xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6 leading-tight">
            <span className="font-light">{t("cta.title")} </span>
            <span className="font-bold bg-gradient-to-r from-blue-300 to-sky-200 bg-clip-text text-transparent">
              {t("cta.titleHighlight")}
            </span>
          </h2>
          <p className="text-white/50 text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/Products"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 text-white rounded-xl text-sm font-semibold tracking-wide hover:bg-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/25"
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
