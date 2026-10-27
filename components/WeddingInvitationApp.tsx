"use client";

import React, { useState } from "react";
import { OpeningExperience } from "./OpeningExperience";
import { FloatingPetals } from "./FloatingPetals";
import { HeroSection } from "./HeroSection";
import { CountdownSection } from "./CountdownSection";
import { CoupleSection } from "./CoupleSection";
import { EventsTimeline } from "./EventsTimeline";
import { VenueSection } from "./VenueSection";
import { FamilyBlessings } from "./FamilyBlessings";
import { RsvpAndShare } from "./RsvpAndShare";

export function WeddingInvitationApp() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="relative min-h-screen bg-ivory-100 text-[#2B181B]">
      {/* 1. Opening Cover Experience */}
      <OpeningExperience
        isOpen={isOpened}
        onOpen={() => setIsOpened(true)}
      />

      {/* 2. Floating Golden Rose & Marigold Petals */}
      <FloatingPetals />

      {/* 3. Main Royal Wedding Invitation Page */}
      <main className="relative z-10 transition-opacity duration-700">
        <HeroSection />
        <CountdownSection />
        <CoupleSection />
        <EventsTimeline />
        <VenueSection />
        <FamilyBlessings />
        <RsvpAndShare />
      </main>
    </div>
  );
}

