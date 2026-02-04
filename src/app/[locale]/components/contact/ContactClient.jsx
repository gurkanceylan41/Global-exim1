/**
 * Contact Client Component
 *
 * Minimal contact page with scroll-triggered animations.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  LuPhone,
  LuMail,
  LuMapPin,
  LuBuilding2,
  LuGlobe,
  LuArrowRight,
  LuMessageCircle,
} from "react-icons/lu";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function ContactClient() {
  const t = useTranslations("contact");

  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const contentRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const entries = [
      { ref: headerRef, setter: setHeaderVisible },
      { ref: cardsRef, setter: setCardsVisible },
      { ref: contentRef, setter: setContentVisible },
    ];

    const observers = entries.map(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const contactCards = [
    {
      icon: LuPhone,
      titleKey: "cards.phone.title",
      value: "+7 922 203 26 33",
      subtitleKey: "cards.phone.subtitle",
      link: "tel:+79222032633",
    },
    {
      icon: LuMessageCircle,
      titleKey: "cards.whatsapp.title",
      value: "+7 922 203 26 33",
      subtitleKey: "cards.whatsapp.subtitle",
      link: "https://wa.me/79222032633",
    },
    {
      icon: LuMail,
      titleKey: "cards.email.title",
      value: "murat.seyhan@globaleximco.com",
      subtitleKey: "cards.email.subtitle",
      link: "mailto:murat.seyhan@globaleximco.com",
    },
    {
      icon: LuMapPin,
      titleKey: "cards.address.title",
      value: t("cards.address.value"),
      subtitleKey: "cards.address.subtitle",
      link: "https://maps.google.com/?q=123+Anywhere+St,+Any+City,+ST+12345",
    },
  ];

  const offices = [
    {
      icon: LuBuilding2,
      titleKey: "offices.headquarters.title",
      addressKey: "offices.headquarters.address",
      cityKey: "offices.headquarters.city",
      countryKey: "offices.headquarters.country",
    },
    {
      icon: LuGlobe,
      titleKey: "offices.global.title",
      addressKey: "offices.global.address",
      cityKey: "offices.global.city",
      countryKey: "offices.global.country",
    },
  ];

  const socialLinks = [
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      handle: "+7 922 203 26 33",
      link: "https://wa.me/79222032633",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      handle: "@hlydmr90",
      link: "https://www.instagram.com/hlydmr90/",
    },
    {
      icon: null,
      name: "X (Twitter)",
      handle: "@globalexim",
      link: "https://x.com/globalexim",
      isCustomIcon: true,
    },
  ];

  return (
    <>
      {/* Header */}
      <header className="pt-36 pb-16 px-6 border-b border-slate-200" ref={headerRef}>
        <div className="max-w-5xl mx-auto text-center">
          <span
            className="inline-block text-[11px] tracking-[0.3em] uppercase text-slate-400 font-medium"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {t("hero.badge")}
          </span>

          <div
            className="w-10 h-[1px] bg-slate-300 mx-auto mt-4 mb-6"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "scaleX(1)" : "scaleX(0)",
              transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
            }}
          />

          <h1
            className="text-3xl md:text-4xl lg:text-5xl tracking-[0.02em] text-slate-900 mb-6"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            <span className="font-extralight">{t("hero.title").split(" ")[0]} </span>
            <span className="font-bold">{t("hero.title").split(" ").slice(1).join(" ")}</span>
          </h1>

          <p
            className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
            }}
          >
            {t("hero.subtitle")}
          </p>
        </div>
      </header>

      {/* Contact Cards */}
      <div className="py-20 px-6" ref={cardsRef}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {contactCards.map((card, index) => (
              <a
                key={index}
                href={card.link}
                target={card.link.startsWith("http") ? "_blank" : undefined}
                rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-white p-8 hover:bg-slate-50 transition-colors duration-500"
                style={{
                  opacity: cardsVisible ? 1 : 0,
                  transform: cardsVisible ? "translateY(0)" : "translateY(25px)",
                  transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
                }}
              >
                <card.icon className="w-5 h-5 text-slate-300 mb-5 group-hover:text-slate-600 transition-colors duration-300" />
                <h3 className="text-sm tracking-[0.12em] uppercase font-medium text-slate-900 mb-3">
                  {t(card.titleKey)}
                </h3>
                <div className="w-6 h-[1px] bg-slate-200 mb-3 group-hover:w-10 transition-all duration-500" />
                <p className="text-sm text-slate-700 font-medium mb-1">
                  {card.value}
                </p>
                <p className="text-[11px] tracking-[0.1em] text-slate-400 font-light">
                  {t(card.subtitleKey)}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Offices & Social */}
      <div className="py-20 px-6 bg-slate-50" ref={contentRef}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Offices */}
            <div
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? "translateY(0)" : "translateY(25px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-slate-400 font-medium">
                {t("offices.title")}
              </span>
              <div className="w-10 h-[1px] bg-slate-300 mt-4 mb-8" />

              <div className="space-y-0">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 py-6 border-t border-slate-200 last:border-b"
                    style={{
                      opacity: contentVisible ? 1 : 0,
                      transform: contentVisible ? "translateX(0)" : "translateX(20px)",
                      transition: `opacity 0.6s ease ${0.2 + index * 0.15}s, transform 0.6s ease ${0.2 + index * 0.15}s`,
                    }}
                  >
                    <office.icon className="w-4 h-4 text-slate-400 mt-0.5 shrink-0 group-hover:text-slate-600 transition-colors duration-300" />
                    <div>
                      <h4 className="text-sm tracking-[0.08em] font-medium text-slate-900 mb-1">
                        {t(office.titleKey)}
                      </h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">
                        {t(office.addressKey)}
                      </p>
                      <p className="text-sm text-slate-500 font-light">
                        {t(office.cityKey)}
                      </p>
                      <p className="text-[11px] tracking-[0.1em] text-slate-400 font-light mt-1">
                        {t(office.countryKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? "translateY(0)" : "translateY(25px)",
                transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
              }}
            >
              <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-slate-400 font-medium">
                {t("social.title")}
              </span>
              <div className="w-10 h-[1px] bg-slate-300 mt-4 mb-8" />

              <div className="space-y-0">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-5 border-t border-slate-200 last:border-b"
                    style={{
                      opacity: contentVisible ? 1 : 0,
                      transform: contentVisible ? "translateX(0)" : "translateX(20px)",
                      transition: `opacity 0.6s ease ${0.4 + index * 0.12}s, transform 0.6s ease ${0.4 + index * 0.12}s`,
                    }}
                  >
                    {social.isCustomIcon ? (
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors duration-300 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ) : (
                      <social.icon className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors duration-300 shrink-0" />
                    )}
                    <div className="flex-1">
                      <span className="text-sm tracking-[0.05em] text-slate-900 font-medium group-hover:text-slate-700 transition-colors duration-300">
                        {social.name}
                      </span>
                      <span className="text-[11px] text-slate-400 font-light ml-3">
                        {social.handle}
                      </span>
                    </div>
                    <LuArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
