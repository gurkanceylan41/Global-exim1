/**
 * Header Component with i18n Support
 *
 * Main navigation header with:
 * - Logo and branding
 * - Desktop navigation menu
 * - Mobile hamburger menu with slide-out navigation
 * - Language switcher for TR/RU
 * - Social media links
 *
 * Uses next-intl for translations and locale-aware routing
 */

"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import {
  FaBars,
  FaXmark,
  FaWhatsapp,
  FaInstagram,
  FaXTwitter,
  FaGlobe,
} from "react-icons/fa6";

const Header = () => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for language dropdown
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  // Get current locale and translations
  const locale = useLocale();
  const t = useTranslations("navigation");
  const tLang = useTranslations("languageSwitcher");

  // Router and pathname from next-intl (locale-aware)
  const router = useRouter();
  const pathname = usePathname();

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu (used when clicking a link)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  /**
   * Handle language change
   * Uses next-intl's router which automatically handles locale prefixes
   */
  const handleLanguageChange = (newLocale) => {
    // next-intl's router.replace handles locale switching automatically
    // pathname from next-intl is already without the locale prefix
    router.replace(pathname, { locale: newLocale });
    setIsLangDropdownOpen(false);
  };

  // Navigation items configuration
  const navItems = [
    { href: "/", label: t("home") },
    { href: "/About", label: t("about") },
    { href: "/Products", label: t("products") },
    { href: "/Contact", label: t("contact") },
  ];

  // Language options
  const languages = [
    { code: "tr", label: tLang("turkish"), flag: "🇹🇷" },
    { code: "ru", label: tLang("russian"), flag: "🇷🇺" },
  ];

  // Get current language info
  const currentLang = languages.find((lang) => lang.code === locale);

  return (
    <header className="w-full bg-black/70 text-white fixed top-0 left-0 z-50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-16 md:h-18 flex justify-between items-center">
        {/* Logo - Using next-intl Link for locale-aware navigation */}
        <Link href="/" className="flex items-center shrink-0 z-10 group">
          <span className="text-2xl md:text-3xl font-black tracking-tight leading-none">
            <span className="text-white transition-all duration-300 group-hover:text-gray-200">
              Global
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 transition-all duration-300 group-hover:from-blue-300 group-hover:via-blue-400 group-hover:to-cyan-300">
              {" "}
              Exim
            </span>
          </span>
        </Link>

        {/* Desktop Navigation - Using next-intl Link */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 hover:text-blue-400 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side - Language Switcher, Social Icons & Menu */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300"
              aria-label={tLang("label")}
            >
              <FaGlobe className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium hidden sm:inline">
                {currentLang?.flag} {currentLang?.label}
              </span>
              <span className="text-sm font-medium sm:hidden">
                {currentLang?.flag}
              </span>
            </button>

            {/* Dropdown Menu */}
            {isLangDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-slate-900/95 backdrop-blur-lg border border-slate-700 rounded-lg shadow-xl overflow-hidden min-w-[140px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      locale === lang.code
                        ? "bg-blue-500/20 text-blue-400"
                        : "hover:bg-white/5 text-slate-300 hover:text-white"
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Social Media Icons - Desktop Only */}
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
            aria-label={isMobileMenuOpen ? t("closeMenu") : t("openMenu")}
          >
            {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide Down Panel */}
      <div
        className={`lg:hidden fixed top-16 md:top-18 left-0 w-full bg-black/95 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-6 gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className="py-3 px-4 hover:bg-white/5 hover:text-blue-400 rounded-lg transition-all duration-300 border-b border-white/10"
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Language Switcher */}
          <div className="pt-4 border-t border-white/10">
            <div className="text-sm text-slate-400 mb-3 px-4">{tLang("label")}</div>
            <div className="flex gap-2 px-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    handleLanguageChange(lang.code);
                    closeMobileMenu();
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    locale === lang.code
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Backdrop for closing dropdown when clicking outside */}
      {isLangDropdownOpen && (
        <div
          className="fixed inset-0 z-[-1]"
          onClick={() => setIsLangDropdownOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
