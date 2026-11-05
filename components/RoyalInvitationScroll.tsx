"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { downloadIcsFile, getGoogleCalendarUrl } from "@/lib/calendar";
import { GaneshaMotif, OrnateDivider } from "./RoyalMotifs";
import {
  IconCalendarEvent,
  IconCalendar,
  IconClock,
  IconMapPin,
  IconChevronDown,
  IconBrandGoogle,
  IconDownload,
} from "@tabler/icons-react";

interface RoyalInvitationScrollProps {
  onScrollToDetails: () => void;
}

export function RoyalInvitationScroll({ onScrollToDetails }: RoyalInvitationScrollProps) {
  const [showCalendarMenu, setShowCalendarMenu] = useState(false);
  const { config, lang, guestName } = useLanguage();

  return (
    <motion.div
      id="invitation-scroll"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-2xl px-2 sm:px-4 text-center scroll-mt-6"
    >
      {/* Antique Scroll Top Golden Wooden Roller / Finial */}
      <div className="relative z-30 mx-auto flex items-center justify-center">
        <div className="h-4 sm:h-5 w-[96%] rounded-full bg-gradient-to-r from-amber-900 via-gold-400 to-amber-950 shadow-2xl border border-gold-300 flex items-center justify-between px-3">
          <div className="h-6 w-6 -ml-4 rounded-full bg-gradient-to-br from-gold-300 via-gold-600 to-amber-900 border-2 border-gold-200 shadow-lg" />
          <div className="h-1.5 w-32 bg-gold-200/50 rounded-full" />
          <div className="h-6 w-6 -mr-4 rounded-full bg-gradient-to-bl from-gold-300 via-gold-600 to-amber-900 border-2 border-gold-200 shadow-lg" />
        </div>
      </div>

      {/* Main Parchment Scroll Body with Background Texture */}
      <div
        className="relative z-20 -my-1 rounded-2xl border-x-4 border-gold-500/60 p-5 sm:p-12 shadow-2xl shadow-black/80 overflow-hidden"
        style={{
          backgroundImage: "url('/images/antique-parchment.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow:
            "0 30px 70px -15px rgba(0,0,0,0.8), 0 0 40px rgba(197, 160, 89, 0.25) inset",
        }}
      >
        {/* Ornate Gold Foil Inner Borders */}
        <div className="absolute inset-3 border-2 border-dashed border-gold-600/40 rounded-xl pointer-events-none" />
        <div className="absolute inset-5 border border-gold-600/20 rounded-lg pointer-events-none" />

        {/* Corner Cornerpins */}
        <span className="absolute top-4 left-4 text-gold-700 text-sm pointer-events-none">❖</span>
        <span className="absolute top-4 right-4 text-gold-700 text-sm pointer-events-none">❖</span>
        <span className="absolute bottom-4 left-4 text-gold-700 text-sm pointer-events-none">❖</span>
        <span className="absolute bottom-4 right-4 text-gold-700 text-sm pointer-events-none">❖</span>

        {/* Sacred Ganesha Inscription */}
        <div className="flex flex-col items-center justify-center pt-2">
          <GaneshaMotif className="h-12 w-12 sm:h-16 sm:w-16 text-maroon-800 drop-shadow-sm" />
          <p className="mt-2 font-serif text-xs sm:text-sm font-bold tracking-widest text-maroon-900">
            {config.invitation.traditionalShloka}
          </p>
          <p className="text-[10px] sm:text-xs text-gold-800 font-sans tracking-wide mt-0.5">
            {config.invitation.shlokaTranslation}
          </p>
        </div>

        <OrnateDivider className="my-4 sm:my-5" />

        {/* Invitation Text */}
        <div className="space-y-2">
          {guestName && (
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-gold-600/50 bg-[#FAF4E5] px-4 py-1.5 shadow-sm max-w-full">
              <span className="text-gold-700 text-xs shrink-0">❖</span>
              <span className="font-serif text-xs sm:text-sm font-bold text-maroon-900 truncate">
                {lang === "hi" ? `सादर सपरिवार आमंत्रित: ${guestName}` : `Cordially Invited: ${guestName}`}
              </span>
              <span className="text-gold-700 text-xs shrink-0">❖</span>
            </div>
          )}

          <div>
            <span className="inline-block text-[10px] sm:text-xs font-sans font-bold tracking-[0.25em] uppercase text-maroon-800">
              {config.ui.scrollTogether}
            </span>
          </div>

          {/* Couple Names */}
          <div className="py-2 sm:py-3">
            <h2 className="font-royal text-3xl sm:text-5xl font-extrabold tracking-wide text-maroon-900 drop-shadow-sm">
              {config.bride.firstName}
            </h2>
            <div className="my-1 flex items-center justify-center gap-2">
              <span className="h-[1px] w-12 bg-gold-600/50" />
              <span className="font-serif italic text-2xl sm:text-3xl text-gold-700 font-normal">
                {config.ui.weds}
              </span>
              <span className="h-[1px] w-12 bg-gold-600/50" />
            </div>
            <h2 className="font-royal text-3xl sm:text-5xl font-extrabold tracking-wide text-maroon-900 drop-shadow-sm">
              {config.groom.firstName}
            </h2>
            <p className="text-xs sm:text-sm font-serif font-bold text-maroon-800 uppercase tracking-widest mt-1">
              {lang === "hi" ? "कुमावत" : "Kumawat"}
            </p>
          </div>

          <p className="text-xs sm:text-sm font-sans font-medium text-neutral-700 italic max-w-md mx-auto leading-relaxed">
            &ldquo;{config.invitation.mainMessage}&rdquo;
          </p>
        </div>

        <OrnateDivider className="my-4 sm:my-5" />

        {/* Wedding Date, Time & Venue Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-center my-4 max-w-xl mx-auto">
          <div className="p-3 rounded-xl bg-[#FAF6EE]/80 border border-gold-500/30 shadow-sm">
            <IconCalendar className="h-4 w-4 text-maroon-800 mx-auto mb-1" />
            <span className="text-[10px] font-sans font-semibold tracking-wider text-gold-800 uppercase block">
              {config.ui.weddingDateLabel}
            </span>
            <span className="text-xs sm:text-sm font-serif font-bold text-neutral-900 mt-0.5 block">
              {config.wedding.displayDate}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#FAF6EE]/80 border border-gold-500/30 shadow-sm">
            <IconClock className="h-4 w-4 text-maroon-800 mx-auto mb-1" />
            <span className="text-[10px] font-sans font-semibold tracking-wider text-gold-800 uppercase block">
              {config.ui.muhuratLabel}
            </span>
            <span className="text-xs sm:text-sm font-serif font-bold text-neutral-900 mt-0.5 block">
              {lang === "hi" ? "सायं 07:15 बजे से" : "07:15 PM Onwards"}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#FAF6EE]/80 border border-gold-500/30 shadow-sm">
            <IconMapPin className="h-4 w-4 text-maroon-800 mx-auto mb-1" />
            <span className="text-[10px] font-sans font-semibold tracking-wider text-gold-800 uppercase block">
              {config.ui.venueLabel}
            </span>
            <span className="text-xs sm:text-sm font-serif font-bold text-neutral-900 mt-0.5 block line-clamp-1">
              {config.venue.name}
            </span>
          </div>
        </div>

        {/* Save The Date Interaction */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 relative">
          <div className="relative w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setShowCalendarMenu(!showCalendarMenu)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gold-500 bg-gradient-to-r from-maroon-800 via-maroon-900 to-[#32040B] px-6 py-3 text-xs sm:text-sm font-sans font-bold tracking-widest uppercase text-ivory-100 shadow-lg shadow-maroon-950/30 hover:scale-105 active:scale-95 transition-all"
            >
              <IconCalendarEvent className="h-4 w-4 text-gold-400" />
              <span>{config.ui.saveDateBtn}</span>
            </button>

            {showCalendarMenu && (
              <div className="absolute left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 mt-2 w-56 rounded-2xl border border-gold-500/40 bg-white p-2 shadow-2xl z-40 text-left">
                <a
                  href={getGoogleCalendarUrl(config)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowCalendarMenu(false)}
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-neutral-800 hover:bg-gold-50 hover:text-maroon-900 transition-colors"
                >
                  <IconBrandGoogle className="h-4 w-4 text-maroon-800" />
                  <span>Google Calendar</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    downloadIcsFile(config);
                    setShowCalendarMenu(false);
                  }}
                  className="w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-neutral-800 hover:bg-gold-50 hover:text-maroon-900 transition-colors"
                >
                  <IconDownload className="h-4 w-4 text-gold-700" />
                  <span>Apple / Outlook (.ics)</span>
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={onScrollToDetails}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full border border-gold-600/50 bg-white/70 px-5 py-3 text-xs sm:text-sm font-sans font-semibold tracking-wider uppercase text-maroon-900 hover:bg-gold-500/10 active:scale-95 transition-all"
          >
            <span>{config.ui.viewCeremoniesBtn}</span>
            <IconChevronDown className="h-4 w-4 text-maroon-800 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Antique Scroll Bottom Golden Wooden Roller / Finial */}
      <div className="relative z-30 mx-auto flex items-center justify-center">
        <div className="h-4 sm:h-5 w-[96%] rounded-full bg-gradient-to-r from-amber-900 via-gold-400 to-amber-950 shadow-2xl border border-gold-300 flex items-center justify-between px-3">
          <div className="h-6 w-6 -ml-4 rounded-full bg-gradient-to-br from-gold-300 via-gold-600 to-amber-900 border-2 border-gold-200 shadow-lg" />
          <div className="h-1.5 w-32 bg-gold-200/50 rounded-full" />
          <div className="h-6 w-6 -mr-4 rounded-full bg-gradient-to-bl from-gold-300 via-gold-600 to-amber-900 border-2 border-gold-200 shadow-lg" />
        </div>
      </div>
    </motion.div>
  );
}
