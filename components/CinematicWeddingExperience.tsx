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
import { GuestLinkGeneratorModal } from "./GuestLinkGeneratorModal";
import { IconArrowLeft } from "@tabler/icons-react";

interface CinematicWeddingExperienceProps {
  isCreatorMode?: boolean;
}

function ExperienceContent({ initialCreatorMode = false }: { initialCreatorMode?: boolean }) {
  const { config, lang } = useLanguage();
  const [hasEnteredPalace, setHasEnteredPalace] = useState(false);
  const [hasUnlockedVault, setHasUnlockedVault] = useState(false);
  const [activeView, setActiveView] = useState<"invitation" | "ceremonies">("invitation");
  const [showLinkGenerator, setShowLinkGenerator] = useState(false);
  const [isCreator, setIsCreator] = useState(initialCreatorMode);

  // Check if current URL slug/route contains /nikhil786
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (
        initialCreatorMode ||
        path.includes("nikhil786") ||
        search.includes("nikhil786") ||
        hash.includes("nikhil786")
      ) {
        setIsCreator(true);
      }
    }
  }, [initialCreatorMode]);

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

  // Lock body scroll while doors are closed so background is never prematurely scrolled
  useEffect(() => {
    if (!hasEnteredPalace) {
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0);
      }
    } else {
      document.body.style.overflow = "";
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0);
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [hasEnteredPalace]);

  const handleEnterPalace = () => {
    setHasEnteredPalace(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }, 50);
    }
  };

  const handleInstantSkip = () => {
    setHasEnteredPalace(true);
    setHasUnlockedVault(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  };

  // Button 1: User explicitly clicks "शाही तिजोरी की ओर बढ़ें"
  const handleProceedToVault = () => {
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
    setActiveView("ceremonies");
    try {
      window.history.pushState({ view: "ceremonies" }, "", "#ceremonies");
    } catch {}
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Button 3: User clicks "वापस लग्न पत्रिका पर जाएं" to return back
  const handleBackToInvitation = () => {
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
          <header className="sticky top-0 z-40 bg-[#1D040A]/95 border-b border-gold-500/40 backdrop-blur-md px-3 sm:px-6 py-2 shadow-xl flex items-center justify-between">
            <button
              type="button"
              onClick={handleBackToInvitation}
              className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/90 bg-gradient-to-r from-maroon-700 via-maroon-800 to-maroon-900 px-3 sm:px-4 py-1.5 text-xs font-sans font-semibold tracking-wider uppercase text-ivory-100 shadow-md shadow-black/50 hover:scale-105 active:scale-95 transition-all max-w-fit shrink-0"
            >
              <IconArrowLeft className="h-3.5 w-3.5 text-gold-300 shrink-0" />
              <span>{config.ui.backToScroll}</span>
            </button>

            <div className="hidden md:flex items-center gap-2 text-xs font-royal text-gold-300 font-semibold tracking-wider">
              <LotusMotif className="h-4 w-4 text-gold-400" />
              <span>{config.ui.ceremoniesPageTitle}</span>
            </div>

            {/* Space buffer so right side doesn't overlap LanguageToggle */}
            <div className="w-24 sm:w-32 pointer-events-none" aria-hidden="true" />
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

            {/* Compact Bottom Return Button */}
            <div className="py-8 sm:py-10 text-center border-t border-gold-500/20 my-6">
              <button
                type="button"
                onClick={handleBackToInvitation}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-gold-400/90 bg-gradient-to-r from-maroon-800 via-maroon-900 to-[#2A050B] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-sans font-bold tracking-wider uppercase text-ivory-100 shadow-xl shadow-maroon-950/40 hover:scale-105 active:scale-95 transition-all max-w-fit mx-auto"
              >
                <IconArrowLeft className="h-4 w-4 text-gold-400 group-hover:-translate-x-1 transition-transform" />
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

      {/* FLOATING BOTTOM-LEFT GUEST LINK GENERATOR BUTTON (Visible ONLY when URL has /nikhil786) */}
      {isCreator && (
        <>
          <aside
            aria-label="Create Guest Link"
            className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex items-center"
          >
            <button
              type="button"
              onClick={() => setShowLinkGenerator(true)}
              className="group relative flex items-center gap-2 rounded-full border border-gold-400/80 bg-gradient-to-r from-[#2A050E]/95 via-[#1D0308]/95 to-[#2A050E]/95 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-serif tracking-wider uppercase text-gold-200 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-gold-300 hover:text-gold-100 active:scale-95 ring-1 ring-gold-400/30"
              title={lang === "hi" ? "गेस्ट लिंक बनाएं" : "Create Guest Link"}
              aria-label={lang === "hi" ? "गेस्ट लिंक बनाएं" : "Create Guest Link"}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-500/20 text-gold-300 group-hover:scale-110 transition-transform">
                ✨
              </span>
              <span className="font-sans text-[11px] sm:text-xs font-bold tracking-wide text-gold-200">
                {lang === "hi" ? "गेस्ट लिंक बनाएं" : "Create Guest Link"}
              </span>
            </button>
          </aside>

          {/* GUEST LINK GENERATOR POPUP MODAL */}
          <GuestLinkGeneratorModal
            isOpen={showLinkGenerator}
            onClose={() => setShowLinkGenerator(false)}
          />
        </>
      )}
    </div>
  );
}

export function CinematicWeddingExperience({ isCreatorMode = false }: CinematicWeddingExperienceProps) {
  return (
    <LanguageProvider>
      <ExperienceContent initialCreatorMode={isCreatorMode} />
    </LanguageProvider>
  );
}