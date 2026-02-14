/**
 * CTA (Call to Action) Section
 *
 * Minimal contact call-to-action with clean typography
 * and scroll-triggered animations.
 */

"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { LuArrowRight } from "react-icons/lu";
import { useTranslations, useLocale } from "next-intl";

const CTASection = () => {
  const t = useTranslations("about.cta");
  const locale = useLocale();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const contactHref = locale === "tr" ? "/Contact" : `/${locale}/Contact`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-28 md:py-36 px-6 bg-white relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto" ref={sectionRef}>
        {/* Top Border */}
        <div
          className="w-full h-[1px] bg-slate-200 mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        />

        <div className="text-center">
          {/* Badge */}
          <span
            className="inline-block text-[11px] tracking-[0.3em] uppercase text-slate-400 font-medium"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            {t("badge")}
          </span>

          <div
            className="w-10 h-[1px] bg-slate-300 mx-auto mt-4 mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scaleX(1)" : "scaleX(0)",
              transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
            }}
          />

          {/* Title */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl tracking-[0.02em] text-slate-900 mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            <span className="font-extralight">{t("title")} </span>
            <span className="font-bold">{t("titleHighlight")}</span>
          </h2>

          {/* Subtitle */}
          <p
            className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
            }}
          >
            {t("subtitle")}
          </p>

          {/* CTA Button */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s",
            }}
          >
            <Link href={contactHref}>
              <button className="group inline-flex items-center gap-3 px-8 py-4 border border-slate-900 text-slate-900 text-sm tracking-[0.1em] uppercase font-medium hover:bg-slate-900 hover:text-white transition-all duration-500">
                <span>{t("button")}</span>
                <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Border */}
        <div
          className="w-full h-[1px] bg-slate-200 mt-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
            transition: "opacity 0.6s ease 0.8s, transform 0.6s ease 0.8s",
          }}
        />
      </div>
    </div>
  );
};

export default CTASection;
