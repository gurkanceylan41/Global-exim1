/**
 * Nuts Page Component - Optimized
 *
 * Performance optimized with:
 * - Shared FloatingCard component
 * - AnimatedSection for scroll animations
 * - Removed manual IntersectionObserver
 * - Memoized ProductCard
 */

"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  LuArrowRight,
  LuLeaf,
  LuSun,
  LuHeart,
  LuShield,
  LuCircleCheck,
  LuMapPin,
  LuSparkles,
  LuArrowUpRight,
  LuTreePine,
  LuMountain,
} from "react-icons/lu";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FloatingCard from "@/components/products/FloatingCard";

// Memoized ProductCard to prevent re-renders
const ProductCard = memo(function ProductCard({
  icon: Icon,
  title,
  description,
  origin,
  image,
  index,
}) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-700">
        <div className="relative h-52 overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              style={{ objectPosition: "50% 60%" }}
              quality={85}
            />
          ) : (
            <div className="w-full h-full bg-slate-100 flex items-center justify-center">
              <Icon className="w-10 h-10 text-emerald-600" />
            </div>
          )}
        </div>
        <div className="p-6">
          <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
            {title}
          </h4>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            {description}
          </p>
          {origin && (
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-emerald-50 flex items-center justify-center">
                <LuMapPin className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <span className="text-xs text-slate-600 font-medium">{origin}</span>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
});

// Static data - outside component to prevent recreation
const products = [
  {
    icon: LuSun,
    titleKey: "products.apricot.title",
    descKey: "products.apricot.description",
    originKey: "products.apricot.origin",
    image: "/images/nuts/kurukayısı.jpeg",
  },
  {
    icon: LuLeaf,
    titleKey: "products.fig.title",
    descKey: "products.fig.description",
    originKey: "products.fig.origin",
    image: "/images/nuts/kuruincir.jpeg",
  },
  {
    icon: LuSun,
    titleKey: "products.raisin.title",
    descKey: "products.raisin.description",
    originKey: "products.raisin.origin",
    image: "/images/nuts/kuruuzum.jpeg",
  },
];

const benefits = [
  { icon: LuHeart, titleKey: "benefits.health.title", descKey: "benefits.health.description" },
  { icon: LuLeaf, titleKey: "benefits.natural.title", descKey: "benefits.natural.description" },
  { icon: LuShield, titleKey: "benefits.quality.title", descKey: "benefits.quality.description" },
  { icon: LuSparkles, titleKey: "benefits.premium.title", descKey: "benefits.premium.description" },
];

const features = [
  "features.organic",
  "features.noAdditives",
  "features.handSelected",
  "features.sustainable",
  "features.traceable",
  "features.certified",
];

export default function NutsClient() {
  const t = useTranslations("nuts");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-neutral-900" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-amber-600/10 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-stone-500/10 blur-3xl" />
          <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating product images */}
        <AnimatedSection
          delay={0.3}
          className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <div className="relative w-80 h-80">
            <FloatingCard
              src="/images/nuts/karisik.jpeg"
              className="absolute -top-8 -left-8 w-40 h-40"
              baseRotate={-6}
            />
            <FloatingCard
              src="/images/nuts/karisik1.jpeg"
              className="absolute left-30 w-48 h-48"
              baseRotate={4}
            />
            <FloatingCard
              src="/images/nuts/karisik2.jpeg"
              className="absolute left-8 w-36 h-36"
              baseRotate={-3}
            />
          </div>
        </AnimatedSection>

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <LuLeaf className="w-4 h-4 text-emerald-400" />
              <span className="text-[12px] tracking-[0.2em] uppercase text-emerald-300 font-medium">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-8 leading-[1.1]">
              <span className="font-light">{t("hero.title").split(" ")[0]} </span>
              <span className="font-bold bg-gradient-to-r from-emerald-300 to-amber-200 bg-clip-text text-transparent">
                {t("hero.title").split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/Products"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-xl text-sm font-semibold tracking-wide hover:bg-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-600/25"
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

        <AnimatedSection
          delay={0.6}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </AnimatedSection>
      </section>

      {/* Introduction Section */}
      <AnimatedSection className="py-24 md:py-32 px-6 bg-gradient-to-b from-stone-50/50 to-white">
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

      {/* Origin Section */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
                <LuMountain className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[11px] tracking-[0.2em] uppercase text-emerald-700 font-semibold">
                  {t("origin.badge")}
                </span>
              </span>
              <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 mb-6 leading-tight">
                <span className="font-light">{t("origin.title")} </span>
                <span className="font-bold">{t("origin.titleHighlight")}</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full mb-6" />
              <p className="text-slate-500 text-base leading-relaxed mb-8">
                {t("origin.description")}
              </p>
              <ul className="space-y-4">
                {["region2", "region3"].map((region) => (
                  <li key={region} className="flex items-start gap-4 text-sm text-slate-600 group">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                      <LuMapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="pt-1.5 font-medium">{t(`origin.regions.${region}`)}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
                <Image src="/images/nuts/kuru.jpeg" alt={t("hero.title")} fill className="object-cover" quality={85} />
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <LuTreePine className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">100%</div>
                    <div className="text-xs text-slate-400 font-medium">Doğal</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-br from-stone-900 via-stone-800 to-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-600/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-stone-500/10 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
              <LuHeart className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-emerald-300 font-semibold">
                {t("benefits.badge")}
              </span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
              <span className="font-light">{t("benefits.title")} </span>
              <span className="font-bold bg-gradient-to-r from-emerald-300 to-amber-200 bg-clip-text text-transparent">
                {t("benefits.titleHighlight")}
              </span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.titleKey} delay={index * 0.1} className="text-center group">
                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
                  <benefit.icon className="w-9 h-9 text-emerald-300" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{t(benefit.titleKey)}</h4>
                <p className="text-sm text-white/50 font-light leading-relaxed">{t(benefit.descKey)}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-white to-stone-50/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
              <LuSun className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-emerald-700 font-semibold">
                {t("products.badge")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight">
              <span className="font-light">{t("products.title")} </span>
              <span className="font-bold">{t("products.titleHighlight")}</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={product.titleKey}
                icon={product.icon}
                title={t(product.titleKey)}
                description={t(product.descKey)}
                origin={t(product.originKey)}
                image={product.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection className="order-2 lg:order-1 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
                <Image src="/images/nuts/haccp.jpeg" alt={t("features.badge")} fill className="object-cover" quality={85} />
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                    <LuCircleCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">HACCP</div>
                    <div className="text-xs text-slate-400 font-medium">Sertifikalı</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2" delay={0.1}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
                <LuShield className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[11px] tracking-[0.2em] uppercase text-emerald-700 font-semibold">
                  {t("features.badge")}
                </span>
              </span>
              <h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 mb-6 leading-tight">
                <span className="font-light">{t("features.title")} </span>
                <span className="font-bold">{t("features.titleHighlight")}</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full mb-6" />
              <p className="text-slate-500 text-base leading-relaxed mb-8">{t("features.description")}</p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-600 group p-3 rounded-xl hover:bg-emerald-50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                      <LuCircleCheck className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="font-medium">{t(feature)}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-br from-stone-900 via-stone-800 to-neutral-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-amber-600/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-stone-500/10 blur-3xl" />
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
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-xl text-sm font-semibold tracking-wide hover:bg-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-600/25"
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
