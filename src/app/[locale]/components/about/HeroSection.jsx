/**
 * About Page Hero Section
 *
 * Full-screen hero introducing the company with animated statistics.
 * Scroll-triggered animations with staggered delays.
 */

"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { LuGlobe, LuUsers, LuShip, LuAward } from "react-icons/lu";

const AnimatedCounter = ({ target, isVisible }) => {
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ""));
  const suffix = target.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1500;
    const increment = numericTarget / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, numericTarget]);

  return (
    <span>
      {isVisible ? count : 0}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  const t = useTranslations("about");
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "70+", labelKey: "stats.countries", icon: LuGlobe },
    { value: "1000+", labelKey: "stats.customers", icon: LuUsers },
    { value: "10K+", labelKey: "stats.shipments", icon: LuShip },
    { value: "15+", labelKey: "stats.experience", icon: LuAward },
  ];

  return (
    <div
      className="relative overflow-hidden bg-white min-h-screen flex items-center"
      ref={ref}
    >
      <div className="relative max-w-5xl mx-auto px-6 py-32 w-full">
        <div className="text-center">
          {/* Badge */}
          <span
            className="inline-block text-[11px] tracking-[0.3em] uppercase text-slate-400 font-medium"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {t("hero.badge")}
          </span>

          <div
            className="w-10 h-[1px] bg-slate-300 mx-auto mt-4 mb-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scaleX(1)" : "scaleX(0)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          />

          {/* Main Title */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] text-slate-900 mb-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            <span className="font-extralight">
              {t("hero.title").split(" ")[0]}{" "}
            </span>
            <span className="font-bold">
              {t("hero.title").split(" ").slice(1).join(" ")}
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
            }}
          >
            <span className="text-slate-800 font-medium">
              {t("hero.years")}
            </span>{" "}
            {t("hero.descriptionText")}
          </p>

          {/* Thin line */}
          <div
            className="w-12 h-[1px] bg-slate-200 mx-auto mt-16 mb-16"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scaleX(1)" : "scaleX(0)",
              transition: "opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s",
            }}
          />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white p-8 md:p-10 hover:bg-slate-50 transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(25px)",
                  transition: `opacity 0.6s ease ${
                    0.8 + index * 0.1
                  }s, transform 0.6s ease ${0.8 + index * 0.1}s`,
                }}
              >
                <stat.icon className="w-5 h-5 text-slate-400 mx-auto mb-5 group-hover:text-slate-700 transition-colors duration-300" />
                <div className="text-3xl md:text-4xl font-extralight text-slate-900 tracking-wide mb-2">
                  <AnimatedCounter target={stat.value} isVisible={isVisible} />
                </div>
                <div className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-slate-400 font-light">
                  {t(stat.labelKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
