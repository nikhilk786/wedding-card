"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { IconLanguage } from "@tabler/icons-react";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-3 right-3 sm:top-5 sm:right-6 z-50 flex items-center">
      <div className="flex items-center rounded-full border border-gold-400/60 bg-[#1D040A]/95 p-1 shadow-2xl shadow-black/80 backdrop-blur-md">
        <button
          type="button"
          onClick={() => setLang("en")}
          className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-sans font-semibold tracking-wider transition-all duration-200 ${
            lang === "en"
              ? "bg-gradient-to-r from-gold-500 to-amber-600 text-[#1B0307] shadow-md shadow-gold-500/30 scale-105"
              : "text-gold-200/70 hover:text-gold-100"
          }`}
          aria-label="Switch to English"
        >
          <span>English</span>
        </button>

        <button
          type="button"
          onClick={() => setLang("hi")}
          className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-serif font-bold tracking-wide transition-all duration-200 ${
            lang === "hi"
              ? "bg-gradient-to-r from-gold-500 to-amber-600 text-[#1B0307] shadow-md shadow-gold-500/30 scale-105"
              : "text-gold-200/70 hover:text-gold-100"
          }`}
          aria-label="हिंदी में बदलें"
        >
          <span>हिंदी</span>
        </button>
      </div>
    </div>
  );
}

