import React from "react";
import Link from "next/link";
import {
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaStar,
  FaArrowRight,
  FaGlobe,
} from "react-icons/fa";

const AboutSection = () => {
  const highlights = [
    {
      icon: FaShieldAlt,
      title: "Güvenilirlik",
      description: "ISO 9001 sertifikalı kalite güvencesi",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FaRocket,
      title: "İnovasyon",
      description: "Teknoloji odaklı çözümler",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FaUsers,
      title: "Müşteri Odaklılık",
      description: "7/24 profesyonel destek",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: FaStar,
      title: "Mükemmellik",
      description: "En yüksek hizmet standartları",
      color: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <div className="py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 backdrop-blur-xl rounded-full border border-blue-500/30 mb-6">
                <FaGlobe className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-slate-300 font-semibold">
                  Global Exim Hakkında
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Uluslararası Ticarette{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Güvenilir Partneriniz
                </span>
              </h2>

              <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
                <span className="text-slate-300 font-semibold">15 yıldır</span>{" "}
                uluslararası ticarette köprü kuruyoruz.{" "}
                <span className="text-slate-300 font-semibold">70+ ülkede</span>{" "}
                faaliyet göstererek işinizi dünya pazarlarına taşıyoruz.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl px-6 py-3">
                  <div className="text-2xl font-black text-white">1000+</div>
                  <div className="text-sm text-slate-400">Mutlu Müşteri</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl px-6 py-3">
                  <div className="text-2xl font-black text-white">70+</div>
                  <div className="text-sm text-slate-400">Ülke</div>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl px-6 py-3">
                  <div className="text-2xl font-black text-white">15+</div>
                  <div className="text-sm text-slate-400">Yıl Deneyim</div>
                </div>
              </div>

              <Link href="/About">
                <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300">
                  <span>Daha Fazla Bilgi</span>
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}
                ></div>
                <div className="relative h-full bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-slate-900/70 transition-all duration-300 transform hover:-translate-y-2">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { label: "Başarılı Sevkiyat", value: "10K+", icon: "📦" },
            { label: "Müşteri Memnuniyeti", value: "99.8%", icon: "⭐" },
            { label: "Global Ağ", value: "70+", icon: "🌍" },
            { label: "Sektör Deneyimi", value: "15", icon: "🏆" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/30 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
