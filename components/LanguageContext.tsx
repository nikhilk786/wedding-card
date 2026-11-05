"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { WeddingConfig, getWeddingConfig } from "@/config/wedding";

interface LanguageContextType {
  lang: "en" | "hi";
  setLang: (lang: "en" | "hi") => void;
  toggleLang: () => void;
  config: WeddingConfig;
  guestName: string;
  setGuestName: (name: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<"en" | "hi">("en");
  const [guestName, setGuestName] = useState<string>("");

  // Read guest name from URL query parameter (?to=Name or ?guest=Name or ?name=Name)
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const params = new URLSearchParams(window.location.search);
        const guest = params.get("to") || params.get("guest") || params.get("name");
        if (guest && guest.trim()) {
          setGuestName(guest.trim());
        }
      } catch {}
    }
  }, []);

  // Load preferred language from localStorage if available
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("wedding_lang") as "en" | "hi";
      if (savedLang === "en" || savedLang === "hi") {
        setLangState(savedLang);
      }
    } catch {}
  }, []);

  const setLang = (newLang: "en" | "hi") => {
    setLangState(newLang);
    try {
      localStorage.setItem("wedding_lang", newLang);
    } catch {}
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "hi" : "en");
  };

  const config = getWeddingConfig(lang);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang, config, guestName, setGuestName }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

