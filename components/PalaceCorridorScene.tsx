"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { LotusMotif, PalaceArchSilhouette } from "./RoyalMotifs";
import { IconChevronDown, IconLock, IconLockOpen } from "@tabler/icons-react";

interface PalaceCorridorSceneProps {
  onProceedToVault: () => void;
  isVaultUnlocked?: boolean;
}

export function PalaceCorridorScene({
  onProceedToVault,
  isVaultUnlocked = false,
}: PalaceCorridorSceneProps) {
  const { config, lang } = useLanguage();

  return (
    <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden py-12 sm:py-20 px-4 sm:px-6">
      {/* Background: Grand Royal Palace Courtyard with Subtle Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed scale-105"
        style={{
          backgroundImage: "url('/images/palace-courtyard.jpg')",
          filter: "brightness(0.65) contrast(1.1)",
        }}
      >
        {/* Layered Vignette and Candlelight Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#100306]/85 via-[#100306]/40 to-[#100306]/95" />
        <div className="absolute inset-0 bg-radial-gradient from-gold-500/10 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Floating Golden Dust Particles */}
      <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gold-300/40 blur-[0.5px] animate-pulse"
            style={{
              top: `${(i * 19) % 92}%`,
              left: `${(i * 29) % 95}%`,
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              boxShadow: "0 0 10px rgba(245, 158, 11, 0.7)",
              animationDuration: `${4 + (i % 4)}s`,
              animationDelay: `${(i * 0.5) % 4}s`,
            }}
          />
        ))}
      </div>

      {/* Central Regal Welcome Card (Mobile-First Proportions) */}
      <div className="relative z-20 mx-auto w-full max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative rounded-3xl border border-gold-400/40 bg-[#1F040A]/90 p-6 sm:p-12 backdrop-blur-md shadow-2xl shadow-black/80"
          style={{
            boxShadow:
              "0 20px 50px -10px rgba(0,0,0,0.9), 0 0 30px rgba(197, 160, 89, 0.15) inset",
          }}
        >
          {/* Top Decorative Lotus */}
          <div className="flex justify-center mb-2">
            <LotusMotif className="h-8 w-8 sm:h-10 sm:w-10 text-gold-400 drop-shadow-[0_2px_8px_rgba(223,186,107,0.5)]" />
          </div>

          <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.25em] uppercase text-gold-300 block">
            {config.ui.welcomePrefix}
          </span>

          {/* Couple Names */}
          <div className="my-4 sm:my-5">
            <h1 className="font-royal text-3xl sm:text-5xl font-extrabold tracking-wide text-ivory-100 drop-shadow-lg leading-tight">
              {config.bride.firstName}
              <span className="mx-2 sm:mx-3 font-serif text-2xl sm:text-4xl text-gold-400 italic font-normal">
                {lang === "hi" ? "संग" : "&"}
              </span>
              {config.groom.firstName}
            </h1>
            <p className="mt-1 font-serif text-xs sm:text-sm font-semibold tracking-widest uppercase text-gold-300">
              {lang === "hi" ? "कुमावत" : "Kumawat"}
            </p>
            <p className="mt-2 font-serif text-xs sm:text-sm italic text-gold-200/80 tracking-wide px-2">
              &ldquo;{config.wedding.tagline}&rdquo;
            </p>
          </div>

          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-gold-400/70 to-transparent mx-auto my-4" />

          {/* Palace Arch Silhouette */}
          <div className="max-w-xs sm:max-w-sm mx-auto my-2 opacity-50">
            <PalaceArchSilhouette className="w-full text-gold-400" />
          </div>

          {/* Ceremony Date & Location */}
          <div className="space-y-1 text-xs sm:text-sm font-sans text-gold-100">
            <p className="font-semibold tracking-wider text-gold-300">
              {config.wedding.displayDate}
            </p>
            <p className="text-gold-200/75 text-[11px] sm:text-xs">
              {config.venue.name} • {config.venue.city}
            </p>
          </div>

          {/* Mystery Teaser & CTA to Treasure Vault */}
          <div className="mt-6 pt-4 border-t border-gold-500/20">
            <p className="font-serif italic text-xs text-gold-200/80 max-w-sm mx-auto mb-4">
              &ldquo;{config.ui.vaultSubtitleLocked}&rdquo;
            </p>

            <button
              type="button"
              onClick={onProceedToVault}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gold-300 bg-gradient-to-r from-maroon-700 via-maroon-800 to-maroon-900 px-6 py-3.5 text-xs sm:text-sm font-sans font-bold tracking-[0.15em] uppercase text-ivory-100 shadow-xl shadow-black/50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {isVaultUnlocked ? (
                <IconLockOpen className="h-4 w-4 text-gold-300 shrink-0" />
              ) : (
                <IconLock className="h-4 w-4 text-gold-400 group-hover:rotate-12 transition-transform shrink-0" />
              )}
              <span>
                {isVaultUnlocked
                  ? lang === "hi"
                    ? "शाही तिजोरी दर्शन करें"
                    : "ENTER TREASURE VAULT"
                  : config.ui.approachVault}
              </span>
              <IconChevronDown className="h-4 w-4 animate-bounce text-gold-400 shrink-0" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
