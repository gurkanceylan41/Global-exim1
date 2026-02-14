/**
 * ScrollToTopButton - Client Component
 *
 * Shows a button to scroll to top when user scrolls down.
 * Separated for minimal client bundle.
 */

"use client";

import { useState, useEffect } from "react";
import { LuArrowUp } from "react-icons/lu";

export default function ScrollToTopButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-slate-900 text-white shadow-lg shadow-slate-900/30 flex items-center justify-center z-50 transition-all duration-500 hover:bg-slate-700 hover:scale-110 ${
        showScrollTop
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <LuArrowUp className="w-5 h-5" />
    </button>
  );
}
