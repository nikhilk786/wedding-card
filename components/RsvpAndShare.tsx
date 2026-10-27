"use client";

import React, { useState } from "react";
import { WEDDING_CONFIG } from "@/config/wedding";
import { OrnateDivider, LotusMotif, CornerOrnament } from "./RoyalMotifs";
import {
  IconShare,
  IconBrandWhatsapp,
  IconPhone,
  IconCopy,
  IconCheck,
  IconHeart,
} from "@tabler/icons-react";

export function RsvpAndShare() {
  const { rsvp, socialSharing, bride, groom, wedding } = WEDDING_CONFIG;
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: socialSharing.title,
          text: socialSharing.text,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or not supported
      }
    } else {
      // Fallback: Copy link
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      } catch {}
    }
  };

  const whatsappUrl = `https://wa.me/${rsvp.whatsappNumber}?text=${encodeURIComponent(
    rsvp.whatsappPreFilledText
  )}`;

  return (
    <section id="rsvp" className="py-16 sm:py-24 relative">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative rounded-3xl border border-gold-500/40 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EF] to-[#F5ECE0] p-6 sm:p-12 shadow-xl shadow-maroon-900/5 text-center ornamental-frame">
          <div className="absolute top-2.5 left-2.5">
            <CornerOrnament position="top-left" />
          </div>
          <div className="absolute top-2.5 right-2.5">
            <CornerOrnament position="top-right" />
          </div>

          <span className="text-xs font-sans tracking-[0.25em] uppercase text-maroon-700 font-semibold block">
            Kindly Respond & Celebrate With Us
          </span>

          <h2 className="font-royal text-3xl sm:text-4xl font-bold text-maroon-900 mt-1">
            RSVP & Blessings
          </h2>

          <p className="font-serif italic text-sm sm:text-base text-neutral-600 max-w-md mx-auto mt-2">
            Please let us know if you will be joining us for the royal celebrations in Udaipur.
          </p>

          <OrnateDivider className="my-6" />

          {/* Action Buttons: WhatsApp RSVP & Share */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-600 bg-emerald-700 px-7 py-3.5 text-xs sm:text-sm font-sans font-semibold tracking-wider uppercase text-white shadow-md shadow-emerald-950/20 hover:bg-emerald-600 hover:scale-[1.02] transition-all"
            >
              <IconBrandWhatsapp className="h-4 w-4" />
              <span>RSVP via WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-full border border-gold-500 bg-gradient-to-r from-maroon-700 via-maroon-800 to-maroon-900 px-7 py-3.5 text-xs sm:text-sm font-sans font-semibold tracking-wider uppercase text-ivory-100 shadow-md shadow-maroon-950/20 hover:scale-[1.02] transition-all"
            >
              {copiedLink ? (
                <>
                  <IconCheck className="h-4 w-4 text-emerald-400" />
                  <span>Invitation Link Copied!</span>
                </>
              ) : (
                <>
                  <IconShare className="h-4 w-4 text-gold-400" />
                  <span>Share Invitation</span>
                </>
              )}
            </button>
          </div>

          {/* Contact Numbers */}
          <div className="mt-8 pt-6 border-t border-gold-500/20">
            <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-neutral-500 block mb-3">
              For Inquiries & Travel Assistance
            </span>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-sans text-neutral-700">
              {rsvp.phoneContacts.map((contact, idx) => (
                <a
                  key={idx}
                  href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 border border-gold-500/20 hover:border-gold-500 text-maroon-800 transition-colors"
                >
                  <IconPhone className="h-3.5 w-3.5 text-gold-600" />
                  <span>{contact.name}:</span>
                  <span className="font-semibold">{contact.phone}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Final Blessing & Footer */}
        <div className="mt-16 text-center space-y-4">
          <div className="flex justify-center text-gold-600">
            <LotusMotif className="h-8 w-8" />
          </div>

          <h3 className="font-royal text-2xl sm:text-3xl font-bold text-maroon-900">
            {bride.firstName} & {groom.firstName}
          </h3>

          <p className="font-serif italic text-sm text-neutral-600 max-w-sm mx-auto">
            Thank you for being an indispensable part of our lives, our stories, and our celebrations.
          </p>

          <p className="text-xs font-sans text-gold-800 font-semibold tracking-widest uppercase pt-2">
            {wedding.displayDate} • {WEDDING_CONFIG.venue.city}
          </p>

          <p className="text-[11px] font-sans text-neutral-400 pt-6">
            {wedding.hashtag} • Designed with love for family & guests
          </p>
        </div>
      </div>
    </section>
  );
}

