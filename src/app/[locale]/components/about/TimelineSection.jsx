/**
 * Timeline Section
 *
 * Company history displayed as a horizontal timeline
 * with milestone cards showing achievements.
 */

"use client";

import React from "react";
import { FaClock, FaRocket, FaChartLine, FaLightbulb, FaTrophy } from "react-icons/fa";
import { useTranslations } from "next-intl";

const TimelineSection = () => {
  // Get translations
  const t = useTranslations("about.timeline");

  // Timeline items configuration
  const timeline = [
    {
      year: "2010",
      titleKey: "items.2010.title",
      descriptionKey: "items.2010.description",
      achievementsKey: "items.2010.achievements",
      color: "bg-blue-500",
      icon: FaRocket,
    },
    {
      year: "2015",
      titleKey: "items.2015.title",
      descriptionKey: "items.2015.description",
      achievementsKey: "items.2015.achievements",
      color: "bg-emerald-500",
      icon: FaChartLine,
    },
    {
      year: "2020",
      titleKey: "items.2020.title",
      descriptionKey: "items.2020.description",
      achievementsKey: "items.2020.achievements",
      color: "bg-purple-500",
      icon: FaLightbulb,
    },
    {
      year: "2025",
      titleKey: "items.2025.title",
      descriptionKey: "items.2025.description",
      achievementsKey: "items.2025.achievements",
      color: "bg-amber-500",
      icon: FaTrophy,
    },
  ];

  // Helper function to get achievements array from translations
  const getAchievements = (key) => {
    try {
      const achievements = t.raw(key);
      return Array.isArray(achievements) ? achievements : [];
    } catch {
      return [];
    }
  };

  return (
    <div className="py-32 px-6 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.2)_25%,rgba(59,130,246,0.2)_75%,transparent_75%,transparent),linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.2)_25%,rgba(59,130,246,0.2)_75%,transparent_75%,transparent)] bg-[size:100px_100px] bg-[position:0_0,50px_50px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500/10 backdrop-blur-xl rounded-full border border-emerald-500/30 mb-8">
            <FaClock className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-slate-300 font-semibold">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            {t("title")}{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
          </h2>
          <p className="text-slate-400 text-xl">
            {t("subtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Desktop only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 via-purple-500 to-amber-500 rounded-full"></div>

          {/* Timeline Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {timeline.map((item, index) => {
              const achievements = getAchievements(item.achievementsKey);

              return (
                <div key={index} className="group relative">
                  {/* Mobile Timeline Connector */}
                  {index < timeline.length - 1 && (
                    <div className="lg:hidden absolute top-24 left-10 w-0.5 h-full bg-gradient-to-b from-slate-600 to-transparent"></div>
                  )}

                  <div className="flex flex-col items-center text-center relative">
                    {/* Year Badge with Icon */}
                    <div className="relative z-20 mb-8">
                      <div
                        className={`${item.color} rounded-3xl px-8 py-4 shadow-2xl transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="w-6 h-6 text-white" />
                          <div className="text-3xl font-black text-white">
                            {item.year}
                          </div>
                        </div>
                      </div>
                      {/* Glow Effect */}
                      <div
                        className={`absolute inset-0 ${item.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                      ></div>
                    </div>

                    {/* Content Card */}
                    <div className="relative w-full group-hover:scale-105 transition-transform duration-300">
                      <div
                        className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`}
                      ></div>
                      <div className="relative bg-slate-950/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 group-hover:border-slate-700 transition-all duration-300">
                        <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                          {t(item.titleKey)}
                        </h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                          {t(item.descriptionKey)}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-3">
                          {achievements.map((achievement, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 text-sm"
                            >
                              <div
                                className={`w-2 h-2 ${item.color} rounded-full`}
                              ></div>
                              <span className="text-slate-500">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
