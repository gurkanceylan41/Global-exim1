/**
 * Mission/Vision/Values Section
 *
 * Clean alternating layout with contained images and text.
 * Scroll-triggered animations for each block.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LuRocket, LuBuilding2, LuSparkles } from "react-icons/lu";
import { useTranslations } from "next-intl";

const AnimatedBlock = ({ children, index, isReverse }) => {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-8 lg:gap-16 ${
        isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center`}
    >
      {children(isVisible)}
    </div>
  );
};

// Rotating image component for mission section
const RotatingImage = ({ images, alt, isVisible, isReverse }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000); // 8 seconds for smoother transitions

    return () => clearInterval(interval);
  }, [isVisible, images.length]);

  return (
    <div
      className="w-full lg:w-[45%] relative shrink-0"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateX(0) scale(1)"
          : isReverse
          ? "translateX(40px) scale(0.97)"
          : "translateX(-40px) scale(0.97)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        {images.map((img, idx) => (
          <Image
            key={img}
            src={img}
            alt={alt}
            fill
            className="object-cover"
            quality={90}
            style={{
              opacity: currentIndex === idx ? 1 : 0,
              transition: "opacity 2s ease-in-out",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function MissionVisionSection() {
  const t = useTranslations("about.mission");
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

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

  // All sections have rotating images
  const missionImages = ["/images/mission.jpg", "/images/mission2.jpg"];
  const visionImages = ["/images/vision.jpg", "/images/vision2.jpg"];
  const valuesImages = ["/images/values.jpg", "/images/values2.jpg"];

  const sections = [
    {
      labelKey: "tabs.mission.label",
      contentKey: "tabs.mission.content",
      icon: LuRocket,
      images: missionImages,
      isRotating: true,
    },
    {
      labelKey: "tabs.vision.label",
      contentKey: "tabs.vision.content",
      icon: LuBuilding2,
      images: visionImages,
      isRotating: true,
    },
    {
      labelKey: "tabs.values.label",
      contentKey: "tabs.values.content",
      icon: LuSparkles,
      images: valuesImages,
      isRotating: true,
    },
  ];

  return (
    <div className="bg-[#f8fafc] py-24 md:py-32">
      {/* Section Header */}
      <div ref={headerRef} className="max-w-5xl mx-auto px-6 mb-24">
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
          className="w-10 h-[1px] bg-slate-300 mt-4 mb-6"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
          }}
        />
        <h2
          className="text-3xl md:text-4xl lg:text-5xl tracking-[0.02em] text-slate-900"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
          }}
        >
          <span className="font-extralight">{t("title")} </span>
          <span className="font-bold">{t("titleHighlight")}</span>
        </h2>
      </div>

      {/* Blocks */}
      <div className="max-w-6xl mx-auto px-6 space-y-28 md:space-y-36">
        {sections.map((section, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <AnimatedBlock key={index} index={index} isReverse={isReverse}>
              {(isVisible) => (
                <>
                  {/* Image side */}
                  {section.isRotating ? (
                    <RotatingImage
                      images={section.images}
                      alt={t(section.labelKey)}
                      isVisible={isVisible}
                      isReverse={isReverse}
                    />
                  ) : (
                    <div
                      className="w-full lg:w-[45%] relative shrink-0"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateX(0) scale(1)"
                          : isReverse
                          ? "translateX(40px) scale(0.97)"
                          : "translateX(-40px) scale(0.97)",
                        transition: "opacity 0.8s ease, transform 0.8s ease",
                      }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          src={section.image}
                          alt={t(section.labelKey)}
                          fill
                          className="object-cover hover:scale-[1.03] transition-transform duration-700"
                          quality={90}
                        />
                      </div>
                    </div>
                  )}

                  {/* Text side */}
                  <div
                    className="w-full lg:w-[55%] flex items-center"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateX(0)"
                        : isReverse
                        ? "translateX(-30px)"
                        : "translateX(30px)",
                      transition:
                        "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
                    }}
                  >
                    <div>
                      {/* Number + Label */}
                      <div className="flex items-center gap-4 mb-5">
                        <span className="text-4xl md:text-5xl font-extralight text-slate-200 leading-none">
                          0{index + 1}
                        </span>
                        <div className="w-6 h-[1px] bg-slate-200" />
                        <section.icon className="w-4 h-4 text-slate-400" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl tracking-[0.02em] text-slate-900 mb-2">
                        <span className="font-extralight">{t("title")} </span>
                        <span className="font-bold">{t(section.labelKey)}</span>
                      </h3>

                      {/* Line */}
                      <div className="w-8 h-[1px] bg-slate-300 my-5" />

                      {/* Description */}
                      <p className="text-slate-500 text-sm md:text-[15px] font-light leading-[1.9] max-w-md">
                        {t(section.contentKey)}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </AnimatedBlock>
          );
        })}
      </div>
    </div>
  );
}
