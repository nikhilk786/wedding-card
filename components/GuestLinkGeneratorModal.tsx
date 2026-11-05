"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import {
  IconX,
  IconCopy,
  IconCheck,
  IconBrandWhatsapp,
  IconEye,
  IconLink,
  IconSparkles,
  IconUserHeart,
} from "@tabler/icons-react";

interface GuestLinkGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GuestLinkGeneratorModal({ isOpen, onClose }: GuestLinkGeneratorModalProps) {
  const { lang, config, guestName, setGuestName } = useLanguage();
  const [inputName, setInputName] = useState("");
  const [copied, setCopied] = useState(false);
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Clean /nikhil786 or admin slugs so shared guest links point to the clean wedding invitation root
      const cleanPath = window.location.pathname.replace(/\/nikhil786\/?/gi, "/");
      const normalizedPath =
        cleanPath.endsWith("/") && cleanPath.length > 1 ? cleanPath.slice(0, -1) : cleanPath;
      const base = window.location.origin + (normalizedPath === "/" ? "" : normalizedPath);
      setOrigin(base);
    }
    if (guestName) {
      setInputName(guestName);
    }
  }, [guestName, isOpen]);

  if (!isOpen) return null;

  const trimmed = inputName.trim();
  const generatedUrl = origin ? (trimmed ? `${origin}?to=${encodeURIComponent(trimmed)}` : origin) : "";

  const handleCopyLink = async () => {
    if (!generatedUrl) return;
    try {
      await navigator.clipboard.writeText(generatedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = generatedUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShareWhatsapp = () => {
    const greetingGuest = trimmed || (lang === "hi" ? "सपरिवार" : "Family & Friends");
    let text = "";

    if (lang === "hi") {
      text = `⚜️ *श्री गणेशाय नमः* ⚜️\n\n` +
        `स्नेही *${greetingGuest}*,\n\n` +
        `कुमावत परिवार की ओर से आपको एवं आपके परिवार को *हिमानी संग मनोज* के पावन विवाह समारोह में सादर आमंत्रित किया जाता है।\n\n` +
        `📅 *शुभ विवाह:* रविवार, 1 मार्च 2026\n` +
        `⏰ *शुभ मुहूर्त:* सायं 07:15 बजे से\n` +
        `📍 *स्थान:* राधा कृष्णा मैरिज गार्डन, मानसरोवर, जयपुर\n\n` +
        `✨ *आपके लिए विशेष व्यक्तिगत डिजिटल आमंत्रण पत्र खोलें:*\n` +
        `${generatedUrl}\n\n` +
        `आपकी गरिमामयी उपस्थिति हमारे इस मांगलिक उत्सव की शोभा बढ़ाएगी।\n` +
        `🙏 - कुमावत परिवार`;
    } else {
      text = `⚜️ *Shree Ganeshay Namah* ⚜️\n\n` +
        `Dear *${greetingGuest}*,\n\n` +
        `Kumawat Family cordially invites you and your family to celebrate the wedding ceremony of *Himani & Manoj*.\n\n` +
        `📅 *Wedding Date:* Sunday, 1st March 2026\n` +
        `⏰ *Auspicious Muhurat:* 07:15 PM Onwards\n` +
        `📍 *Venue:* Radha Krishna Marriage Garden, Mansarovar, Jaipur\n\n` +
        `✨ *Open your personalized royal digital invitation:*\n` +
        `${generatedUrl}\n\n` +
        `We look forward to your gracious presence and blessings.\n` +
        `🙏 - Kumawat Family`;
    }

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleApplyPreview = () => {
    setGuestName(trimmed);
    if (typeof window !== "undefined") {
      const newUrl = trimmed ? `${window.location.pathname}?to=${encodeURIComponent(trimmed)}` : window.location.pathname;
      window.history.replaceState({}, "", newUrl);
    }
    onClose();
  };

  const appendSuffix = (suffix: string) => {
    if (!trimmed) {
      setInputName(suffix.trim());
    } else if (!trimmed.includes(suffix.trim())) {
      setInputName(`${trimmed} ${suffix.trim()}`);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-lg rounded-3xl border-2 border-gold-400/80 bg-gradient-to-b from-[#25050C] via-[#1A0308] to-[#120104] p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-h-[92vh] overflow-y-auto"
        >
          {/* Ornate Gold Trim */}
          <div className="absolute inset-1.5 sm:inset-2 rounded-2xl border border-dashed border-gold-400/30 pointer-events-none" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-gold-500/40 bg-[#160205] text-gold-300 hover:text-gold-100 hover:border-gold-300 transition-colors"
            aria-label="Close"
          >
            <IconX className="h-4 w-4" />
          </button>

          {/* Header */}
          <div className="text-center mb-5">
            <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/80 bg-gradient-to-br from-gold-500/20 via-maroon-900 to-[#120104] shadow-md">
              <IconUserHeart className="h-6 w-6 text-gold-300" />
            </div>
            <h3 className="font-royal text-xl sm:text-2xl font-extrabold text-gold-200">
              {lang === "hi" ? "शाही गेस्ट लिंक जनरेटर" : "Royal Guest Link Generator"}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-gold-300/80 font-sans max-w-sm mx-auto">
              {lang === "hi"
                ? "अपने रिश्तेदारों व मित्रों के नाम का व्यक्तिगत निमंत्रण लिंक बनाएं और सीधे WhatsApp पर भेजें।"
                : "Create personalized wedding invitation links for relatives & friends, and share directly via WhatsApp."}
            </p>
          </div>

          {/* Guest Name Input */}
          <div className="space-y-2 mb-4">
            <label className="block text-xs font-serif font-bold uppercase tracking-wider text-gold-300">
              {lang === "hi" ? "अतिथि का नाम लिखें:" : "Enter Guest Name:"}
            </label>
            <div className="relative">
              <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder={lang === "hi" ? "उदा. शर्मा जी, राहुल भैया, गुप्ता जी" : "e.g. Sharma Ji, Rahul, Gupta Family"}
                className="w-full rounded-xl border border-gold-400/50 bg-[#120205]/90 px-4 py-3 text-sm text-ivory-100 placeholder-gold-400/35 focus:border-gold-300 focus:outline-none focus:ring-2 focus:ring-gold-400/30"
              />
              {inputName && (
                <button
                  type="button"
                  onClick={() => setInputName("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gold-400/60 hover:text-gold-200"
                >
                  <IconX className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Quick Suffix Chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] font-sans text-gold-400/70 mr-1">
                {lang === "hi" ? "त्वरित जोड़ें:" : "Quick add:"}
              </span>
              {[
                { label: "+ With Family", suffix: "With Family" },
                { label: "+ Ji", suffix: "Ji" },
                { label: "+ Ji With Family", suffix: "Ji With Family" },
                { label: "+ & Family", suffix: "& Family" },
              ].map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => appendSuffix(chip.suffix)}
                  className="rounded-full border border-gold-500/40 bg-gold-500/10 px-2.5 py-0.5 text-[11px] font-sans font-semibold text-gold-300 hover:border-gold-300 hover:bg-gold-500/25 active:scale-95 transition-all"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

          {/* Generated Link Preview */}
          <div className="rounded-xl border border-gold-500/30 bg-[#100104]/90 p-3 mb-5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-gold-400 flex items-center gap-1">
                <IconLink className="h-3.5 w-3.5" />
                {lang === "hi" ? "तैयार व्यक्तिगत लिंक:" : "Generated Custom Link:"}
              </span>
              {trimmed && (
                <span className="text-[10px] text-gold-300 font-sans truncate max-w-[140px]">
                  ⚜️ {trimmed}
                </span>
              )}
            </div>
            <div className="rounded bg-black/50 px-2.5 py-2 font-mono text-[11px] text-gold-200/90 break-all select-all border border-gold-500/20 max-h-16 overflow-y-auto">
              {generatedUrl}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2.5">
            {/* Primary Action: Share directly to WhatsApp */}
            <button
              type="button"
              onClick={handleShareWhatsapp}
              className="w-full flex items-center justify-center gap-2 rounded-xl border border-emerald-400 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 py-3 px-4 text-xs sm:text-sm font-sans font-bold tracking-wide text-white shadow-lg shadow-emerald-950/50 hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <IconBrandWhatsapp className="h-5 w-5 text-white" />
              <span>
                {lang === "hi"
                  ? trimmed
                    ? `"${trimmed}" के नाम से WhatsApp पर भेजें`
                    : "WhatsApp पर आमंत्रण भेजें"
                  : trimmed
                    ? `Share for "${trimmed}" on WhatsApp`
                    : "Share Invitation on WhatsApp"}
              </span>
            </button>

            {/* Secondary Actions: Copy Link & Preview on Screen */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-gold-400/70 bg-gradient-to-r from-gold-500/20 via-gold-400/30 to-gold-500/20 py-2.5 px-3 text-xs font-sans font-bold text-gold-100 hover:border-gold-300 hover:bg-gold-500/35 active:scale-95 transition-all"
              >
                {copied ? (
                  <>
                    <IconCheck className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-300">{lang === "hi" ? "कॉपी हो गया!" : "Copied!"}</span>
                  </>
                ) : (
                  <>
                    <IconCopy className="h-4 w-4 text-gold-300" />
                    <span>{lang === "hi" ? "लिंक कॉपी करें" : "Copy Link"}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleApplyPreview}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-gold-500/40 bg-[#1A0308] py-2.5 px-3 text-xs font-sans font-medium text-gold-300 hover:border-gold-400 hover:text-gold-100 active:scale-95 transition-all"
              >
                <IconEye className="h-4 w-4 text-gold-400" />
                <span>{lang === "hi" ? "स्क्रीन पर देखें" : "Preview Here"}</span>
              </button>
            </div>
          </div>

          {/* Quick Tip */}
          <p className="mt-4 text-center text-[10px] sm:text-[11px] text-gold-400/60 font-sans">
            {lang === "hi"
              ? "💡 टिप: जब आपके मेहमान यह लिंक खोलेंगे, तो महल के मुख्य द्वार और आमंत्रण पत्र पर उनका नाम लिखा दिखाई देगा।"
              : "💡 Tip: When your guests open this link, their name will appear on the palace gates and royal invitation."}
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

