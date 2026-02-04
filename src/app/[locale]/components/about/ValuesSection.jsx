/**
 * Values Section
 *
 * Displays the company's core values in a numbered horizontal layout
 * with scroll-triggered animations.
 */

"use client";

import React, { useEffect, useRef, useState } from "react";
import { LuShieldCheck, LuTrendingUp, LuHandshake, LuAward } from "react-icons/lu";
import { useTranslations } from "next-intl";

const ValuesSection = () => {
  const t = useTranslations("about.values");
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const rowRefs = useRef([]);
  const [rowVisibility, setRowVisibility] = useState([false, false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observers = rowRefs.current.map((el, index) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setRowVisibility((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

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

  return (
    <div className="py-28 md:py-36 px-6 bg-white relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
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
            {t("subtitle")}
          </p>
        </div>

        {/* Values - Numbered horizontal rows */}
        <div className="space-y-0">
          {values.map((value, index) => (
            <div
              key={index}
              ref={(el) => (rowRefs.current[index] = el)}
              className="group grid grid-cols-[auto_1fr] md:grid-cols-[60px_auto_1fr] gap-6 md:gap-10 items-start py-10 border-t border-slate-200 last:border-b"
              style={{
                opacity: rowVisibility[index] ? 1 : 0,
                transform: rowVisibility[index] ? "translateY(0)" : "translateY(25px)",
                transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
              }}
            >
              {/* Number */}
              <span className="text-[11px] tracking-[0.2em] text-slate-300 font-light pt-1">
                0{index + 1}
              </span>

              {/* Title + Icon */}
              <div className="flex items-center gap-3 md:min-w-[220px]">
                <value.icon className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors duration-300 shrink-0" />
                <h3 className="text-sm tracking-[0.12em] uppercase font-medium text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                  {t(value.titleKey)}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-sm font-light leading-relaxed col-span-2 md:col-span-1 group-hover:text-slate-700 transition-colors duration-300">
                {t(value.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
