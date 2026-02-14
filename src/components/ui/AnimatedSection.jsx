/**
 * AnimatedSection Component
 *
 * Reusable scroll-triggered animation wrapper using IntersectionObserver.
 * Provides fade-in and slide-up animation when element enters viewport.
 */

"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  translateY = 40,
  duration = 0.9
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${translateY}px)`,
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
