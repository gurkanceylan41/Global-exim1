/**
 * FloatingCard - Client Component
 *
 * Interactive floating image card with hover effect.
 * Separated for minimal client bundle.
 */

"use client";

import { useState } from "react";

export default function FloatingCard({ src, className, baseRotate, alt = "Product image" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${className} relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl cursor-pointer`}
      style={{
        transform: hovered
          ? "rotate(0deg) scale(1.12)"
          : `rotate(${baseRotate}deg) scale(1)`,
        boxShadow: hovered
          ? "0 30px 60px rgba(0,0,0,0.6)"
          : "0 15px 30px rgba(0,0,0,0.3)",
        transition:
          "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease",
        zIndex: hovered ? 10 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          pointerEvents: "none",
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}
