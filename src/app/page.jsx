"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaGlobe,
  FaShippingFast,
  FaAward,
  TrendingUp,
} from "react-icons/fa";

import AboutPage from "./components/home/AboutSection";
import HeroSection from "./components/home/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutPage />
    </>
  );
};

export default Home;
