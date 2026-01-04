import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { values } from "@/app/data/aboutData";

const ValuesSection = () => {
  return (
    <div className="py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-purple-500/10 backdrop-blur-xl rounded-full border border-purple-500/30 mb-8">
            <FaShieldAlt className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-slate-300 font-semibold">
              Değerlerimiz
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Temel{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Değerlerimiz
            </span>
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            Başarımızın ardındaki prensipler ve ilkeler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`}
              ></div>
              <div
                className={`relative h-full bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:bg-slate-900/60 transition-all duration-300 transform hover:-translate-y-2 ${value.borderColor}`}
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {value.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-slate-700/30 rounded-full group-hover:border-blue-500/30 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
