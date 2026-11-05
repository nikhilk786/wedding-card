"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { OrnateDivider, LotusMotif, CornerOrnament } from "./RoyalMotifs";
import {
  IconBrandWhatsapp,
  IconPhone,
  IconSend,
} from "@tabler/icons-react";

export function RsvpAndShare() {
  const { config, lang } = useLanguage();
  const { rsvp } = config;

  const [guestName, setGuestName] = useState("");
  const [blessingMessage, setBlessingMessage] = useState("");

  const quickWishes =
    lang === "hi"
      ? [
          "सदा सुखी रहो, अखंड सौभाग्य! 🌸",
          "हार्दिक बधाई एवं मंगलकामनाएं! 💐",
          "ईश्वर आप दोनों को सदा खुश रखे! ✨",
          "सुख, समृद्धि और खुशियों भरा दांपत्य जीवन रहे! 🪔",
        ]
      : [
          "Wishing you endless joy and happiness! 🌸",
          "Heartiest congratulations to the lovely couple! 💐",
          "May God shower you with eternal love and harmony! ✨",
          "A lifetime of togetherness and blessings! 🪔",
        ];

  const handleQuickWish = (wish: string) => {
    setBlessingMessage((prev) => (prev ? `${prev} ${wish}` : wish));
  };

  const handleSendViaWhatsapp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const formattedMessage = blessingMessage.trim()
      ? `"${blessingMessage.trim()}"`
      : lang === "hi"
      ? '"मनोज एवं हिमानी को पावन विवाह की हार्दिक बधाई एवं मंगलमय शुभकामनाएं!"'
      : '"Wishing Manoj & Himani a blessed and blissful married life!"';

    const sender = guestName.trim()
      ? `- ${guestName.trim()}`
      : lang === "hi"
      ? "- स्नेही स्वजन / अतिथि"
      : "- Well-wisher";

    const textToSend = `नमस्ते! मनोज एवं हिमानी के शुभ विवाह हेतु हार्दिक शुभकामना संदेश:\n\n${formattedMessage}\n\n${sender}`;

    const url = `https://wa.me/${rsvp.whatsappNumber}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

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

          {/* Section Tag */}
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-maroon-700 font-semibold block">
            {config.ui.rsvpTag}
          </span>

          {/* Section Title */}
          <h2 className="font-royal text-2xl sm:text-4xl font-bold text-maroon-900 mt-1">
            {config.ui.rsvpTitle}
          </h2>

          <p className="font-serif italic text-xs sm:text-base text-neutral-600 max-w-lg mx-auto mt-2 px-2">
            {config.ui.rsvpSubtitle}
          </p>

          <OrnateDivider className="my-5 sm:my-6" />

          {/* INTERACTIVE BLESSING FORM SENT DIRECTLY VIA WHATSAPP */}
          <form onSubmit={handleSendViaWhatsapp} className="max-w-lg mx-auto text-left space-y-4">
            {/* Guest Name Input */}
            <div>
              <label className="block text-xs font-sans font-bold uppercase tracking-wider text-maroon-900 mb-1">
                {lang === "hi" ? "आपका शुभ नाम" : "Your Name"}
              </label>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder={config.ui.blessingNamePlaceholder}
                className="w-full rounded-xl border border-gold-500/50 bg-white/90 px-4 py-2.5 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 shadow-sm"
              />
            </div>

            {/* Blessing Message Textarea */}
            <div>
              <label className="block text-xs font-sans font-bold uppercase tracking-wider text-maroon-900 mb-1">
                {lang === "hi" ? "वर-वधु हेतु शुभकामना संदेश" : "Blessing Message"}
              </label>
              <textarea
                rows={3}
                value={blessingMessage}
                onChange={(e) => setBlessingMessage(e.target.value)}
                placeholder={config.ui.blessingMessagePlaceholder}
                className="w-full rounded-xl border border-gold-500/50 bg-white/90 p-3 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-500 shadow-sm resize-none"
              />
            </div>

            {/* Quick Wish Suggestion Chips */}
            <div>
              <span className="text-[10px] sm:text-xs font-sans text-neutral-500 block mb-1.5 font-medium">
                {lang === "hi" ? "त्वरित शुभकामना चुनें (Click to add):" : "Quick blessing suggestions:"}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickWishes.map((wish, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleQuickWish(wish)}
                    className="text-[11px] rounded-full border border-gold-500/40 bg-white/80 px-2.5 py-1 text-maroon-900 hover:bg-gold-50 hover:border-gold-500 transition-colors"
                  >
                    {wish}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-full border border-emerald-500 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 px-6 py-3.5 text-xs sm:text-sm font-sans font-bold tracking-wider uppercase text-white shadow-lg shadow-emerald-950/25 hover:from-emerald-500 hover:to-emerald-700 hover:scale-[1.01] active:scale-95 transition-all"
              >
                <IconBrandWhatsapp className="h-5 w-5 text-white" />
                <span>{config.ui.rsvpWhatsappBtn}</span>
                <IconSend className="h-4 w-4 text-emerald-200" />
              </button>
            </div>
          </form>

          {/* Assistance & Inquiries Contact Numbers */}
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

          <p className="font-royal text-xl sm:text-2xl font-bold text-maroon-900">
            {lang === "hi" ? "|| शुभाशीष एवं धन्यवाद ||" : "|| Seeking Blessings & Eternal Gratitude ||"}
          </p>

          <p className="font-serif italic text-xs sm:text-sm text-neutral-600 max-w-md mx-auto px-4">
            &ldquo;{config.ui.footerThanks}&rdquo;
          </p>

          <div className="text-[11px] font-sans text-neutral-500 pt-2">
            <p className="font-semibold text-maroon-900">
              {config.bride.firstName} & {config.groom.firstName} • {config.wedding.displayDate}
            </p>
            <p className="mt-0.5 text-gold-700/80">{config.ui.designedWithLove}</p>
          </div>
        </div>
      </div>
    </section>
  );
}