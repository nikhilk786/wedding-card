"use client";

import React, { useEffect, useState } from "react";
import { WEDDING_CONFIG } from "@/config/wedding";
import { LotusMotif, CornerOrnament } from "./RoyalMotifs";
import { IconHeart } from "@tabler/icons-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    function calculateTimeLeft(): TimeLeft {
      const targetTime = new Date(WEDDING_CONFIG.wedding.isoDateTime).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (isNaN(targetTime) || difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds, isPast: false };
    }

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <section className="py-12 text-center">
        <div className="h-24 max-w-xl mx-auto rounded-2xl bg-gold-500/5 animate-pulse" />
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 text-center">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative rounded-3xl border border-gold-500/30 bg-gradient-to-b from-[#FFFDF9] to-[#FAF6EE] p-6 sm:p-10 shadow-lg shadow-maroon-900/5">
          {/* Subtle Corner Details */}
          <div className="absolute top-2.5 left-2.5">
            <CornerOrnament position="top-left" />
          </div>
          <div className="absolute top-2.5 right-2.5">
            <CornerOrnament position="top-right" />
          </div>

          <div className="flex items-center justify-center gap-2 text-gold-600 mb-2">
            <LotusMotif className="h-6 w-6" />
          </div>

          <h2 className="font-royal text-xl sm:text-2xl font-bold tracking-wider text-maroon-800">
            {timeLeft.isPast ? "Celebrating Our Eternal Bond" : "Counting The Auspicious Moments"}
          </h2>
          <p className="mt-1 text-xs sm:text-sm font-serif italic text-neutral-600">
            {timeLeft.isPast
              ? "With gratitude for your warm blessings on our sacred wedding celebration."
              : `Until we exchange sacred vows on ${WEDDING_CONFIG.wedding.displayDate}`}
          </p>

          {!timeLeft.isPast ? (
            <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((unit, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center rounded-2xl border border-gold-500/30 bg-white/80 p-3 sm:p-5 shadow-sm"
                >
                  <span className="font-royal text-2xl sm:text-4xl font-extrabold text-maroon-900 font-mono">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className="mt-1 text-[10px] sm:text-xs font-sans uppercase tracking-widest text-gold-700 font-semibold">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-400 bg-gold-500/10 px-5 py-2 text-xs font-serif font-semibold text-maroon-800">
              <IconHeart className="h-4 w-4 text-maroon-700 fill-maroon-700" />
              <span>Happily Ever After & Eternally Grateful</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

