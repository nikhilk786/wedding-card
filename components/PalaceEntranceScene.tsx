"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { royalSound } from "@/lib/sound";
import { GaneshaMotif, LotusMotif, PalaceArchSilhouette } from "./RoyalMotifs";
import { IconSparkles, IconEye, IconChevronRight } from "@tabler/icons-react";

interface PalaceEntranceSceneProps {
  onEnter: () => void;
  onInstantSkip: () => void;
  isOpen: boolean;
}

// 3D Brass Stud / Fort Spike (कील) crafted completely with pure CSS gradients
function BrassStud() {
  return (
    <div className="relative flex h-3 w-3 sm:h-3.5 sm:w-3.5 items-center justify-center rounded-full bg-gradient-to-br from-gold-200 via-amber-500 to-amber-950 p-[1px] shadow-md shadow-black/90">
      <div className="h-full w-full rounded-full bg-gradient-to-tr from-amber-800 via-gold-400 to-amber-200" />
      <div className="absolute h-1 w-1 rounded-full bg-gold-100 top-0.5 left-0.5 opacity-80" />
    </div>
  );
}

// Antique Brass Door Ring Handle (कड़ी / Knocker) positioned comfortably in lower section
function BrassHandle({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`absolute top-[64%] -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none ${
        side === "left" ? "right-2.5 sm:right-5" : "left-2.5 sm:left-5"
      }`}
    >
      {/* Ornate Brass Floral Medallion Backplate */}
      <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 border-gold-400/90 bg-gradient-to-br from-gold-200 via-amber-600 to-amber-950 p-1 shadow-2xl shadow-black/90">
        <div className="absolute inset-1 rounded-full border border-dashed border-gold-200/50" />
        {/* Core Boss */}
        <div className="flex h-5 w-5 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-gradient-to-tr from-amber-900 via-gold-400 to-amber-100 border border-gold-300 shadow-inner">
          <div className="h-1.5 w-1.5 rounded-full bg-[#1A0307]" />
        </div>
      </div>

      {/* Heavy Hanging Brass Drop Ring (कड़ी) */}
      <div className="-mt-2.5 sm:-mt-3.5 flex h-9 w-7 sm:h-12 sm:w-10 items-center justify-center rounded-b-full border-4 sm:border-[5px] border-gold-400 bg-transparent shadow-xl shadow-black/80">
        <div className="h-full w-full rounded-b-full border border-gold-200/40" />
      </div>
    </div>
  );
}

// Single Royal Palace Door Leaf (Left or Right)
function DoorLeaf({
  side,
  isOpening,
}: {
  side: "left" | "right";
  isOpening: boolean;
}) {
  const isLeft = side === "left";

  return (
    <motion.div
      animate={
        isOpening
          ? {
              rotateY: isLeft ? -115 : 115,
              x: isLeft ? "-8%" : "8%",
              opacity: 0.05,
            }
          : { rotateY: 0, x: 0, opacity: 1 }
      }
      transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
      className={`relative h-full w-1/2 overflow-hidden select-none ${
        isLeft
          ? "origin-left border-r border-[#4A0A14] bg-gradient-to-r from-[#28060D] via-[#1E0408] to-[#120104]"
          : "origin-right border-l border-[#4A0A14] bg-gradient-to-l from-[#28060D] via-[#1E0408] to-[#120104]"
      }`}
      style={{
        transformStyle: "preserve-3d",
        boxShadow: isOpening
          ? "none"
          : isLeft
          ? "inset -25px 0 45px rgba(0,0,0,0.9), 10px 0 25px rgba(0,0,0,0.8)"
          : "inset 25px 0 45px rgba(0,0,0,0.9), -10px 0 25px rgba(0,0,0,0.8)",
      }}
    >
      {/* Wood Grain Simulation using Subtle Repeating Linear Gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 24px)",
        }}
      />

      {/* Outer Door Frame Filigree Trim */}
      <div className="absolute inset-2 sm:inset-3 border-2 border-gold-600/30 rounded-lg pointer-events-none" />
      <div className="absolute inset-3.5 sm:inset-5 border border-dashed border-gold-500/20 rounded pointer-events-none" />

      {/* Stacked Traditional Architectural Panels */}
      <div className="absolute inset-4 sm:inset-6 flex flex-col justify-between py-2 sm:py-4 pointer-events-none">
        {/* Top Arch Panel */}
        <div className="relative h-[28%] w-full rounded-t-2xl border border-gold-500/30 bg-[#160206]/70 p-2 sm:p-4 flex flex-col items-center justify-center shadow-inner">
          <div className="absolute top-2 left-2">
            <BrassStud />
          </div>
          <div className="absolute top-2 right-2">
            <BrassStud />
          </div>
          {/* Rajasthani Jharokha Arch Outline */}
          <div className="w-full max-w-[120px] sm:max-w-[160px] opacity-35 text-gold-400">
            <PalaceArchSilhouette className="w-full text-gold-400" />
          </div>
          <LotusMotif className="h-6 w-6 sm:h-8 sm:w-8 text-gold-400/50 mt-1" />
        </div>

        {/* Middle Panel (Carved Medallion Housing) */}
        <div className="relative h-[38%] w-full rounded-xl border border-gold-500/30 bg-[#190308]/80 p-3 sm:p-6 flex items-center justify-center shadow-inner">
          <div className="absolute top-2 left-2">
            <BrassStud />
          </div>
          <div className="absolute top-2 right-2">
            <BrassStud />
          </div>
          <div className="absolute bottom-2 left-2">
            <BrassStud />
          </div>
          <div className="absolute bottom-2 right-2">
            <BrassStud />
          </div>

          {/* Central Carved Floral Circle */}
          <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-full border border-gold-500/25 flex items-center justify-center">
            <div className="h-16 w-16 sm:h-24 sm:w-24 rounded-full border border-dashed border-gold-400/20" />
          </div>
        </div>

        {/* Bottom Panel (Lattice Inlay Motif) */}
        <div className="relative h-[28%] w-full rounded-b-2xl border border-gold-500/30 bg-[#160206]/70 p-2 sm:p-4 flex flex-col items-center justify-center shadow-inner">
          <div className="absolute bottom-2 left-2">
            <BrassStud />
          </div>
          <div className="absolute bottom-2 right-2">
            <BrassStud />
          </div>
          <div className="w-full max-w-[120px] sm:max-w-[160px] opacity-30 text-gold-400 rotate-180">
            <PalaceArchSilhouette className="w-full text-gold-400" />
          </div>
          <span className="text-[10px] text-gold-500/35 tracking-[0.3em] font-serif uppercase mt-1">
            ❖ ❖ ❖
          </span>
        </div>
      </div>

      {/* Row of Brass Fort Studs on the leading vertical edge */}
      <div
        className={`absolute top-0 bottom-0 z-20 flex flex-col justify-around py-8 pointer-events-none ${
          isLeft ? "right-2 sm:right-3.5" : "left-2 sm:left-3.5"
        }`}
      >
        {Array.from({ length: 8 }).map((_, idx) => (
          <BrassStud key={idx} />
        ))}
      </div>

      {/* Brass Ring Knocker Handle */}
      <BrassHandle side={side} />

      {/* Layered Vignette & Lighting Shadows */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isLeft
            ? "bg-gradient-to-r from-black/40 via-transparent to-black/30"
            : "bg-gradient-to-l from-black/40 via-transparent to-black/30"
        }`}
      />
    </motion.div>
  );
}

export function PalaceEntranceScene({
  onEnter,
  onInstantSkip,
  isOpen,
}: PalaceEntranceSceneProps) {
  const [isOpening, setIsOpening] = useState(false);
  const { config, lang, guestName } = useLanguage();

  const handleEnterWorld = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Immediately reset viewport to very top
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      window.dispatchEvent(new CustomEvent("start-royal-music"));
    }

    // Play authentic royal bell / gong chime on entrance
    royalSound.playTempleGong();

    // Transition smoothly into Scene 2
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
      onEnter();
    }, 1700);
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex flex-col justify-between overflow-hidden bg-[#0A0103] select-none h-[100dvh] w-full"
        style={{ perspective: "1400px" }}
      >
        {/* BACKGROUND REVEALED BEHIND DOORS: Pure CSS / SVG Lighting */}
        <div
          className="absolute inset-0 transition-all duration-1000 pointer-events-none flex items-center justify-center overflow-hidden"
          style={{
            transform: isOpening ? "scale(1.05)" : "scale(1)",
          }}
        >
          {/* Deep Royal Night Courtyard Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#120205] via-[#2A050D] to-[#0D0104]" />

          {/* Volumetric Candlelight & Heavenly Golden Radiance */}
          <div className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-gradient-to-tr from-amber-600/30 via-gold-500/20 to-transparent blur-3xl opacity-80" />

          {/* Top Palace Archway Silhouette */}
          <div className="absolute top-0 left-0 right-0 opacity-30 text-gold-500 max-w-4xl mx-auto">
            <PalaceArchSilhouette className="w-full text-gold-400" />
          </div>

          {/* Vignette Shadowing */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0103]/80 via-transparent to-[#0A0103]/90" />
        </div>

        {/* Floating Golden Dust Particles */}
        <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gold-300/50 blur-[0.5px] animate-pulse"
              style={{
                top: `${(i * 17) % 94}%`,
                left: `${(i * 23) % 96}%`,
                width: `${(i % 3) + 2}px`,
                height: `${(i % 3) + 2}px`,
                boxShadow: "0 0 10px rgba(223, 186, 107, 0.9)",
                animationDuration: `${3 + (i % 4)}s`,
                animationDelay: `${(i * 0.4) % 3}s`,
              }}
            />
          ))}
        </div>

        {/* 100% PURE CSS / SVG DUAL ROYAL PALACE GATES */}
        <div
          className="absolute inset-0 z-10 flex w-full h-full overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Left Palace Door */}
          <DoorLeaf side="left" isOpening={isOpening} />

          {/* Right Palace Door */}
          <DoorLeaf side="right" isOpening={isOpening} />

          {/* Center Seam Golden Light (Kept on lower z-index so it doesn't cross over the center plaque) */}
          <div
            className={`pointer-events-none absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-gradient-to-b from-amber-600 via-gold-300 to-amber-900 shadow-[0_0_18px_rgba(245,158,11,0.9)] transition-opacity duration-500 z-20 ${
              isOpening ? "opacity-0" : "opacity-95"
            }`}
          />
        </div>

        {/* TOP HEADER: Sacred Shloka & Lord Ganesha Emblem */}
        <header className="relative z-40 pt-safe pt-3 sm:pt-6 px-4 text-center pointer-events-none">
          <div className="inline-flex flex-col items-center">
            {/* Ganesha Crest */}
            <div className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-gold-400/70 bg-[#1D040A]/95 shadow-xl shadow-black/90 backdrop-blur-md mb-1.5">
              <GaneshaMotif className="h-6 w-6 sm:h-7 sm:w-7 text-gold-400 drop-shadow-[0_1px_6px_rgba(223,186,107,0.7)]" />
            </div>

            {/* Sacred Shloka Pill with opaque dark backing for high contrast */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-[#1A0308]/90 px-3.5 sm:px-5 py-1 backdrop-blur-md shadow-lg">
              <p className="font-serif text-[11px] sm:text-xs font-semibold tracking-wider text-gold-200">
                {config.invitation.traditionalShloka}
              </p>
            </div>
          </div>
        </header>

        {/* CENTERPIECE: Dedicated High-Contrast Royal Name Plaque (शाही नामपट्टिका) */}
        {/* Solves all overlay/contrast issues by seating names inside an authentic royal cartouche */}
        <div className="relative z-40 my-auto px-4 flex flex-col items-center text-center pointer-events-none">
          <AnimatePresence>
            {!isOpening && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.6 }}
                className="pointer-events-auto relative w-full max-w-[340px] sm:max-w-md flex flex-col items-center"
              >
                {/* Main Royal Plaque (Himani & Manoj Box) */}
                <div className="relative w-full rounded-3xl border-2 border-gold-400/90 bg-gradient-to-b from-[#2E050D] via-[#1B0308] to-[#100104] p-5 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_25px_rgba(223,186,107,0.2)] backdrop-blur-md flex flex-col items-center">
                  {/* Ornate Inner Trim */}
                  <div className="absolute inset-1.5 sm:inset-2 rounded-2xl border border-dashed border-gold-400/35 pointer-events-none" />

                  {/* 4 Corner Ornamental Accents */}
                  <span className="absolute top-2.5 left-3 text-gold-400/70 text-xs pointer-events-none">❖</span>
                  <span className="absolute top-2.5 right-3 text-gold-400/70 text-xs pointer-events-none">❖</span>
                  <span className="absolute bottom-2.5 left-3 text-gold-400/70 text-xs pointer-events-none">❖</span>
                  <span className="absolute bottom-2.5 right-3 text-gold-400/70 text-xs pointer-events-none">❖</span>

                  {/* Royal Monogram Emblem */}
                  <div className="relative mb-2.5 flex h-16 w-16 sm:h-18 sm:w-18 shrink-0 items-center justify-center rounded-full border-2 border-gold-300 bg-gradient-to-br from-[#3D0813] via-[#24040B] to-[#120104] shadow-lg shadow-black/80 px-1">
                    <div className="absolute inset-1 rounded-full border border-dashed border-gold-400/50 pointer-events-none" />
                    <div className="flex items-center justify-center gap-1 whitespace-nowrap text-gold-300 font-royal font-bold text-sm sm:text-base leading-none select-none">
                      <span>{lang === "hi" ? "हि" : "H"}</span>
                      <span className="font-serif italic text-xs sm:text-sm text-gold-400/90 font-normal">
                        &
                      </span>
                      <span>{lang === "hi" ? "म" : "M"}</span>
                    </div>
                  </div>

                  {/* Subtitle / Invitation Prefix */}
                  <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.25em] uppercase text-gold-300 block">
                    {config.ui.togetherFamilies}
                  </span>

                  {/* Main Bride & Groom Names in Crisp High-Contrast Typography */}
                  <div className="my-1.5 py-1">
                    <h1 className="font-royal text-2xl sm:text-4xl font-extrabold tracking-wide text-[#FFFDF8] drop-shadow-md leading-tight">
                      {config.bride.firstName}
                      <span className="mx-2 sm:mx-2.5 font-serif text-xl sm:text-3xl text-gold-400 italic font-normal">
                        {lang === "hi" ? "संग" : "&"}
                      </span>
                      {config.groom.firstName}
                    </h1>

                    <p className="mt-1 font-serif text-xs sm:text-sm font-bold text-gold-300 tracking-[0.25em] uppercase">
                      {lang === "hi" ? "कुमावत" : "Kumawat"}
                    </p>
                  </div>

                  {/* Wedding Date & Auspicious Muhurat Pill */}
                  <div className="mt-2.5 inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-[#1D040A]/95 px-4 py-1.5 shadow-md">
                    <span className="text-gold-400 text-xs">✦</span>
                    <span className="font-sans text-[11px] sm:text-xs font-semibold text-gold-100 tracking-wider">
                      {config.wedding.displayDate}
                    </span>
                    <span className="text-gold-400 text-xs">✦</span>
                  </div>
                </div>

                {/* Cordially Invited / Guest Box - Set outside, slightly below, on the left side */}
                {guestName && (
                  <motion.div
                    initial={{ opacity: 0, x: -12, y: 6 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-full flex justify-start mt-2.5 sm:mt-3 px-1"
                  >
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/90 bg-gradient-to-r from-[#2A050E]/95 via-[#1D0308]/95 to-[#2A050E]/95 px-3.5 sm:px-4 py-1.5 shadow-xl shadow-black/90 backdrop-blur-md max-w-full ring-1 ring-gold-400/30">
                      <span className="text-gold-400 text-xs shrink-0 animate-pulse">⚜️</span>
                      <span className="font-serif text-xs sm:text-sm font-bold text-gold-100 tracking-wide truncate">
                        {lang === "hi" ? `सादर सपरिवार आमंत्रित: ${guestName}` : `Cordially Invited: ${guestName}`}
                      </span>
                      <span className="text-gold-400 text-xs shrink-0">⚜️</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* BOTTOM SECTION: Mobile-Optimized Big Thumb Button & Skip Option */}
        <footer className="relative z-40 pb-safe pb-6 sm:pb-10 px-5 flex flex-col items-center text-center pointer-events-auto">
          {!isOpening ? (
            <div className="w-full max-w-xs sm:max-w-sm flex flex-col items-center gap-2.5">
              {/* PRIMARY TOUCH BUTTON */}
              <button
                type="button"
                onClick={handleEnterWorld}
                className="group relative w-full flex items-center justify-center gap-2.5 overflow-hidden rounded-full border-2 border-gold-300 bg-gradient-to-r from-gold-500 via-amber-400 to-amber-600 py-3.5 sm:py-4 px-6 text-xs sm:text-sm font-sans font-extrabold tracking-[0.15em] uppercase text-[#1B0307] shadow-2xl shadow-gold-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.97]"
              >
                <IconSparkles className="h-4 w-4 text-[#1B0307] animate-spin" />
                <span>{config.ui.enterPalace}</span>
                <IconChevronRight className="h-4 w-4 text-[#1B0307] transition-transform group-hover:translate-x-1" />
              </button>

              {/* Instant Skip Link */}
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new CustomEvent("start-royal-music"));
                  }
                  onInstantSkip();
                }}
                className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-gold-300/70 hover:text-gold-200 transition-colors py-1"
              >
                <IconEye className="h-3.5 w-3.5" />
                <span>{config.ui.skipIntro}</span>
              </button>
            </div>
          ) : (
            <div className="py-5 flex items-center gap-2 text-gold-300 text-xs sm:text-sm font-serif tracking-widest uppercase animate-pulse">
              <IconSparkles className="h-4 w-4 text-gold-400" />
              <span>{config.ui.enteringPalace}</span>
            </div>
          )}
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}