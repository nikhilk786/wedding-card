"use client";

import React, { useState, useEffect } from "react";
import { royalSound } from "@/lib/sound";
import { IconVolume, IconVolumeOff, IconSparkles } from "@tabler/icons-react";

export function AudioControl() {
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    setIsMuted(royalSound.getIsMuted());
  }, []);

  const toggleAudio = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    royalSound.setMuted(nextState);
    if (!nextState && !hasInteracted) {
      setHasInteracted(true);
      royalSound.startRoyalAmbience();
      royalSound.playGoldenChimes();
    }
  };

  return (
    <aside
      aria-label="Audio controls"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2"
    >
      <button
        type="button"
        onClick={toggleAudio}
        className="group relative flex items-center gap-2.5 rounded-full border border-gold-400/50 bg-[#2B0E14]/90 px-4 py-2.5 text-xs font-serif tracking-widest uppercase text-gold-300 shadow-xl shadow-black/40 backdrop-blur-md transition-all duration-300 hover:border-gold-300 hover:scale-105 active:scale-95"
        title={isMuted ? "Unmute Royal Ambience" : "Mute Ambience"}
        aria-label={isMuted ? "Unmute Royal Ambience" : "Mute Royal Ambience"}
      >
        <span className="relative flex h-5 w-5 items-center justify-center text-gold-400">
          {isMuted ? (
            <IconVolumeOff className="h-4 w-4 text-neutral-400" />
          ) : (
            <IconVolume className="h-4 w-4 text-gold-400 animate-pulse" />
          )}
        </span>

        <span className="hidden sm:inline font-sans text-[11px] font-semibold text-gold-200">
          {isMuted ? "Royal Music: Off" : "Royal Ambience"}
        </span>

        {/* Animated sound wave bars when unmuted */}
        {!isMuted && (
          <span className="flex items-center gap-0.5 h-3">
            <span className="w-0.5 h-2 bg-gold-400 rounded-full animate-[gentlePulse_0.8s_ease-in-out_infinite]" />
            <span className="w-0.5 h-3 bg-gold-400 rounded-full animate-[gentlePulse_1.2s_ease-in-out_infinite_0.2s]" />
            <span className="w-0.5 h-1.5 bg-gold-400 rounded-full animate-[gentlePulse_0.6s_ease-in-out_infinite_0.4s]" />
          </span>
        )}
      </button>
    </aside>
  );
}

