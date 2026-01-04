import React from "react";
import {
  FaStar,
  FaHandshake,
  FaCertificate,
  FaLeaf,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaClock,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

const WhyChooseUsSection = () => {
  return (
    <div className="py-32 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left - Image with Advanced Effects */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 group-hover:border-blue-500/50 transition-all duration-300">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <FaHandshake className="w-32 h-32 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <div className="space-y-4">
                    <div className="text-6xl font-black text-white">1000+</div>
                    <div className="text-slate-400 text-xl">
                      Mutlu İş Ortağı
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Badges */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800">
                  <FaCertificate className="w-8 h-8 text-emerald-400 mb-2" />
                  <div className="text-sm text-slate-400">ISO 9001</div>
                </div>
                <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800">
                  <FaLeaf className="w-8 h-8 text-emerald-400 mb-2" />
                  <div className="text-sm text-slate-400">Çevre Dostu</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 backdrop-blur-xl rounded-full border border-blue-500/30">
              <FaStar className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-300 font-semibold">
                Neden Bizi Seçmelisiniz?
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Başarınız İçin{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Güvenilir Ortak
              </span>
            </h2>

            <p className="text-xl text-slate-400 leading-relaxed">
              15 yıllık deneyimimiz ve uzmanlığımızla işinizi uluslararası
              pazarlarda büyütmenize yardımcı oluyoruz.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                {
                  icon: FaShieldAlt,
                  text: "Güvenli ve hızlı ödeme sistemleri",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: FaMapMarkedAlt,
                  text: "70+ ülkede global ağ ve lojistik altyapı",
                  color: "from-emerald-500 to-emerald-600",
                },
                {
                  icon: FaClock,
                  text: "7/24 profesyonel müşteri desteği",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  icon: FaChartLine,
                  text: "Rekabetçi fiyatlar ve şeffaf maliyet yapısı",
                  color: "from-amber-500 to-amber-600",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-4 bg-slate-900/30 backdrop-blur-xl border border-slate-800 rounded-2xl hover:bg-slate-900/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-slate-300 font-medium group-hover:text-white transition-colors duration-300">
                    {feature.text}
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
