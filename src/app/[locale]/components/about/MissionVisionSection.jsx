/**
 * Mission/Vision/Values Section
 *
 * Tabbed content section displaying company mission, vision, and values.
 * Interactive tabs with smooth transitions and hover effects.
 */

"use client";

import { useState } from "react";
import { FaStar, FaQuoteLeft, FaRocket, FaBuilding } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function MissionVisionSection() {
  // Active tab state
  const [activeTab, setActiveTab] = useState("mission");

  // Get translations
  const t = useTranslations("about.mission");

  // Tab configuration with icons
  const tabs = [
    { id: "mission", labelKey: "tabs.mission.label", contentKey: "tabs.mission.content", icon: FaRocket },
    { id: "vision", labelKey: "tabs.vision.label", contentKey: "tabs.vision.content", icon: FaBuilding },
    { id: "values", labelKey: "tabs.values.label", contentKey: "tabs.values.content", icon: FaStar },
  ];

  return (
    <div className="py-32 px-6 bg-slate-950 relative">
      {/* Background Pattern - Radial gradient effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 backdrop-blur-xl rounded-full border border-blue-500/30 mb-8">
            <FaStar className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-300 font-semibold">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            {t("title")}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Enhanced Tabs Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex gap-3 p-2 bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-800">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl shadow-blue-500/50 scale-105"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <tab.icon className="w-6 h-6" />
                {t(tab.labelKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Content Card */}
        <div className="max-w-5xl mx-auto">
          <div className="group relative">
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            {/* Content card */}
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-12 md:p-16 shadow-2xl group-hover:border-blue-500/50 transition-all duration-300">
              <FaQuoteLeft className="w-12 h-12 text-blue-400/30 mb-6" />
              <p className="text-slate-300 text-xl md:text-2xl leading-relaxed font-light">
                {t(tabs.find((tab) => tab.id === activeTab)?.contentKey)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
