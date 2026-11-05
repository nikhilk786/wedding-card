"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { OrnateDivider, LotusMotif, CornerOrnament } from "./RoyalMotifs";
import {
  IconShare,
  IconBrandWhatsapp,
  IconPhone,
  IconCheck,
} from "@tabler/icons-react";

export function RsvpAndShare() {
  const { config, lang } = useLanguage();
  const { rsvp, socialSharing, bride, groom, wedding } = config;
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: socialSharing.title,
          text: socialSharing.text,
          url: window.location.href,
        });
      } catch (err) {}
    } else {
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
    <section id="rsvp" className="py-12 sm:py-20 relative">
      <div className="container mx-auto max-w-4xl px-3 sm:px-6">
        <div className="relative rounded-3xl border border-gold-500/40 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EF] to-[#F5ECE0] p-6 sm:p-12 shadow-xl shadow-maroon-900/5 text-center ornamental-frame">
          <div className="absolute top-2.5 left-2.5">
            <CornerOrnament position="top-left" />
          </div>
          <div className="absolute top-2.5 right-2.5">
            <CornerOrnament position="top-right" />
          </div>

          <span className="text-xs font-sans tracking-[0.25em] uppercase text-maroon-700 font-semibold block">
            {config.ui.rsvpTag}
          </span>

          <h2 className="font-royal text-3xl sm:text-4xl font-bold text-maroon-900 mt-1">
            {config.ui.rsvpTitle}
          </h2>

          <p className="font-serif italic text-xs sm:text-base text-neutral-600 max-w-md mx-auto mt-2 px-2">
            {config.ui.rsvpSubtitle}
          </p>

          <OrnateDivider className="my-5 sm:my-6" />

          {/* Action Buttons: WhatsApp RSVP & Share */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-emerald-600 bg-emerald-700 px-7 py-3.5 text-xs sm:text-sm font-sans font-semibold tracking-wider uppercase text-white shadow-md shadow-emerald-950/20 hover:bg-emerald-600 active:scale-95 transition-all"
            >
              <IconBrandWhatsapp className="h-4 w-4" />
              <span>{config.ui.rsvpWhatsappBtn}</span>
            </a>

            <button
              type="button"
              onClick={handleShare}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gold-500 bg-gradient-to-r from-maroon-700 via-maroon-800 to-maroon-900 px-7 py-3.5 text-xs sm:text-sm font-sans font-semibold tracking-wider uppercase text-ivory-100 shadow-md shadow-maroon-950/20 active:scale-95 transition-all"
            >
              {copiedLink ? (
                <>
                  <IconCheck className="h-4 w-4 text-emerald-400" />
                  <span>{config.ui.shareCopiedBtn}</span>
                </>
              ) : (
                <>
                  <IconShare className="h-4 w-4 text-gold-400" />
                  <span>{config.ui.shareBtn}</span>
                </>
              )}
            </button>
          </div>

          {/* Contact Numbers */}
          <div className="mt-8 pt-6 border-t border-gold-500/20">
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-wider text-neutral-500 block mb-3">
              {config.ui.assistanceLabel}
            </span>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs font-sans text-neutral-700">
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
        <div className="mt-12 sm:mt-16 text-center space-y-3 sm:space-y-4">
          <div className="flex justify-center text-gold-600">
            <LotusMotif className="h-7 w-7 sm:h-8 sm:w-8" />
          </div>

          <h3 className="font-royal text-2xl sm:text-3xl font-bold text-maroon-900">
            {bride.firstName} {lang === "hi" ? "संग" : "&"} {groom.firstName}
          </h3>

          <p className="font-serif italic text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto px-2">
            {config.ui.footerThanks}
          </p>

          <p className="text-xs font-sans text-gold-800 font-semibold tracking-widest uppercase pt-1">
            {wedding.displayDate} • {config.venue.city}
          </p>

          <p className="text-[10px] sm:text-[11px] font-sans text-neutral-400 pt-4">
            {wedding.hashtag} • {config.ui.designedWithLove}
          </p>
        </div>
      </div>
    </section>
  );
}
