"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { WeddingEvent } from "@/config/wedding";
import { OrnateDivider, CornerOrnament } from "./RoyalMotifs";
import {
  IconCalendar,
  IconClock,
  IconMapPin,
  IconSparkles,
  IconShirt,
  IconSun,
  IconMusic,
  IconFlame,
  IconGlassFull,
  IconGift,
} from "@tabler/icons-react";

export function EventsTimeline() {
  const { config, lang } = useLanguage();
  const events = config.events || [];

  const getEventIcon = (type: WeddingEvent["iconType"]) => {
    switch (type) {
      case "haldi":
        return <IconSun className="h-5 w-5 text-amber-500" />;
      case "chakbhat":
        return <IconGift className="h-5 w-5 text-orange-600" />;
      case "mehendi":
        return <IconSparkles className="h-5 w-5 text-emerald-600" />;
      case "sangeet":
        return <IconMusic className="h-5 w-5 text-purple-600" />;
      case "vivah":
        return <IconFlame className="h-5 w-5 text-maroon-700" />;
      case "reception":
        return <IconGlassFull className="h-5 w-5 text-gold-600" />;
      default:
        return <IconSparkles className="h-5 w-5 text-gold-600" />;
    }
  };

  const getThemeBadge = (type: WeddingEvent["iconType"]) => {
    switch (type) {
      case "haldi":
        return "border-amber-400/40 bg-amber-50 text-amber-800";
      case "chakbhat":
        return "border-orange-400/40 bg-orange-50 text-orange-800";
      case "mehendi":
        return "border-emerald-400/40 bg-emerald-50 text-emerald-800";
      case "sangeet":
        return "border-purple-400/40 bg-purple-50 text-purple-800";
      case "vivah":
        return "border-maroon-500/40 bg-maroon-50 text-maroon-800";
      case "reception":
        return "border-gold-500/40 bg-gold-50 text-gold-800";
    }
  };

  return (
    <section id="events" className="py-12 sm:py-20 relative">
      <div className="container mx-auto max-w-4xl px-3 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10 sm:mb-16">
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-maroon-700 font-semibold">
            {config.ui.itineraryTag}
          </span>
          <h2 className="font-royal text-3xl sm:text-4xl font-bold text-maroon-900">
            {config.ui.itineraryTitle}
          </h2>
          <p className="font-serif italic text-xs sm:text-base text-neutral-600 max-w-md mx-auto px-2">
            {config.ui.itinerarySubtitle}
          </p>
          <OrnateDivider className="mt-4" />
        </div>

        {/* Timeline Event Cards */}
        <div className="space-y-6 sm:space-y-10">
          {events.map((event, index) => {
            return (
              <motion.div
                key={event.id || index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative rounded-3xl border border-gold-500/35 bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F5ECE0] p-5 sm:p-8 shadow-lg shadow-maroon-900/5 ornamental-frame"
              >
                {/* Corner details */}
                <div className="absolute top-2.5 left-2.5">
                  <CornerOrnament position="top-left" />
                </div>
                <div className="absolute top-2.5 right-2.5">
                  <CornerOrnament position="top-right" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 border-b border-gold-500/20 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border text-xs font-medium ${getThemeBadge(event.iconType)}`}>
                        {getEventIcon(event.iconType)}
                        <span className="capitalize">{event.title.split(" ")[0]}</span>
                      </span>
                    </div>

                    <h3 className="font-royal text-xl sm:text-3xl font-bold text-maroon-900 pt-1">
                      {event.title}
                    </h3>
                    <p className="font-serif italic text-xs sm:text-sm text-gold-700 font-medium">
                      {event.subtitle}
                    </p>
                  </div>

                  {/* Date & Time Badge */}
                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 sm:gap-2 text-xs font-sans text-neutral-700 bg-white/70 p-2.5 sm:p-3 rounded-2xl border border-gold-500/20 shrink-0">
                    <span className="flex items-center gap-1.5 font-semibold text-maroon-800">
                      <IconCalendar className="h-4 w-4 text-gold-600" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium text-neutral-600">
                      <IconClock className="h-4 w-4 text-gold-600" />
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* Event Description & Location details */}
                <div className="mt-4 space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-1">
                    {/* Venue */}
                    <div className="flex items-start gap-2 text-neutral-700 bg-white/50 p-2.5 rounded-xl border border-gold-500/15">
                      <IconMapPin className="h-4 w-4 text-maroon-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-maroon-800 block text-[10px] sm:text-[11px] uppercase tracking-wider">
                          {config.ui.venueLabel}
                        </span>
                        <span className="text-neutral-800">{event.venue}</span>
                      </div>
                    </div>

                    {/* Dress Code */}
                    {event.dressCode && (
                      <div className="flex items-start gap-2 text-neutral-700 bg-white/50 p-2.5 rounded-xl border border-gold-500/15">
                        <IconShirt className="h-4 w-4 text-gold-700 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-gold-700 block text-[10px] sm:text-[11px] uppercase tracking-wider">
                            {lang === "hi" ? "सुझावित परिधान" : "Suggested Attire"}
                          </span>
                          <span className="text-neutral-800">{event.dressCode}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
