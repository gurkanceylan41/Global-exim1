/**
 * Why Choose Us Section
 *
 * Split layout: left side with key stats and certifications,
 * right side with features list. Scroll-triggered animations.
 */

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  LuShieldCheck,
  LuMapPin,
  LuClock,
  LuChartBar,
  LuHandshake,
  LuBadgeCheck,
  LuLeaf,
} from "react-icons/lu";
import { useTranslations } from "next-intl";

const WhyChooseUsSection = () => {
  const t = useTranslations("about.whyUs");
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const createObserver = (ref, setter) => {
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
    };
    const o1 = createObserver(leftRef, setLeftVisible);
    const o2 = createObserver(rightRef, setRightVisible);
    return () => {
      o1.disconnect();
      o2.disconnect();
    };
  }, []);

  const features = [
    { icon: LuShieldCheck, textKey: "features.payment" },
    { icon: LuMapPin, textKey: "features.network" },
    { icon: LuClock, textKey: "features.support" },
    { icon: LuChartBar, textKey: "features.pricing" },
  ];

  return (
    <div className="py-28 md:py-36 px-6 bg-white relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Stats & Certifications */}
          <div ref={leftRef}>
            {/* Big stat */}
            <div
              style={{
                opacity: leftVisible ? 1 : 0,
                transform: leftVisible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              <LuHandshake className="w-6 h-6 text-slate-300 mb-6" />
              <div className="text-6xl md:text-7xl font-extralight text-slate-900 tracking-wide mb-2">
                1000+
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-slate-400 font-light">
                {t("partnerCount")}
              </div>
            </div>

            <div
              className="w-full h-[1px] bg-slate-200 my-10"
              style={{
                opacity: leftVisible ? 1 : 0,
                transform: leftVisible ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s",
              }}
            />

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-6">
              <div
                className="group"
                style={{
                  opacity: leftVisible ? 1 : 0,
                  transform: leftVisible ? "translateY(0)" : "translateY(20px)",
                  transition:
                    "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
                }}
              >
                <LuBadgeCheck className="w-5 h-5 text-slate-300 mb-3 group-hover:text-slate-600 transition-colors duration-300" />
                <div className="text-sm text-slate-600 font-light leading-relaxed">
                  {t("certifications.iso")}
                </div>
              </div>
              <div
                className="group"
                style={{
                  opacity: leftVisible ? 1 : 0,
                  transform: leftVisible ? "translateY(0)" : "translateY(20px)",
                  transition:
                    "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
                }}
              >
                <LuLeaf className="w-5 h-5 text-slate-300 mb-3 group-hover:text-slate-600 transition-colors duration-300" />
                <div className="text-sm text-slate-600 font-light leading-relaxed">
                  {t("certifications.eco")}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Title & Features */}
          <div ref={rightRef}>
            {/* Badge */}
            <span
              className="inline-block text-[11px] tracking-[0.3em] uppercase text-slate-400 font-medium"
              style={{
                opacity: rightVisible ? 1 : 0,
                transform: rightVisible ? "translateY(0)" : "translateY(15px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              {t("badge")}
            </span>

            <div
              className="w-10 h-[1px] bg-slate-300 mt-4 mb-6"
              style={{
                opacity: rightVisible ? 1 : 0,
                transform: rightVisible ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
              }}
            />

            {/* Title */}
            <h2
              className="text-3xl md:text-4xl tracking-[0.02em] text-slate-900 mb-4"
              style={{
                opacity: rightVisible ? 1 : 0,
                transform: rightVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
              }}
            >
              <span className="font-extralight">{t("title")} </span>
              <span className="font-bold">{t("titleHighlight")}</span>
            </h2>

            {/* Subtitle */}
            <p
              className="text-slate-500 text-base font-light leading-relaxed mb-10"
              style={{
                opacity: rightVisible ? 1 : 0,
                transform: rightVisible ? "translateY(0)" : "translateY(15px)",
                transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
              }}
            >
              {t("subtitle")}
            </p>

            {/* Features */}
            <div className="space-y-0">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 py-5 border-t border-slate-200 last:border-b"
                  style={{
                    opacity: rightVisible ? 1 : 0,
                    transform: rightVisible
                      ? "translateX(0)"
                      : "translateX(30px)",
                    transition: `opacity 0.6s ease ${
                      0.6 + i * 0.1
                    }s, transform 0.6s ease ${0.6 + i * 0.1}s`,
                  }}
                >
                  <feature.icon className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors duration-300 shrink-0" />
                  <span className="text-sm tracking-[0.05em] text-slate-600 font-light group-hover:text-slate-900 transition-colors duration-300">
                    {t(feature.textKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
