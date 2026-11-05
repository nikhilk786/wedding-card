"use client";

import React, { useState, useEffect } from "react";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { PalaceEntranceScene } from "./PalaceEntranceScene";
import { PalaceCorridorScene } from "./PalaceCorridorScene";
import { RoyalTreasureChest } from "./RoyalTreasureChest";
import { FloatingPetals } from "./FloatingPetals";
import { AudioControl } from "./AudioControl";
import { CountdownSection } from "./CountdownSection";
import { CoupleSection } from "./CoupleSection";
import { EventsTimeline } from "./EventsTimeline";
import { VenueSection } from "./VenueSection";
import { FamilyBlessings } from "./FamilyBlessings";
import { RsvpAndShare } from "./RsvpAndShare";
import { LotusMotif } from "./RoyalMotifs";
import { royalSound } from "@/lib/sound";
import { IconArrowLeft } from "@tabler/icons-react";

function ExperienceContent() {
  const { config } = useLanguage();
  const [hasEnteredPalace, setHasEnteredPalace] = useState(false);
  const [hasUnlockedVault, setHasUnlockedVault] = useState(false);
  const [activeView, setActiveView] = useState<"invitation" | "ceremonies">("invitation");

  // Sync browser history state for mobile gestures and browser back button
  useEffect(() => {
    const handlePopState = () => {
      if (typeof window !== "undefined" && window.location.hash === "#ceremonies") {
        setActiveView("ceremonies");
      } else {
        setActiveView("invitation");
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleEnterPalace = () => {
    setHasEnteredPalace(true);
  };

  const handleInstantSkip = () => {
    setHasEnteredPalace(true);
    setHasUnlockedVault(true);
  };

  // Button 1: User explicitly clicks "शाही तिजोरी की ओर बढ़ें"
  const handleProceedToVault = () => {
    royalSound.playTempleGong();
    if (!hasUnlockedVault) {
      setHasUnlockedVault(true);
    }
    setTimeout(() => {
      const vaultEl = document.getElementById("treasure-vault");
      if (vaultEl) {
        vaultEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 120);
  };

  // Button 2: User clicks "समस्त मांगलिक कार्यक्रम देखें" from invitation scroll
  const handleOpenCeremonies = () => {
    royalSound.playGoldenChimes();
    setActiveView("ceremonies");
    try {
      window.history.pushState({ view: "ceremonies" }, "", "#ceremonies");
    } catch {}
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Button 3: User clicks "वापस लग्न पत्रिका पर जाएं" to return back
  const handleBackToInvitation = () => {
    royalSound.playTempleGong();
    setActiveView("invitation");
    if (typeof window !== "undefined" && window.location.hash === "#ceremonies") {
      try {
        window.history.pushState({ view: "invitation" }, "", window.location.pathname);
      } catch {}
    }
    setTimeout(() => {
      const scrollEl =
        document.getElementById("invitation-scroll") || document.getElementById("treasure-vault");
      if (scrollEl) {
        scrollEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 120);
  };

  return (
    <div className="relative min-h-screen bg-[#100306] text-ivory-100 overflow-x-hidden selection:bg-gold-500/30 selection:text-gold-200">
      {/* 🌐 TOP LANGUAGE TOGGLE BUTTON (English | हिंदी) */}
      <LanguageToggle />

      {/* Floating Golden Rose & Marigold Petals */}
      <FloatingPetals />

      {/* Persistent Audio Ambience Control */}
      <AudioControl />

      {/* DEDICATED CEREMONIES VIEW (Redirected on clicking "समस्त मांगलिक कार्यक्रम") */}
      {activeView === "ceremonies" ? (
        <div className="relative z-30 min-h-screen bg-ivory-100 text-[#2B181B] transition-opacity duration-500">
          {/* Sticky Royal Navigation Bar */}
          <header className="sticky top-0 z-40 bg-[#1D040A]/95 border-b border-gold-500/40 backdrop-blur-md px-3 sm:px-6 py-2.5 shadow-xl flex items-center justify-between">
            <button
              type="button"
              onClick={handleBackToInvitation}
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-gold-400 bg-gradient-to-r from-maroon-700 via-maroon-800 to-maroon-900 px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-sans font-bold tracking-wider uppercase text-ivory-100 shadow-md shadow-black/50 hover:scale-105 active:scale-95 transition-all"
            >
              <IconArrowLeft className="h-4 w-4 text-gold-300 shrink-0" />
              <span>{config.ui.backToScroll}</span>
            </button>

            <div className="hidden md:flex items-center gap-2 text-xs font-royal text-gold-300 font-semibold tracking-wider">
              <LotusMotif className="h-4 w-4 text-gold-400" />
              <span>{config.ui.ceremoniesPageTitle}</span>
            </div>

            {/* Space buffer so right side doesn't overlap LanguageToggle */}
            <div className="w-28 sm:w-36 pointer-events-none" aria-hidden="true" />
          </header>

          <main className="pt-4 sm:pt-8 px-3 sm:px-6 max-w-5xl mx-auto">
            {/* Live Countdown Timer with standard digits (1, 2, 3...) */}
            <CountdownSection />

            {/* Bride & Groom Couple Introduction */}
            <CoupleSection />

            {/* Auspicious Events Timeline (Haldi, Chak Bhat, Vivah, Reception) */}
            <EventsTimeline />

            {/* Venue & Google Maps Navigation */}
            <VenueSection />

            {/* Traditional Family Blessings */}
            <FamilyBlessings />

            {/* WhatsApp RSVP & Web Share */}
            <RsvpAndShare />

            {/* Prominent Bottom Return Button */}
            <div className="py-10 sm:py-14 text-center border-t border-gold-500/30 my-8">
              <button
                type="button"
                onClick={handleBackToInvitation}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-gold-400 bg-gradient-to-r from-maroon-800 via-maroon-900 to-[#2A050B] px-7 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm font-sans font-bold tracking-[0.15em] uppercase text-ivory-100 shadow-2xl shadow-maroon-950/40 hover:scale-105 active:scale-95 transition-all"
              >
                <IconArrowLeft className="h-5 w-5 text-gold-400 group-hover:-translate-x-1 transition-transform" />
                <span>{config.ui.backToMainInvitation}</span>
              </button>
            </div>
          </main>
        </div>
      ) : (
        /* MAIN STORYTELLING JOURNEY: Entrance -> Corridor -> Shahi Tijori & Scroll */
        <>
          {/* 1. SCENE 1: GRAND ROYAL PALACE ENTRANCE (3D DUAL DOORS) */}
          <PalaceEntranceScene
            isOpen={hasEnteredPalace}
            onEnter={handleEnterPalace}
            onInstantSkip={handleInstantSkip}
          />

          <main className="relative z-10">
            {/* 2. SCENE 2: ROYAL PALACE CORRIDOR REVEAL */}
            <PalaceCorridorScene
              onProceedToVault={handleProceedToVault}
              isVaultUnlocked={hasUnlockedVault}
            />

            {/* 3. SCENE 3 & 4: THE MYSTERIOUS ROYAL TREASURE CHEST & RISING INVITATION SCROLL */}
            {/* Strictly unlocked ONLY after guest clicks "शाही तिजोरी की ओर बढ़ें" */}
            {hasUnlockedVault && (
              <div className="transition-all duration-700">
                <RoyalTreasureChest onScrollToDetails={handleOpenCeremonies} />
              </div>
            )}
          </main>
        </>
      )}
    </div>
  );
}

export function CinematicWeddingExperience() {
  return (
    <LanguageProvider>
      <ExperienceContent />
    </LanguageProvider>
  );
}