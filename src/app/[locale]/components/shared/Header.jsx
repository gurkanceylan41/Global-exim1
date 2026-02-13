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
  FaChevronDown,
} from "react-icons/fa6";

const Header = () => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for language dropdown
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  // State for products dropdown
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  // State for mobile products submenu
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

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
    setIsMobileProductsOpen(false);
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
    { href: "/Contact", label: t("contact") },
  ];

  // Product subcategories for dropdown
  const productSubItems = [
    { href: "/Wafers", label: t("productCategories.wafers") },
    { href: "/Oils", label: t("productCategories.oils") },
    { href: "/MilkPowder", label: t("productCategories.milkPowder") },
    { href: "/Nuts", label: t("productCategories.nuts") },
  ];

  // Language options
  const languages = [
    { code: "tr", label: tLang("turkish"), flag: "🇹🇷" },
    { code: "ru", label: tLang("russian"), flag: "🇷🇺" },
    { code: "en", label: tLang("english"), flag: "🇬🇧" },
  ];

  // Get current language info
  const currentLang = languages.find((lang) => lang.code === locale);

  return (
    <header className="w-full bg-black/50 text-white fixed top-0 left-0 z-50 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-16 md:h-20 flex justify-between items-center">
        {/* Logo - Global Exim styled like business card */}
        <Link href="/" className="flex items-center shrink-0 z-10 group">
          <div className="flex flex-col items-start leading-none">
            <div className="flex items-baseline gap-1.5 tracking-[0.15em] uppercase">
              <span className="text-xl md:text-2xl font-extralight text-white transition-all duration-300 group-hover:text-gray-200">
                Global
              </span>
              <span className="text-xl md:text-2xl font-bold text-white transition-all duration-300 group-hover:text-gray-200">
                Exım
              </span>
            </div>
            <div className="w-full h-[1px] bg-white/60 mt-[1px] mb-0.5" />
            <span className="text-[6px] md:text-[8px] tracking-[0.2em] uppercase text-white/50 font-medium">
              Beyond Borders, Beyond Limits
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Home */}
          <Link
            href="/"
            className="relative text-[13px] tracking-[0.12em] uppercase font-light text-white/75 hover:text-white transition-all duration-300 py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white/50 after:transition-all after:duration-300 hover:after:w-full"
          >
            {t("home")}
          </Link>

          {/* About */}
          <Link
            href="/About"
            className="relative text-[13px] tracking-[0.12em] uppercase font-light text-white/75 hover:text-white transition-all duration-300 py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white/50 after:transition-all after:duration-300 hover:after:w-full"
          >
            {t("about")}
          </Link>

          {/* Products with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <Link
              href="/Products"
              className="relative text-[13px] tracking-[0.12em] uppercase font-light text-white/75 hover:text-white transition-all duration-300 py-2 flex items-center gap-1.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white/50 after:transition-all after:duration-300 hover:after:w-full"
            >
              {t("products")}
              <FaChevronDown
                className={`text-[10px] transition-transform duration-300 ${
                  isProductsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-0 pt-2 transition-all duration-300 ${
                isProductsDropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-sm min-w-[200px] py-2">
                {productSubItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-2.5 text-[12px] tracking-[0.1em] uppercase font-light text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <Link
            href="/Contact"
            className="relative text-[13px] tracking-[0.12em] uppercase font-light text-white/75 hover:text-white transition-all duration-300 py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white/50 after:transition-all after:duration-300 hover:after:w-full"
          >
            {t("contact")}
          </Link>

          {/* Separator */}
          <div className="w-[1px] h-5 bg-white/20 mx-1" />

          {/* Language Switcher - inline buttons */}
          <div className="flex items-center gap-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`text-[12px] tracking-[0.1em] uppercase px-2.5 py-1 rounded transition-all duration-300 ${
                  locale === lang.code
                    ? "text-white bg-white/15"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {lang.code}
              </button>
            ))}
          </div>

          {/* Separator */}
          <div className="w-[1px] h-5 bg-white/20 mx-1" />

          {/* Social Media Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://wa.me/905368854619"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-all duration-300 text-[15px]"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/hlydmr90/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-all duration-300 text-[15px]"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/globalexim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-all duration-300 text-[15px]"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
          </div>
        </nav>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-3 lg:hidden shrink-0">
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`text-[11px] tracking-[0.1em] uppercase px-2 py-1 rounded transition-all duration-300 ${
                  locale === lang.code
                    ? "text-white bg-white/15"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {lang.code}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="w-9 h-9 flex items-center justify-center rounded transition-all duration-300 text-xl text-white/70 hover:text-white"
            aria-label={isMobileMenuOpen ? t("closeMenu") : t("openMenu")}
          >
            {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 md:top-20 left-0 w-full bg-black/80 backdrop-blur-xl transition-all duration-300 overflow-hidden border-b border-white/[0.08] ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-5 gap-1">
          {/* Home */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="py-3 px-4 text-[13px] tracking-[0.12em] uppercase font-light text-white/70 hover:text-white hover:bg-white/5 rounded transition-all duration-300"
          >
            {t("home")}
          </Link>

          {/* About */}
          <Link
            href="/About"
            onClick={closeMobileMenu}
            className="py-3 px-4 text-[13px] tracking-[0.12em] uppercase font-light text-white/70 hover:text-white hover:bg-white/5 rounded transition-all duration-300"
          >
            {t("about")}
          </Link>

          {/* Products with Submenu */}
          <div>
            <button
              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              className="w-full py-3 px-4 text-[13px] tracking-[0.12em] uppercase font-light text-white/70 hover:text-white hover:bg-white/5 rounded transition-all duration-300 flex items-center justify-between"
            >
              {t("products")}
              <FaChevronDown
                className={`text-[10px] transition-transform duration-300 ${
                  isMobileProductsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isMobileProductsOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 border-l border-white/10 ml-4 mt-1 mb-2">
                {productSubItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block py-2.5 px-4 text-[12px] tracking-[0.1em] uppercase font-light text-white/60 hover:text-white transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <Link
            href="/Contact"
            onClick={closeMobileMenu}
            className="py-3 px-4 text-[13px] tracking-[0.12em] uppercase font-light text-white/70 hover:text-white hover:bg-white/5 rounded transition-all duration-300"
          >
            {t("contact")}
          </Link>

          {/* Mobile Social Icons */}
          <div className="flex items-center gap-4 px-4 pt-4 mt-2 border-t border-white/[0.08]">
            <a
              href="https://wa.me/905368854619"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-all duration-300 text-[15px]"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/hlydmr90/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-all duration-300 text-[15px]"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/globalexim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-all duration-300 text-[15px]"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
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
