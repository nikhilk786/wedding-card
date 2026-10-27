"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "@/config/wedding";
import { OrnateDivider, CornerOrnament } from "./RoyalMotifs";
import {
  IconMapPin,
  IconDirections,
  IconCopy,
  IconCheck,
  IconInfoCircle,
  IconShip,
} from "@tabler/icons-react";

export function VenueSection() {
  const { venue } = WEDDING_CONFIG;
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(`${venue.name}, ${venue.fullAddress}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="venue" className="py-16 sm:py-24 relative">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12 sm:mb-16">
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-maroon-700 font-semibold">
            Destination & Directions
          </span>
          <h2 className="font-royal text-3xl sm:text-4xl font-bold text-maroon-900">
            The Wedding Destination
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-neutral-600 max-w-md mx-auto">
            Surrounded by the serene waters of Lake Pichola and the royal legacy of Mewar.
          </p>
          <OrnateDivider className="mt-4" />
        </div>

        {/* Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-gold-500/40 bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F5ECE0] p-6 sm:p-10 shadow-xl shadow-maroon-900/5 ornamental-frame"
        >
          <div className="absolute top-2.5 left-2.5">
            <CornerOrnament position="top-left" />
          </div>
          <div className="absolute top-2.5 right-2.5">
            <CornerOrnament position="top-right" />
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon-700/10 text-maroon-800 border border-gold-500/30">
              <IconMapPin className="h-6 w-6" />
            </div>

            <h3 className="font-royal text-2xl sm:text-3xl font-bold text-maroon-900">
              {venue.name}
            </h3>

            <p className="text-sm font-sans font-medium text-neutral-700 max-w-md">
              {venue.fullAddress}
            </p>

            {/* Landmark Note / Transfer Note */}
            {venue.landmarkNote && (
              <div className="mt-2 inline-flex items-center gap-2 rounded-2xl bg-amber-500/10 border border-amber-500/20 px-4 py-2 text-xs font-sans text-amber-900 max-w-lg">
                <IconShip className="h-4 w-4 text-amber-700 shrink-0" />
                <span>{venue.landmarkNote}</span>
              </div>
            )}

            {/* Action Buttons: Get Directions & Copy Address */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold-500 bg-gradient-to-r from-maroon-700 via-maroon-800 to-maroon-900 px-6 py-3 text-xs sm:text-sm font-sans font-semibold tracking-wider uppercase text-ivory-100 shadow-md shadow-maroon-950/20 hover:scale-[1.02] transition-all"
              >
                <IconDirections className="h-4 w-4 text-gold-400" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-white/90 px-5 py-3 text-xs sm:text-sm font-sans font-semibold tracking-wider uppercase text-maroon-800 hover:bg-gold-500/10 hover:border-gold-500 transition-colors"
              >
                {copied ? (
                  <>
                    <IconCheck className="h-4 w-4 text-emerald-600" />
                    <span>Address Copied!</span>
                  </>
                ) : (
                  <>
                    <IconCopy className="h-4 w-4 text-gold-600" />
                    <span>Copy Full Address</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

