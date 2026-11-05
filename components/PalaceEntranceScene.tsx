"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { royalSound } from "@/lib/sound";
import { GaneshaMotif } from "./RoyalMotifs";
import { IconSparkles, IconEye, IconChevronRight } from "@tabler/icons-react";

interface PalaceEntranceSceneProps {
  onEnter: () => void;
  onInstantSkip: () => void;
  isOpen: boolean;
}

export function PalaceEntranceScene({
  onEnter,
  onInstantSkip,
  isOpen,
}: PalaceEntranceSceneProps) {
  const [isOpening, setIsOpening] = useState(false);
  const { config, lang } = useLanguage();

  const handleEnterWorld = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Play authentic royal acoustic cues
    royalSound.playTempleGong();
    setTimeout(() => {
      royalSound.playDoorOpen();
      royalSound.startRoyalAmbience();
    }, 250);

    // Transition smoothly into Scene 2
    setTimeout(() => {
      onEnter();
    }, 1700);
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex flex-col justify-between overflow-hidden bg-[#0A0204] select-none h-[100dvh] w-full"
        style={{ perspective: "1400px" }}
      >
        {/* Background Revealed Behind the Doors */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 pointer-events-none"
          style={{
            backgroundImage: "url('/images/palace-courtyard.jpg')",
            filter: isOpening ? "brightness(1) blur(0px)" : "brightness(0.3) blur(10px)",
            transform: isOpening ? "scale(1.05)" : "scale(1.2)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#100306]/70 via-transparent to-[#100306]/90" />
        </div>

        {/* Floating Golden Dust Particles */}
        <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gold-300/40 blur-[0.5px] animate-pulse"
              style={{
                top: `${(i * 17) % 94}%`,
                left: `${(i * 23) % 96}%`,
                width: `${(i % 3) + 2}px`,
                height: `${(i % 3) + 2}px`,
                boxShadow: "0 0 8px rgba(223, 186, 107, 0.8)",
                animationDuration: `${3 + (i % 4)}s`,
                animationDelay: `${(i * 0.4) % 3}s`,
              }}
            />
          ))}
        </div>

        {/* FULLSCREEN MOBILE-FIRST DUAL PALACE DOORS */}
        <div
          className="absolute inset-0 z-10 flex w-full h-full overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* LEFT PALACE DOOR */}
          <motion.div
            animate={
              isOpening
                ? { rotateY: -115, x: "-8%", opacity: 0.1 }
                : { rotateY: 0, x: 0, opacity: 1 }
            }
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            className="relative h-full w-1/2 origin-left bg-cover bg-right border-r border-[#4A0A14] overflow-hidden"
            style={{
              backgroundImage: "url('/images/royal-doors-left.jpg')",
              transformStyle: "preserve-3d",
              boxShadow: isOpening
                ? "none"
                : "inset -20px 0 35px rgba(0,0,0,0.85), 10px 0 25px rgba(0,0,0,0.7)",
            }}
          >
            {/* Left Brass Door Ring Handle */}
            <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-gold-300 bg-gradient-to-br from-gold-300 via-gold-500 to-amber-900 shadow-xl shadow-black/80">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border border-gold-200/90 shadow-inner" />
              </div>
              <div className="h-6 w-2 bg-gradient-to-b from-gold-400 to-amber-950 rounded-b shadow-md" />
            </div>

            {/* Subtle Carved Wood Shadow */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/35 pointer-events-none" />
          </motion.div>

          {/* RIGHT PALACE DOOR */}
          <motion.div
            animate={
              isOpening
                ? { rotateY: 115, x: "8%", opacity: 0.1 }
                : { rotateY: 0, x: 0, opacity: 1 }
            }
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            className="relative h-full w-1/2 origin-right bg-cover bg-left border-l border-[#4A0A14] overflow-hidden"
            style={{
              backgroundImage: "url('/images/royal-doors-right.jpg')",
              transformStyle: "preserve-3d",
              boxShadow: isOpening
                ? "none"
                : "inset 20px 0 35px rgba(0,0,0,0.85), -10px 0 25px rgba(0,0,0,0.7)",
            }}
          >
            {/* Right Brass Door Ring Handle */}
            <div className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-gold-300 bg-gradient-to-br from-gold-300 via-gold-500 to-amber-900 shadow-xl shadow-black/80">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border border-gold-200/90 shadow-inner" />
              </div>
              <div className="h-6 w-2 bg-gradient-to-b from-gold-400 to-amber-950 rounded-b shadow-md" />
            </div>

            {/* Subtle Carved Wood Shadow */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/35 pointer-events-none" />
          </motion.div>

          {/* Center Seam Golden Light */}
          <div
            className={`pointer-events-none absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-gradient-to-b from-amber-700 via-gold-300 to-amber-900 shadow-[0_0_15px_rgba(245,158,11,0.8)] transition-opacity duration-500 ${
              isOpening ? "opacity-0" : "opacity-90"
            }`}
          />
        </div>

        {/* TOP HEADER: Sacred Shloka & Palace Architrave */}
        <header className="relative z-40 pt-safe pt-6 sm:pt-10 px-4 text-center pointer-events-none">
          <div className="inline-flex flex-col items-center">
            {/* Ganesha Crest */}
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-gold-400/60 bg-[#1D040A]/90 shadow-lg shadow-black/60 backdrop-blur-md mb-2">
              <GaneshaMotif className="h-7 w-7 text-gold-400 drop-shadow-[0_1px_6px_rgba(223,186,107,0.7)]" />
            </div>

            <p className="font-serif text-xs sm:text-sm font-semibold tracking-widest uppercase text-gold-300 drop-shadow-md">
              {config.invitation.traditionalShloka}
            </p>

            <div className="mt-1 h-[1px] w-32 sm:w-48 bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
          </div>
        </header>

        {/* CENTERPIECE: Elegant Royal Medallion with Couple Names */}
        <div className="relative z-40 my-auto px-4 flex flex-col items-center text-center pointer-events-none">
          <AnimatePresence>
            {!isOpening && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.6 }}
                className="pointer-events-auto flex flex-col items-center max-w-sm sm:max-w-md w-full"
              >
                {/* Royal Monogram Seal */}
                <div className="relative mb-3 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border-2 border-gold-300 bg-gradient-to-br from-[#2D060F]/95 via-[#1E0308]/95 to-[#100204]/95 shadow-2xl shadow-black/80 backdrop-blur-md">
                  <div className="absolute inset-1 rounded-full border border-dashed border-gold-400/40 pointer-events-none" />
                  <span className="font-royal text-xl sm:text-2xl font-bold tracking-widest text-gold-300">
                    {lang === "hi" ? "म & हि" : "M & H"}
                  </span>
                </div>

                {/* Subtitle */}
                <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.25em] uppercase text-gold-300/90 block drop-shadow-sm">
                  {config.ui.togetherFamilies}
                </span>

                {/* Couple Names in Grand Royal Typography */}
                <h1 className="mt-1 font-royal text-3xl sm:text-4xl font-extrabold tracking-wide text-ivory-100 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                  {config.bride.firstName}
                  <span className="mx-2 font-serif text-2xl sm:text-3xl text-gold-400 italic font-normal">
                    {lang === "hi" ? "संग" : "&"}
                  </span>
                  {config.groom.firstName}
                </h1>

                <span className="text-xs sm:text-sm font-serif font-bold text-gold-300/90 tracking-widest uppercase mt-0.5">
                  {lang === "hi" ? "कुमावत" : "Kumawat"}
                </span>

                {/* Date & Location Pill */}
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-[#1D040A]/85 px-4 py-1.5 backdrop-blur-md shadow-md">
                  <span className="text-gold-400 text-xs">✦</span>
                  <span className="font-sans text-[11px] sm:text-xs font-medium text-gold-100">
                    {config.wedding.displayDate}
                  </span>
                  <span className="text-gold-400 text-xs">✦</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* BOTTOM SECTION: Mobile-Optimized Big Thumb Button & Skip Option */}
        <footer className="relative z-40 pb-safe pb-8 sm:pb-12 px-5 flex flex-col items-center text-center pointer-events-auto">
          {!isOpening ? (
            <div className="w-full max-w-xs sm:max-w-sm flex flex-col items-center gap-3">
              {/* PRIMARY TOUCH BUTTON */}
              <button
                type="button"
                onClick={handleEnterWorld}
                className="group relative w-full flex items-center justify-center gap-2.5 overflow-hidden rounded-full border-2 border-gold-300 bg-gradient-to-r from-gold-500 via-amber-400 to-amber-600 py-4 px-6 text-xs sm:text-sm font-sans font-extrabold tracking-[0.15em] uppercase text-[#1B0307] shadow-2xl shadow-gold-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.97]"
              >
                <IconSparkles className="h-4 w-4 text-[#1B0307] animate-spin" />
                <span>{config.ui.enterPalace}</span>
                <IconChevronRight className="h-4 w-4 text-[#1B0307] transition-transform group-hover:translate-x-1" />
              </button>

              {/* Instant Skip Link */}
              <button
                type="button"
                onClick={onInstantSkip}
                className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-gold-300/70 hover:text-gold-200 transition-colors py-1"
              >
                <IconEye className="h-3.5 w-3.5" />
                <span>{config.ui.skipIntro}</span>
              </button>
            </div>
          ) : (
            <div className="py-6 flex items-center gap-2 text-gold-300 text-xs sm:text-sm font-serif tracking-widest uppercase animate-pulse">
              <IconSparkles className="h-4 w-4 text-gold-400" />
              <span>{config.ui.enteringPalace}</span>
            </div>
          )}
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
