/**
 * Timeline Section
 *
 * Company history displayed as a vertical timeline
 * with scroll-triggered animations using IntersectionObserver.
 */

"use client";

import React, { useEffect, useRef, useState } from "react";
import { LuRocket, LuTrendingUp, LuLightbulb, LuTrophy } from "react-icons/lu";
import { useTranslations } from "next-intl";

const TimelineItem = ({
  item,
  index,
  isEven,
  achievements,
  t,
  titlePrefix,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const contentBlock = (align) => (
    <div className={align === "right" ? "text-right" : ""}>
      <span className="text-4xl font-extralight text-slate-200 tracking-wide group-hover:text-slate-300 transition-colors duration-500">
        {item.year}
      </span>
      <h3 className="text-lg md:text-xl tracking-[0.02em] text-slate-900 mt-2 mb-2">
        <span className="font-bold">{t(item.titleKey)}</span>
      </h3>
      <div
        className={`w-8 h-[1px] bg-slate-300 mb-3 group-hover:w-14 transition-all duration-500 ${
          align === "right" ? "ml-auto" : ""
        }`}
      />
      <p className="text-slate-500 text-sm font-light leading-[1.8]">
        {t(item.descriptionKey)}
      </p>
      {achievements.length > 0 && (
        <div className="mt-4 space-y-1.5">
          {achievements.map((a, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 text-[13px] text-slate-400 font-light ${
                align === "right" ? "justify-end" : ""
              }`}
            >
              {align === "right" && <span>{a}</span>}
              <div className="w-1 h-1 rounded-full bg-slate-300 shrink-0" />
              {align !== "right" && <span>{a}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div ref={ref} className="relative group">
      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-[1fr_80px_1fr] items-start">
        {/* Left content */}
        <div
          className={`py-12 ${isEven ? "pr-16" : ""}`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateX(0)"
              : isEven
              ? "translateX(-40px)"
              : "translateX(0)",
            transition: `opacity 0.7s ease ${
              index * 0.15
            }s, transform 0.7s ease ${index * 0.15}s`,
          }}
        >
          {isEven && contentBlock("right")}
        </div>

        {/* Center dot */}
        <div className="flex justify-center py-12">
          <div
            className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center group-hover:border-slate-400 transition-colors duration-300 relative z-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.5)",
              transition: `opacity 0.5s ease ${
                index * 0.15
              }s, transform 0.5s ease ${index * 0.15}s`,
            }}
          >
            <item.icon className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors duration-300" />
          </div>
        </div>

        {/* Right content */}
        <div
          className={`py-12 ${!isEven ? "pl-16" : ""}`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateX(0)"
              : !isEven
              ? "translateX(40px)"
              : "translateX(0)",
            transition: `opacity 0.7s ease ${
              index * 0.15
            }s, transform 0.7s ease ${index * 0.15}s`,
          }}
        >
          {!isEven && contentBlock("left")}
        </div>
      </div>

      {/* Mobile layout */}
      <div
        className="md:hidden flex gap-6 py-10"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${
            index * 0.1
          }s`,
        }}
      >
        {/* Dot */}
        <div className="shrink-0">
          <div className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center relative z-10">
            <item.icon className="w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Content */}
        <div className="pt-1">
          <span className="text-3xl font-extralight text-slate-200 tracking-wide">
            {item.year}
          </span>
          <h3 className="text-lg tracking-[0.02em] text-slate-900 mt-1 mb-2">
            <span className="font-bold">{t(item.titleKey)}</span>
          </h3>
          <div className="w-8 h-[1px] bg-slate-300 mb-3" />
          <p className="text-slate-500 text-sm font-light leading-[1.8]">
            {t(item.descriptionKey)}
          </p>
          {achievements.length > 0 && (
            <div className="mt-3 space-y-1.5">
              {achievements.map((a, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-[13px] text-slate-400 font-light"
                >
                  <div className="w-1 h-1 rounded-full bg-slate-300 shrink-0" />
                  <span>{a}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  const t = useTranslations("about.timeline");
  const lineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      const rect = lineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;

      if (rect.top > windowHeight) {
        setLineHeight(0);
      } else if (rect.bottom < 0) {
        setLineHeight(100);
      } else {
        const visible = Math.min(windowHeight - rect.top, totalHeight);
        const percent = Math.max(
          0,
          Math.min(100, (visible / totalHeight) * 100)
        );
        setLineHeight(percent);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timeline = [
    {
      year: "2010",
      titleKey: "items.2010.title",
      descriptionKey: "items.2010.description",
      achievementsKey: "items.2010.achievements",
      icon: LuRocket,
    },
    {
      year: "2015",
      titleKey: "items.2015.title",
      descriptionKey: "items.2015.description",
      achievementsKey: "items.2015.achievements",
      icon: LuTrendingUp,
    },
    {
      year: "2020",
      titleKey: "items.2020.title",
      descriptionKey: "items.2020.description",
      achievementsKey: "items.2020.achievements",
      icon: LuLightbulb,
    },
    {
      year: "2025",
      titleKey: "items.2025.title",
      descriptionKey: "items.2025.description",
      achievementsKey: "items.2025.achievements",
      icon: LuTrophy,
    },
  ];

  const getAchievements = (key) => {
    try {
      const achievements = t.raw(key);
      return Array.isArray(achievements) ? achievements : [];
    } catch {
      return [];
    }
  };

  return (
    <div className="py-24 md:py-32 px-6 bg-[#f8fafc] relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-[11px] tracking-[0.3em] uppercase text-slate-400 font-medium">
            {t("badge")}
          </span>
          <div className="w-10 h-[1px] bg-slate-300 mt-4 mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[0.02em] text-slate-900">
            <span className="font-extralight">{t("title")} </span>
            <span className="font-bold">{t("titleHighlight")}</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed mt-4 max-w-2xl">
            {t("subtitle")}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative" ref={lineRef}>
          {/* Static background line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-100 md:-translate-x-[0.5px]" />

          {/* Animated progress line */}
          <div
            className="absolute left-[39px] md:left-1/2 top-0 w-[1px] bg-slate-400 md:-translate-x-[0.5px] origin-top"
            style={{
              height: `${lineHeight}%`,
              transition: "height 0.1s linear",
            }}
          />

          <div className="space-y-0">
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isEven={index % 2 === 0}
                achievements={getAchievements(item.achievementsKey)}
                t={t}
                titlePrefix={t("title")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
