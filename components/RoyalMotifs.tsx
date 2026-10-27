import React from "react";

export function GaneshaMotif({ className = "h-14 w-14 text-gold-500" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lord Ganesha Emblem"
    >
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      {/* Crown / Mukut */}
      <path
        d="M44 26L50 16L56 26H44Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="14" r="2" fill="currentColor" />
      {/* Forehead & Tilak */}
      <path
        d="M38 29C43 27 57 27 62 29"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M50 25V33"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="50" cy="36" r="2" fill="currentColor" />
      {/* Ears */}
      <path
        d="M36 32C30 34 26 42 30 50C33 54 36 54 39 52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M64 32C70 34 74 42 70 50C67 54 64 54 61 52"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Trunk (Sond) */}
      <path
        d="M44 42C44 48 46 62 52 68C56 72 63 71 64 65C65 60 61 57 58 59"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Modak in trunk */}
      <circle cx="60" cy="57" r="2.5" fill="currentColor" />
      {/* Modak bowl hand */}
      <path
        d="M35 60C38 65 42 66 45 64"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function OrnateDivider({ className = "w-full my-6" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[1px] flex-1 max-w-[120px] sm:max-w-[180px] bg-gradient-to-r from-transparent via-gold-500/50 to-gold-500" />
      <div className="flex items-center gap-1.5 text-gold-500">
        <span className="text-[10px]">❖</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold-500">
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="currentColor"
            fillOpacity="0.15"
          />
        </svg>
        <span className="text-[10px]">❖</span>
      </div>
      <div className="h-[1px] flex-1 max-w-[120px] sm:max-w-[180px] bg-gradient-to-l from-transparent via-gold-500/50 to-gold-500" />
    </div>
  );
}

export function CornerOrnament({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const getRotation = () => {
    switch (position) {
      case "top-left":
        return "";
      case "top-right":
        return "rotate-90";
      case "bottom-right":
        return "rotate-180";
      case "bottom-left":
        return "-rotate-90";
    }
  };

  return (
    <div className={`pointer-events-none select-none text-gold-500/60 ${getRotation()}`}>
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <path
          d="M2 40V12C2 6.47715 6.47715 2 12 2H40"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 40V16C8 11.5817 11.5817 8 16 8H40"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
        <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
        <circle cx="2" cy="40" r="1.5" fill="currentColor" />
        <circle cx="40" cy="2" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
}

export function LotusMotif({ className = "h-8 w-8 text-gold-500" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 36" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25 4C25 14 21 24 15 28C21 28 25 24 25 24C25 24 29 28 35 28C29 24 25 14 25 4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M25 12C21 18 13 24 5 25C12 27 20 25 23 23"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M25 12C29 18 37 24 45 25C38 27 30 25 27 23"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M16 28C22 30 28 30 34 28"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PalaceArchSilhouette({ className = "w-full text-gold-500/25" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 120" fill="none" preserveAspectRatio="none" className={className}>
      <path
        d="M0 120V90C70 90 120 70 170 50C220 30 260 10 300 0C340 10 380 30 430 50C480 70 530 90 600 90V120H0Z"
        fill="currentColor"
        fillOpacity="0.15"
      />
      <path
        d="M0 90C70 90 120 70 170 50C220 30 260 10 300 0C340 10 380 30 430 50C480 70 530 90 600 90"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

