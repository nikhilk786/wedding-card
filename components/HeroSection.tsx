"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "@/config/wedding";
import { GaneshaMotif, OrnateDivider, CornerOrnament, PalaceArchSilhouette, LotusMotif } from "./RoyalMotifs";
import { downloadIcsFile, getGoogleCalendarUrl } from "@/lib/calendar";
import { IconCalendar, IconCalendarEvent, IconMapPin, IconClock, IconBrandGoogle, IconDownload } from "@tabler/icons-react";

export function HeroSection() {
  const [showCalendarMenu, setShowCalendarMenu] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 text-center">
      {/* Background Royal Halo Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-[500px] w-[500px] sm:w-[700px] rounded-full bg-gradient-to-b from-gold-500/10 via-maroon-700/5 to-transparent blur-3xl" />

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        {/* Main Royal Card Frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative rounded-3xl border border-gold-500/40 bg-gradient-to-b from-[#FFFDF9]/90 via-[#FAF7F2]/95 to-[#F6EDE1]/90 p-6 sm:p-12 md:p-16 shadow-xl shadow-maroon-950/10 backdrop-blur-sm ornamental-frame"
        >
          {/* Corner Flourishes */}
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

          {/* Ganesha Emblem & Sacred Shloka */}
          <div className="flex flex-col items-center">
            <GaneshaMotif className="h-14 w-14 sm:h-16 sm:w-16 text-gold-600" />
            <p className="mt-2 font-serif text-xs sm:text-sm font-semibold tracking-wider text-maroon-800">
              {WEDDING_CONFIG.invitation.traditionalShloka}
            </p>
          </div>

          <OrnateDivider className="my-5 sm:my-7" />

          {/* Intro text */}
          <p className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-maroon-700 font-semibold">
            Cordially Invite You To Celebrate The Wedding Of
          </p>

          {/* Bride & Groom Names with Royal Ampersand */}
          <div className="my-6 sm:my-8 space-y-2">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
              <span className="font-royal text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-maroon-900 drop-shadow-sm">
                {WEDDING_CONFIG.bride.firstName}
              </span>

              <div className="relative flex items-center justify-center">
                <span className="font-serif text-3xl sm:text-4xl text-gold-600 italic font-normal py-1">
                  &
                </span>
              </div>

              <span className="font-royal text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-maroon-900 drop-shadow-sm">
                {WEDDING_CONFIG.groom.firstName}
              </span>
            </div>

            <p className="font-serif text-sm sm:text-base italic text-neutral-600 max-w-xl mx-auto pt-2">
              &ldquo;{WEDDING_CONFIG.wedding.tagline}&rdquo;
            </p>
          </div>

          <OrnateDivider className="my-5 sm:my-7" />

          {/* Date, Time & Venue Information */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center my-6 max-w-2xl mx-auto">
            {/* Date */}
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white/50 border border-gold-500/20">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500/10 text-gold-700 mb-2">
                <IconCalendar className="h-4 w-4" />
              </span>
              <span className="text-[11px] font-sans font-semibold tracking-wider text-maroon-700 uppercase">
                Auspicious Date
              </span>
              <span className="text-sm sm:text-base font-serif font-bold text-neutral-800 mt-0.5">
                {WEDDING_CONFIG.wedding.displayDate}
              </span>
              <span className="text-[10px] text-neutral-500 mt-0.5">
                {WEDDING_CONFIG.wedding.traditionalCalendar}
              </span>
            </div>

            {/* Time / Muhurat */}
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white/50 border border-gold-500/20">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500/10 text-gold-700 mb-2">
                <IconClock className="h-4 w-4" />
              </span>
              <span className="text-[11px] font-sans font-semibold tracking-wider text-maroon-700 uppercase">
                Shubh Muhurat
              </span>
              <span className="text-sm sm:text-base font-serif font-bold text-neutral-800 mt-0.5">
                07:15 PM Onwards
              </span>
              <span className="text-[10px] text-neutral-500 mt-0.5">
                Baraat Arrival: 05:00 PM
              </span>
            </div>

            {/* Venue */}
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white/50 border border-gold-500/20">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500/10 text-gold-700 mb-2">
                <IconMapPin className="h-4 w-4" />
              </span>
              <span className="text-[11px] font-sans font-semibold tracking-wider text-maroon-700 uppercase">
                Royal Venue
              </span>
              <span className="text-sm sm:text-base font-serif font-bold text-neutral-800 mt-0.5 line-clamp-1">
                {WEDDING_CONFIG.venue.name}
              </span>
              <span className="text-[10px] text-neutral-500 mt-0.5">
                {WEDDING_CONFIG.venue.city}
              </span>
            </div>
          </div>

          {/* Save The Date Action Buttons */}
          <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowCalendarMenu(!showCalendarMenu)}
                className="inline-flex items-center gap-2 rounded-full border border-gold-500 bg-gradient-to-r from-maroon-700 via-maroon-800 to-maroon-900 px-6 py-3 text-xs sm:text-sm font-sans font-semibold tracking-widest uppercase text-ivory-100 shadow-md shadow-maroon-950/20 hover:scale-[1.02] transition-all"
              >
                <IconCalendarEvent className="h-4 w-4 text-gold-400" />
                <span>Save The Date</span>
              </button>

              {/* Calendar Dropdown Options */}
              {showCalendarMenu && (
                <div className="absolute left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 mt-2 w-56 rounded-2xl border border-gold-500/30 bg-white p-2 shadow-2xl z-30 text-left">
                  <a
                    href={getGoogleCalendarUrl(WEDDING_CONFIG)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowCalendarMenu(false)}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-neutral-700 hover:bg-ivory-200 hover:text-maroon-800 transition-colors"
                  >
                    <IconBrandGoogle className="h-4 w-4 text-maroon-700" />
                    <span>Add to Google Calendar</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      downloadIcsFile(WEDDING_CONFIG);
                      setShowCalendarMenu(false);
                    }}
                    className="w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-neutral-700 hover:bg-ivory-200 hover:text-maroon-800 transition-colors"
                  >
                    <IconDownload className="h-4 w-4 text-gold-600" />
                    <span>Download Apple/Outlook (.ics)</span>
                  </button>
                </div>
              )}
            </div>

            <a
              href="#events"
              className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-white/80 px-6 py-3 text-xs sm:text-sm font-sans font-semibold tracking-widest uppercase text-maroon-800 hover:bg-gold-500/10 hover:border-gold-500 transition-colors"
            >
              <span>View Wedding Events</span>
            </a>
          </div>

          {/* Palace Arch Silhouette at bottom */}
          <div className="mt-8 -mb-6 sm:-mb-12">
            <PalaceArchSilhouette className="w-full text-gold-500/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

