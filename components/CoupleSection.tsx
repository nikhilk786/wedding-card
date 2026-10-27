"use client";

import React from "react";
import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "@/config/wedding";
import { OrnateDivider, CornerOrnament, LotusMotif } from "./RoyalMotifs";
import { IconSparkles } from "@tabler/icons-react";

export function CoupleSection() {
  const { bride, groom } = WEDDING_CONFIG;

  return (
    <section id="couple" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12 sm:mb-16">
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-maroon-700 font-semibold flex items-center justify-center gap-1.5">
            <IconSparkles className="h-3.5 w-3.5 text-gold-600" />
            <span>The Happy Couple</span>
          </span>
          <h2 className="font-royal text-3xl sm:text-4xl font-bold text-maroon-900">
            Meet Bride & Groom
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-neutral-600 max-w-lg mx-auto">
            Two lives uniting with the sacred blessings of family, tradition, and eternal devotion.
          </p>
          <OrnateDivider className="mt-4" />
        </div>

        {/* Bride & Groom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          {/* The Bride Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl border border-gold-500/40 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EF] to-[#F7EDE0] p-6 sm:p-8 shadow-xl shadow-maroon-900/5 text-center ornamental-frame"
          >
            <div className="absolute top-2.5 left-2.5">
              <CornerOrnament position="top-left" />
            </div>
            <div className="absolute top-2.5 right-2.5">
              <CornerOrnament position="top-right" />
            </div>

            {/* Decorative Portrait Frame / Silhouette */}
            <div className="relative mx-auto h-48 w-48 sm:h-56 sm:w-56 overflow-hidden rounded-full border-4 border-gold-500/60 p-2 shadow-inner bg-ivory-200/50">
              <div className="h-full w-full rounded-full border-2 border-dashed border-maroon-700/30 flex flex-col items-center justify-center bg-gradient-to-tr from-ivory-300 to-[#F9EFE2]">
                <LotusMotif className="h-10 w-10 text-gold-600 mb-1" />
                <span className="font-royal text-xs font-semibold uppercase tracking-widest text-maroon-800">
                  {bride.photoPlaceholderText}
                </span>
                <span className="font-serif italic text-[11px] text-neutral-500 mt-1">
                  Royal Rajasthani Bride
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="mt-6 space-y-2">
              <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-gold-700 block">
                The Bride
              </span>
              <h3 className="font-royal text-2xl sm:text-3xl font-bold text-maroon-900">
                {bride.fullName}
              </h3>
              <p className="font-serif text-xs sm:text-sm text-maroon-700 font-medium">
                {bride.parents}
              </p>
              <div className="h-[1px] w-16 bg-gold-500/40 mx-auto my-3" />
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans px-2">
                {bride.bio}
              </p>
            </div>
          </motion.div>

          {/* The Groom Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-3xl border border-gold-500/40 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EF] to-[#F7EDE0] p-6 sm:p-8 shadow-xl shadow-maroon-900/5 text-center ornamental-frame"
          >
            <div className="absolute top-2.5 left-2.5">
              <CornerOrnament position="top-left" />
            </div>
            <div className="absolute top-2.5 right-2.5">
              <CornerOrnament position="top-right" />
            </div>

            {/* Decorative Portrait Frame / Silhouette */}
            <div className="relative mx-auto h-48 w-48 sm:h-56 sm:w-56 overflow-hidden rounded-full border-4 border-gold-500/60 p-2 shadow-inner bg-ivory-200/50">
              <div className="h-full w-full rounded-full border-2 border-dashed border-maroon-700/30 flex flex-col items-center justify-center bg-gradient-to-tr from-ivory-300 to-[#F9EFE2]">
                <LotusMotif className="h-10 w-10 text-gold-600 mb-1" />
                <span className="font-royal text-xs font-semibold uppercase tracking-widest text-maroon-800">
                  {groom.photoPlaceholderText}
                </span>
                <span className="font-serif italic text-[11px] text-neutral-500 mt-1">
                  Royal Rajasthani Groom
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="mt-6 space-y-2">
              <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-gold-700 block">
                The Groom
              </span>
              <h3 className="font-royal text-2xl sm:text-3xl font-bold text-maroon-900">
                {groom.fullName}
              </h3>
              <p className="font-serif text-xs sm:text-sm text-maroon-700 font-medium">
                {groom.parents}
              </p>
              <div className="h-[1px] w-16 bg-gold-500/40 mx-auto my-3" />
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans px-2">
                {groom.bio}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

