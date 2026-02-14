/**
 * Testimonials Section
 *
 * Server Component - SEO optimized.
 * Customer testimonials displayed in a minimal grid layout
 * with AnimatedSection wrappers for scroll animations.
 */

import { LuQuote, LuStar } from "react-icons/lu";
import { getTranslations } from "next-intl/server";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default async function TestimonialsSection() {
  const t = await getTranslations("about.testimonials");

  // Get testimonials array from translations
  let testimonials = [];
  try {
    testimonials = t.raw("items") || [];
  } catch {
    testimonials = [];
  }

  return (
    <div className="py-28 md:py-36 px-6 bg-slate-50 relative overflow-hidden">
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="group bg-white p-10 md:p-12 hover:bg-slate-100 transition-all duration-500 flex flex-col"
            >
              {/* Quote Icon */}
              <LuQuote className="w-5 h-5 text-slate-200 mb-6 group-hover:text-slate-400 transition-colors duration-300" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <LuStar
                    key={i}
                    className="w-3.5 h-3.5 text-slate-300 fill-slate-300"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-500 text-sm font-light leading-[1.9] mb-8 flex-grow">
                {testimonial.text}
              </p>

              {/* Divider */}
              <div className="w-8 h-[1px] bg-slate-200 mb-6 group-hover:w-14 transition-all duration-500" />

              {/* Author Info */}
              <div>
                <div className="text-sm tracking-[0.05em] text-slate-900 font-medium mb-1">
                  {testimonial.name}
                </div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-slate-400 font-light">
                  {testimonial.position}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
