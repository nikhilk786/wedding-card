"use client";

import React, { useEffect, useState } from "react";
import { IconSparkles, IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";

interface Petal {
  id: number;
  x: number; // percentage (0 - 100)
  size: number; // px (10 - 22)
  duration: number; // s (8 - 18)
  delay: number; // s (0 - 10)
  rotation: number;
  color: string;
}

export function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [isEnabled, setIsEnabled] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setIsEnabled(false);
    }

    // Generate lightweight petal particles
    const colors = [
      "rgba(223, 186, 107, 0.45)", // Antique Gold
      "rgba(197, 160, 89, 0.35)",  // Soft Gold
      "rgba(217, 72, 85, 0.35)",   // Rose Petal Pink
      "rgba(245, 158, 11, 0.35)",  // Marigold Saffron
    ];

    const initialPetals: Petal[] = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      x: Math.floor(Math.random() * 96) + 2,
      size: Math.floor(Math.random() * 12) + 10,
      duration: Math.floor(Math.random() * 10) + 10,
      delay: Math.floor(Math.random() * 10),
      rotation: Math.floor(Math.random() * 360),
      color: colors[i % colors.length],
    }));

    setPetals(initialPetals);
  }, []);

  if (!isEnabled || isReducedMotion) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute -top-6 rounded-full"
          style={{
            left: `${petal.x}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
            backgroundColor: petal.color,
            borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
            boxShadow: "0 2px 6px rgba(197, 160, 89, 0.2)",
            animation: `floatPetal ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            transform: `rotate(${petal.rotation}deg)`,
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
}

