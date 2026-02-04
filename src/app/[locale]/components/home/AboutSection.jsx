/**
 * About Section Component (Home Page)
 *
 * Displays company highlights, key values, and statistics on the home page.
 * Uses translations for all text content to support multiple languages.
 * Scroll-triggered animations via IntersectionObserver.
 */

"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LuArrowRight, LuShieldCheck, LuTrendingUp, LuHandshake, LuAward } from "react-icons/lu";
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const t = useTranslations("home.about");
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const entries = [
      { ref: headerRef, setter: setHeaderVisible },
      { ref: gridRef, setter: setGridVisible },
      { ref: statsRef, setter: setStatsVisible },
      { ref: ctaRef, setter: setCtaVisible },
    ];

    const observers = entries.map(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.15 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

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

  return (
    <div className="py-28 md:py-36 px-6 bg-white relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20" ref={headerRef}>
          <span
            className="inline-block text-[11px] tracking-[0.3em] uppercase text-slate-400 font-medium"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {t("badge")}
          </span>
          <div
            className="w-10 h-[1px] bg-slate-300 mx-auto mt-4 mb-6"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "scaleX(1)" : "scaleX(0)",
              transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
            }}
          />
          <h2
            className="text-3xl md:text-4xl lg:text-5xl tracking-[0.02em] text-slate-900 mb-6"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            <span className="font-extralight">{t("title")} </span>
            <span className="font-bold">{t("titleHighlight")}</span>
          </h2>
          <p
            className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
            }}
          >
            <span className="text-slate-800 font-medium">{t("years")}</span>{" "}
            uluslararası ticarette köprü kuruyoruz.{" "}
            <span className="text-slate-800 font-medium">{t("countries")}</span>{" "}
            faaliyet göstererek işinizi dünya pazarlarına taşıyoruz.
          </p>
        </div>

        {/* Highlights Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 mb-20"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 md:p-10 hover:bg-slate-50 transition-all duration-500"
              style={{
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
              }}
            >
              <item.icon className="w-5 h-5 text-slate-400 mb-6 group-hover:text-slate-700 transition-colors duration-300" />
              <h3 className="text-sm tracking-[0.12em] uppercase font-medium text-slate-900 mb-3">
                {t(item.titleKey)}
              </h3>
              <div className="w-6 h-[1px] bg-slate-300 mb-4 group-hover:w-10 transition-all duration-300" />
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                {t(item.descriptionKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div
          ref={statsRef}
          className="flex items-center justify-center max-w-3xl mx-auto mb-16"
        >
          {bottomStats.map((stat, index) => (
            <React.Fragment key={index}>
              <div
                className="flex-1 text-center py-4"
                style={{
                  opacity: statsVisible ? 1 : 0,
                  transform: statsVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
                }}
              >
                <div className="text-2xl md:text-3xl font-extralight text-slate-900 tracking-wide mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-slate-400 font-light">
                  {t(stat.labelKey)}
                </div>
              </div>
              {index < bottomStats.length - 1 && (
                <div
                  className="w-[1px] h-10 bg-slate-200"
                  style={{
                    opacity: statsVisible ? 1 : 0,
                    transform: statsVisible ? "scaleY(1)" : "scaleY(0)",
                    transition: `opacity 0.4s ease ${0.2 + index * 0.1}s, transform 0.4s ease ${0.2 + index * 0.1}s`,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="text-center"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? "translateY(0)" : "translateY(15px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <Link href="/About">
            <button className="group inline-flex items-center gap-3 px-8 py-3.5 border border-slate-900 text-slate-900 text-sm tracking-[0.1em] uppercase font-medium hover:bg-slate-900 hover:text-white transition-all duration-300">
              <span>{t("cta")}</span>
              <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
