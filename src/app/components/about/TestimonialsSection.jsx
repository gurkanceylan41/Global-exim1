import React from "react";
import { FaHeart, FaStar, FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "@/app/data/aboutData";

const TestimonialsSection = () => {
  return (
    <div className="py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/10 backdrop-blur-xl rounded-full border border-amber-500/30 mb-8">
            <FaHeart className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-slate-300 font-semibold">
              Müşteri Yorumları
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Müşterilerimiz{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Ne Diyor?
            </span>
          </h2>
          <p className="text-slate-400 text-xl">
            Başarı hikayelerimiz ve geri bildirimler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:bg-slate-900/70 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <FaQuoteLeft className="w-8 h-8 text-blue-400/30 mb-4" />
                <p className="text-slate-300 leading-relaxed mb-8 flex-grow">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="border-t border-slate-800 pt-6">
                  <div className="font-bold text-white text-lg mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonial.position}
                  </div>
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
