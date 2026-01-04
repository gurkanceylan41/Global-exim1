"use client";
import React, { useState, useEffect } from "react";

import HeroSection from "../components/about/HeroSection";

import { stats } from "../data/aboutData";

import {
  FaGlobe,
  FaShippingFast,
  FaAward,
  FaUsers,
  FaShieldAlt,
  FaRocket,
  FaStar,
  FaBuilding,
  FaCheck,
  FaArrowRight,
  FaChartLine,
  FaHandshake,
  FaClock,
  FaMapMarkedAlt,
  FaLightbulb,
  FaLeaf,
  FaCertificate,
  FaQuoteLeft,
  FaTrophy,
  FaHeart,
} from "react-icons/fa";
import MissionVisionSection from "../components/about/MissionVisionSection";
import ValuesSection from "../components/about/ValuesSection";
import TimelineSection from "../components/about/TimelineSection";
import WhyChooseUsSection from "../components/about/WhyChooseUsSection";
import TestimonialsSection from "../components/about/TestimonialsSection";
import CTASection from "../components/about/CTASection";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const values = [
    {
      icon: FaShieldAlt,
      title: "Güvenilirlik",
      description:
        "ISO 9001 sertifikalı kalite yönetim sistemi ile müşterilerimize güven veriyoruz",
      color: "from-blue-500 to-blue-600",
      borderColor: "group-hover:border-blue-500/50",
    },
    {
      icon: FaRocket,
      title: "İnovasyon",
      description: "Teknoloji odaklı çözümler ile dijital dönüşümde öncüyüz",
      color: "from-purple-500 to-purple-600",
      borderColor: "group-hover:border-purple-500/50",
    },
    {
      icon: FaUsers,
      title: "Müşteri Odaklılık",
      description: "7/24 destek ve özel çözümlerle yanınızdayız",
      color: "from-emerald-500 to-emerald-600",
      borderColor: "group-hover:border-emerald-500/50",
    },
    {
      icon: FaStar,
      title: "Mükemmellik",
      description: "En yüksek standartlarda hizmet kalitesi sunuyoruz",
      color: "from-amber-500 to-amber-600",
      borderColor: "group-hover:border-amber-500/50",
    },
  ];

  const timeline = [
    {
      year: "2010",
      title: "Kuruluş",
      description:
        "Global Exim, Türkiye'de uluslararası ticaret vizyonuyla kuruldu. İlk adımları attık ve temellerimizi oluşturduk.",
      color: "bg-blue-500",
      icon: FaRocket,
      achievements: ["İlk ofis", "Kurucu ekip"],
    },
    {
      year: "2015",
      title: "Büyüme Dönemi",
      description:
        "50+ ülkeye hizmet veren güçlü bir yapıya kavuştuk. Bölgesel liderliğimizi pekiştirdik.",
      color: "bg-emerald-500",
      icon: FaChartLine,
      achievements: ["50+ ülke", "500+ müşteri"],
    },
    {
      year: "2020",
      title: "Dijital Dönüşüm",
      description:
        "E-ticaret ve dijital platformlarda yeni hizmetler başlattık. Teknolojiye yatırım yaptık.",
      color: "bg-purple-500",
      icon: FaLightbulb,
      achievements: ["Dijital platform", "Online hizmetler"],
    },
    {
      year: "2025",
      title: "Lider Pozisyon",
      description:
        "70+ ülkede faaliyet gösteren sektör lideri konumundayız. Geleceğe güvenle bakıyoruz.",
      color: "bg-amber-500",
      icon: FaTrophy,
      achievements: ["70+ ülke", "1000+ müşteri"],
    },
  ];

  const tabs = [
    {
      id: "mission",
      label: "Misyon",
      icon: FaRocket,
      content:
        "Uluslararası ticarette güvenilir köprü olmak, müşterilerimize en yüksek kalitede hizmet sunarak küresel pazarlarda büyümelerine destek sağlamak. Sürdürülebilir ticaret anlayışı ile sektörde öncü olmayı hedefliyoruz.",
    },
    {
      id: "vision",
      label: "Vizyon",
      icon: FaBuilding,
      content:
        "2030 yılına kadar 100'den fazla ülkeye hizmet veren, teknoloji odaklı çözümleri ile sektörde referans alınan küresel bir ticaret şirketi olmak. Dijital dönüşüm ve inovasyon ile geleceği şekillendirmek.",
    },
    {
      id: "values",
      label: "Değerler",
      icon: FaStar,
      content:
        "Dürüstlük, şeffaflık, müşteri memnuniyeti, sürekli gelişim ve çevreye saygı. Bu değerler doğrultusunda tüm iş süreçlerimizi yönetiyor ve uzun vadeli iş ortaklıkları kuruyoruz.",
    },
  ];

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      position: "CEO, TechCorp",
      text: "Global Exim ile çalışmak işimizi uluslararası pazarlara taşımamızı kolaylaştırdı. Profesyonel ekip ve hızlı çözümler.",
      rating: 5,
    },
    {
      name: "Ayşe Demir",
      position: "İhracat Müdürü, ExportPro",
      text: "15 yıldır güvendiğimiz iş ortağımız. Her zaman yanımızdalar ve sorunlarımıza anında çözüm buluyorlar.",
      rating: 5,
    },
    {
      name: "Mehmet Kaya",
      position: "Lojistik Direktörü, FastShip",
      text: "Kaliteli hizmet, zamanında teslimat ve rekabetçi fiyatlar. Global Exim'i herkese tavsiye ediyorum.",
      rating: 5,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-950 overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission/Vision/Values Section */}
      <MissionVisionSection />

      {/* Values Section */}
      <ValuesSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default AboutPage;
