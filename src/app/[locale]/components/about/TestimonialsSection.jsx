/**
 * Testimonials Section
 *
 * Customer testimonials displayed in a minimal grid layout
 * with scroll-triggered animations and clean typography.
 */

"use client";

import React, { useEffect, useRef, useState } from "react";
import { LuQuote, LuStar } from "react-icons/lu";
import { useTranslations } from "next-intl";

const TestimonialsSection = () => {
  const t = useTranslations("about.testimonials");
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const cardRefs = useRef([]);
  const [cardVisibility, setCardVisibility] = useState([]);

  const getTestimonials = () => {
    try {
      const items = t.raw("items");
      return Array.isArray(items) ? items : [];
    } catch {
      return [];
    }
  };

  const testimonials = getTestimonials();

  useEffect(() => {
    setCardVisibility(new Array(testimonials.length).fill(false));
  }, [testimonials.length]);

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
    const observers = cardRefs.current.map((el, index) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCardVisibility((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [testimonials.length]);

  return (
    <div className="py-28 md:py-36 px-6 bg-slate-50 relative overflow-hidden">
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group bg-white p-10 md:p-12 hover:bg-slate-100 transition-all duration-500 flex flex-col"
              style={{
                opacity: cardVisibility[index] ? 1 : 0,
                transform: cardVisibility[index]
                  ? "translateY(0)"
                  : "translateY(30px)",
                transition: `opacity 0.6s ease ${
                  index * 0.15
                }s, transform 0.6s ease ${index * 0.15}s`,
              }}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
