import Link from "next/link";
import React from "react";
import { FaRocket, FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  return (
    <div className="py-32 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[3rem] p-16 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/10 backdrop-blur-xl rounded-full border border-blue-500/30 mb-8">
            <FaRocket className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-300 font-semibold">
              Başlayalım
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Hemen{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              İletişime Geçin
            </span>
          </h2>

          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Uluslararası ticaret yolculuğunuzda size nasıl yardımcı
            olabileceğimizi konuşalım
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/Contact">
              <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300">
                <span>İletişime Geçin</span>
                <FaArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
