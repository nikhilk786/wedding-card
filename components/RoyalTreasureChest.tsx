"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useLanguage } from "./LanguageContext";
import { royalSound } from "@/lib/sound";
import { RoyalInvitationScroll } from "./RoyalInvitationScroll";
import { LotusMotif } from "./RoyalMotifs";
import { IconKey, IconSparkles, IconLock, IconLockOpen, IconRefresh } from "@tabler/icons-react";

interface RoyalTreasureChestProps {
  onScrollToDetails: () => void;
}

export function RoyalTreasureChest({ onScrollToDetails }: RoyalTreasureChestProps) {
  const [chestState, setChestState] = useState<"locked" | "unlocking" | "opened">("locked");
  const { config } = useLanguage();

  const handleUnlockChest = () => {
    if (chestState !== "locked") return;
    setChestState("unlocking");

    // Play metallic lock rotation click
    royalSound.playLockClick();

    // After lock rotation, open the chest and unleash golden divine light
    setTimeout(() => {
      setChestState("opened");
      royalSound.playGoldenChimes();

      // Launch dazzling golden sparkles
      try {
        confetti({
          particleCount: 65,
          spread: 75,
          origin: { y: 0.65 },
          colors: ["#C5A059", "#DFBA6B", "#F59E0B", "#FDF4DC", "#80162A"],
          disableForReducedMotion: true,
        });
      } catch {}
    }, 900);
  };

  const handleReset = () => {
    setChestState("locked");
  };

  return (
    <section
      id="treasure-vault"
      className="relative min-h-screen py-16 sm:py-24 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#100306] via-[#1D050B] to-[#FAF7F2] text-center px-4 sm:px-6"
    >
      {/* Background Volumetric Glow & Rays */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Radial Gold Flare from Vault Center */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-1000 ${
            chestState === "opened"
              ? "h-[750px] w-[750px] bg-gradient-to-tr from-amber-500/25 via-gold-400/20 to-transparent blur-3xl opacity-100 scale-125"
              : "h-[450px] w-[450px] bg-amber-600/10 blur-3xl opacity-50 scale-100"
          }`}
        />

        {/* Vertical Heavenly Light Beam when chest is opened */}
        {chestState === "opened" && (
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-72 sm:w-96 h-full bg-gradient-to-b from-gold-300/20 via-gold-400/15 to-transparent blur-2xl animate-pulse pointer-events-none"
            style={{ animationDuration: "3s" }}
          />
        )}
      </div>

      {/* Vault Section Title Header */}
      <div className="relative z-20 mb-8 sm:mb-12 max-w-xl mx-auto space-y-2">
        <div className="flex justify-center text-gold-400">
          <LotusMotif className="h-8 w-8 drop-shadow-[0_0_10px_rgba(223,186,107,0.6)]" />
        </div>
        <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.3em] uppercase text-gold-400 block">
          {config.ui.vaultTagline}
        </span>
        <h2 className="font-royal text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ivory-100 drop-shadow-md">
          {config.ui.vaultTitle}
        </h2>
        <p className="font-serif italic text-xs sm:text-sm text-gold-200/80 max-w-md mx-auto">
          {chestState === "opened"
            ? config.ui.vaultSubtitleOpened
            : config.ui.vaultSubtitleLocked}
        </p>
      </div>

      {/* 3D ROYAL TREASURE CHEST CONTAINER */}
      <div
        className="relative z-20 w-full max-w-2xl mx-auto flex flex-col items-center justify-center"
        style={{ perspective: "1400px" }}
      >
        {/* THE ANTIQUE CHEST (SANDHOOK / TIJORI) */}
        <div className="relative w-full max-w-lg rounded-3xl overflow-visible px-2 sm:px-0">
          {/* Real Chest Photograph Layer */}
          <div className="relative h-56 sm:h-80 w-full rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-2xl shadow-black/90 bg-[#160408]">
            <img
              src="/images/antique-treasure-chest.jpg"
              alt="Royal Rajasthani Treasure Chest"
              className={`h-full w-full object-cover transition-all duration-1000 ${
                chestState === "opened" ? "brightness-95 contrast-105" : "brightness-75 contrast-110"
              }`}
            />

            {/* Glowing Golden Seam when unlocking */}
            <div
              className={`absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold-300 to-transparent shadow-[0_0_20px_#F59E0B] transition-opacity duration-700 pointer-events-none ${
                chestState === "unlocking" ? "opacity-100 animate-pulse" : "opacity-0"
              }`}
            />

            {/* Radiant Beam bursting upwards from interior when opened */}
            {chestState === "opened" && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-gradient-to-t from-gold-400/40 via-amber-300/20 to-transparent pointer-events-none origin-bottom"
              />
            )}

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/70 pointer-events-none" />
          </div>

          {/* INTERACTIVE ROTATING BRASS LOCK MECHANISM OVERLAY */}
          {chestState !== "opened" && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center w-full px-4"
            >
              {/* Central Antique Medallion Plate */}
              <div
                className={`relative flex h-20 w-20 sm:h-28 sm:w-28 items-center justify-center rounded-full border-4 border-gold-300 bg-gradient-to-br from-gold-200 via-amber-600 to-amber-950 p-2 shadow-2xl shadow-black/90 transition-transform duration-700 ${
                  chestState === "unlocking" ? "rotate-90 scale-110 ring-6 sm:ring-8 ring-gold-400/50" : "hover:scale-105"
                }`}
              >
                {/* Outer Engraved Floral Ring */}
                <div className="absolute inset-1 rounded-full border-2 border-dashed border-gold-200/60 pointer-events-none" />

                {/* Keyhole Core */}
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#1A0307] border-2 border-gold-400/80 shadow-inner">
                  {chestState === "unlocking" ? (
                    <IconLockOpen className="h-5 w-5 sm:h-6 sm:w-6 text-gold-300 animate-spin" />
                  ) : (
                    <IconLock className="h-5 w-5 sm:h-6 sm:w-6 text-gold-300" />
                  )}
                </div>
              </div>

              {/* UNLOCK BUTTON */}
              <button
                type="button"
                onClick={handleUnlockChest}
                disabled={chestState === "unlocking"}
                className="mt-4 sm:mt-6 group inline-flex items-center justify-center gap-2 rounded-full border-2 border-gold-300 bg-gradient-to-r from-gold-500 via-amber-500 to-amber-700 px-6 sm:px-7 py-3 text-xs sm:text-sm font-sans font-extrabold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#1C0408] shadow-2xl shadow-gold-500/30 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-75 max-w-xs"
              >
                <IconKey className="h-4 w-4 text-[#1C0408] group-hover:rotate-45 transition-transform shrink-0" />
                <span className="truncate">
                  {chestState === "unlocking" ? config.ui.unlockingChest : config.ui.unlockChest}
                </span>
                <IconSparkles className="h-4 w-4 animate-spin text-[#1C0408] shrink-0" />
              </button>
            </motion.div>
          )}

          {/* Reset / Relock Chest Option when opened */}
          {chestState === "opened" && (
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#20050B]/80 border border-gold-500/40 px-3.5 py-1 text-[11px] font-sans text-gold-300 hover:text-gold-100 hover:bg-[#340812] transition-colors shadow-md"
              >
                <IconRefresh className="h-3 w-3" />
                <span>{config.ui.relockChest}</span>
              </button>
            </div>
          )}
        </div>

        {/* SCENE 4: RISING ROYAL INVITATION SCROLL */}
        <AnimatePresence>
          {chestState === "opened" && (
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 w-full z-40"
            >
              <RoyalInvitationScroll onScrollToDetails={onScrollToDetails} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
