"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { WEDDING_CONFIG } from "@/config/wedding";
import { GaneshaMotif, CornerOrnament, OrnateDivider } from "./RoyalMotifs";
import { IconMailOpened, IconArrowDown } from "@tabler/icons-react";

interface OpeningExperienceProps {
  onOpen: () => void;
  isOpen: boolean;
}

export function OpeningExperience({ onOpen, isOpen }: OpeningExperienceProps) {
  const [hasStartedOpening, setHasStartedOpening] = useState(false);

  const handleOpenInvitation = () => {
    setHasStartedOpening(true);

    // Fire subtle gold and rose confetti burst
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#C5A059", "#DFBA6B", "#80162A", "#F4EDE2"],
        disableForReducedMotion: true,
      });
    } catch {}

    setTimeout(() => {
      onOpen();
    }, 600);
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      {!hasStartedOpening && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ivory-100/95 p-4 sm:p-6 backdrop-blur-md"
        >
          {/* Background Palace Mandala Art */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15 overflow-hidden">
            <div className="h-[600px] w-[600px] rounded-full border-[2px] border-dashed border-gold-500 animate-[spin_120s_linear_infinite]" />
            <div className="absolute h-[420px] w-[420px] rounded-full border border-gold-600/40" />
            <div className="absolute h-[280px] w-[280px] rounded-full border border-maroon-700/30" />
          </div>

          {/* Royal Invitation Card Envelope Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-lg rounded-3xl border border-gold-500/40 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EF] to-[#F5ECE0] p-6 sm:p-10 text-center shadow-2xl shadow-maroon-900/15 ornamental-frame"
          >
            {/* Corner Ornamental Accents */}
            <div className="absolute top-3 left-3">
              <CornerOrnament position="top-left" />
            </div>
            <div className="absolute top-3 right-3">
              <CornerOrnament position="top-right" />
            </div>
            <div className="absolute bottom-3 left-3">
              <CornerOrnament position="bottom-left" />
            </div>
            <div className="absolute bottom-3 right-3">
              <CornerOrnament position="bottom-right" />
            </div>

            {/* Sacred Invocation */}
            <div className="flex flex-col items-center justify-center pt-2">
              <GaneshaMotif className="h-16 w-16 text-gold-500 transition-transform duration-500 hover:scale-105" />
              <p className="mt-2 font-serif text-xs sm:text-sm tracking-widest text-maroon-800">
                {WEDDING_CONFIG.invitation.traditionalShloka}
              </p>
              <p className="text-[10px] sm:text-xs text-gold-700 font-sans tracking-wide mt-0.5 opacity-90">
                {WEDDING_CONFIG.invitation.shlokaTranslation}
              </p>
            </div>

            <OrnateDivider className="my-5" />

            {/* Invitation Headings */}
            <div className="space-y-3">
              <span className="inline-block text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-maroon-700">
                Together With Our Families
              </span>

              <h1 className="font-royal text-3xl sm:text-4xl font-bold tracking-tight text-maroon-800">
                The Wedding Celebration
              </h1>

              <div className="py-2">
                <div className="font-royal text-2xl sm:text-3xl text-gold-600 font-semibold tracking-wide">
                  {WEDDING_CONFIG.bride.firstName}
                  <span className="mx-2 font-serif text-xl sm:text-2xl text-maroon-700 italic font-normal">
                    &
                  </span>
                  {WEDDING_CONFIG.groom.firstName}
                </div>
              </div>

              <p className="text-xs sm:text-sm font-sans text-neutral-600 tracking-wider">
                {WEDDING_CONFIG.wedding.displayDate}
              </p>
              <p className="text-[11px] sm:text-xs text-gold-700 font-medium">
                {WEDDING_CONFIG.venue.name} • {WEDDING_CONFIG.venue.city}
              </p>
            </div>

            {/* Open Invitation Wax Seal Button */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={handleOpenInvitation}
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full border border-gold-400 bg-gradient-to-r from-maroon-700 via-maroon-800 to-maroon-900 px-8 py-3.5 text-xs sm:text-sm font-sans font-semibold tracking-widest uppercase text-ivory-100 shadow-xl shadow-maroon-950/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-gold-500/20 active:scale-[0.98]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-500/20 text-gold-300 group-hover:rotate-12 transition-transform">
                  <IconMailOpened className="h-3.5 w-3.5" />
                </span>
                <span>Open Royal Invitation</span>
              </button>

              {/* Instant Skip Button */}
              <button
                type="button"
                onClick={onOpen}
                className="inline-flex items-center gap-1 text-[11px] font-sans font-medium text-neutral-500 hover:text-maroon-700 hover:underline transition-colors pt-1"
              >
                <span>Skip to details</span>
                <IconArrowDown className="h-3 w-3" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

