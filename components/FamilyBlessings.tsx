"use client";

import React from "react";
import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "@/config/wedding";
import { OrnateDivider, CornerOrnament, GaneshaMotif } from "./RoyalMotifs";
import { IconHeartHandshake } from "@tabler/icons-react";

export function FamilyBlessings() {
  const { invitation } = WEDDING_CONFIG;

  return (
    <section className="py-16 sm:py-24 relative">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-gold-500/40 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EF] to-[#F5ECE0] p-6 sm:p-12 shadow-xl shadow-maroon-900/5 text-center ornamental-frame"
        >
          <div className="absolute top-2.5 left-2.5">
            <CornerOrnament position="top-left" />
          </div>
          <div className="absolute top-2.5 right-2.5">
            <CornerOrnament position="top-right" />
          </div>
          <div className="absolute bottom-2.5 left-2.5">
            <CornerOrnament position="bottom-left" />
          </div>
          <div className="absolute bottom-2.5 right-2.5">
            <CornerOrnament position="bottom-right" />
          </div>

          <div className="flex flex-col items-center">
            <GaneshaMotif className="h-12 w-12 text-gold-600 mb-2" />
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-maroon-700 font-semibold">
              With The Blessings Of Our Elders
            </span>
          </div>

          <OrnateDivider className="my-5" />

          {/* Invitation Message */}
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="font-serif text-base sm:text-lg text-neutral-800 leading-relaxed italic">
              &ldquo;{invitation.mainMessage}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
              {invitation.secondaryMessage}
            </p>

            {invitation.eldersBlessing && (
              <p className="font-serif text-xs sm:text-sm text-gold-700 font-medium pt-2">
                — {invitation.eldersBlessing} —
              </p>
            )}
          </div>

          <OrnateDivider className="my-6" />

          {/* Welcoming Host Families */}
          <div className="pt-2">
            <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-gold-700 block mb-3">
              Warmly Welcomed By
            </span>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12">
              <div className="p-3 rounded-2xl bg-white/50 border border-gold-500/20 w-full sm:w-56">
                <span className="text-[10px] font-sans uppercase tracking-wider text-neutral-500 block">
                  Bride&apos;s Family
                </span>
                <span className="font-royal text-base sm:text-lg font-bold text-maroon-900 mt-0.5 block">
                  {invitation.hosts.brideSide}
                </span>
              </div>

              <span className="font-serif italic text-gold-600 text-lg sm:text-xl font-normal">
                &
              </span>

              <div className="p-3 rounded-2xl bg-white/50 border border-gold-500/20 w-full sm:w-56">
                <span className="text-[10px] font-sans uppercase tracking-wider text-neutral-500 block">
                  Groom&apos;s Family
                </span>
                <span className="font-royal text-base sm:text-lg font-bold text-maroon-900 mt-0.5 block">
                  {invitation.hosts.groomSide}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

