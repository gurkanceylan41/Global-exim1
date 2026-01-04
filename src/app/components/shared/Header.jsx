"use client";

import { useState } from "react";
import {
  FaBars,
  FaXmark,
  FaWhatsapp,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-black/70 text-white fixed top-0 left-0 z-50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-16 md:h-18 flex justify-between items-center">
        {/* Logo - Text Only */}
        <a href="/" className="flex items-center shrink-0 z-10 group">
          <span className="text-2xl md:text-3xl font-black tracking-tight leading-none">
            <span className="text-white transition-all duration-300 group-hover:text-gray-200">
              Global
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 transition-all duration-300 group-hover:from-blue-300 group-hover:via-blue-400 group-hover:to-cyan-300">
              {" "}
              Exim
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold">
          <a
            href="/"
            className="relative py-2 hover:text-blue-400 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Ana Sayfa
          </a>
          <a
            href="/About"
            className="relative py-2 hover:text-blue-400 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Hakkımızda
          </a>
          <a
            href="/Products"
            className="relative py-2 hover:text-blue-400 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Ürünler
          </a>
          <a
            href="/Contact"
            className="relative py-2 hover:text-blue-400 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            İletişim
          </a>
        </nav>

        {/* Right Side - Social Icons & Menu */}
        <div className="flex items-center gap-6 shrink-0">
          {/* Social Media Icons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/905368854619"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-500 hover:scale-110 transition-all duration-300 text-base"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/hlydmr90/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-500 hover:scale-110 transition-all duration-300 text-base"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/globalexim"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-500 hover:scale-110 transition-all duration-300 text-base"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-blue-500/20 transition-all duration-300 text-2xl"
            aria-label="Menüyü Aç"
          >
            {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 md:top-18 left-0 w-full bg-black/95 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-6 gap-4">
          <a
            href="/"
            onClick={closeMobileMenu}
            className="py-3 px-4 hover:bg-white/5 hover:text-blue-400 rounded-lg transition-all duration-300 border-b border-white/10"
          >
            Ana Sayfa
          </a>
          <a
            href="/About"
            onClick={closeMobileMenu}
            className="py-3 px-4 hover:bg-white/5 hover:text-blue-400 rounded-lg transition-all duration-300 border-b border-white/10"
          >
            Hakkımızda
          </a>
          <a
            href="/Products"
            onClick={closeMobileMenu}
            className="py-3 px-4 hover:bg-white/5 hover:text-blue-400 rounded-lg transition-all duration-300 border-b border-white/10"
          >
            Ürünler
          </a>
          <a
            href="/Contact"
            onClick={closeMobileMenu}
            className="py-3 px-4 hover:bg-white/5 hover:text-blue-400 rounded-lg transition-all duration-300 border-b border-white/10"
          >
            İletişim
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
