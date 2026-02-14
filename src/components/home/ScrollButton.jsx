/**
 * Scroll Button Component
 *
 * Animated scroll indicator at the bottom of the hero section.
 * Clicking it smoothly scrolls to the content below.
 * This is a client component for interactivity.
 */

"use client";

export default function ScrollButton() {
  // Smooth scroll to the content section below the fold
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToContent}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group focus:outline-none"
      aria-label="Scroll down"
    >
      {/* Animated scroll indicator with mouse wheel design */}
      <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2 group-hover:border-[#53B6F0] transition-colors duration-300">
        <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll group-hover:bg-[#53B6F0] transition-colors duration-300" />
      </div>
    </button>
  );
}
