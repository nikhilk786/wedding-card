"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "./LanguageContext";
import { royalSound } from "@/lib/sound";
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconMusic,
  IconVolume,
  IconVolumeOff,
} from "@tabler/icons-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

export function AudioControl() {
  const { config, lang } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // 1. Inject YouTube IFrame API script if not already present
    if (typeof window !== "undefined" && !window.YT) {
      const existingScript = document.getElementById("youtube-iframe-api-script");
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api-script";
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      }
    }

    // 2. Initialize YouTube Player
    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;
      if (playerRef.current) return;

      try {
        playerRef.current = new window.YT.Player("royal-youtube-audio-player", {
          videoId: config.music.youtubeVideoId,
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            playlist: config.music.youtubeVideoId, // Required by YouTube to loop single video
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
          },
          events: {
            onReady: (event: any) => {
              setIsReady(true);
              try {
                event.target.setVolume(80);
              } catch {}
            },
            onStateChange: (event: any) => {
              if (window.YT) {
                if (event.data === window.YT.PlayerState.PLAYING) {
                  setIsPlaying(true);
                } else if (
                  event.data === window.YT.PlayerState.PAUSED ||
                  event.data === window.YT.PlayerState.ENDED
                ) {
                  if (event.data === window.YT.PlayerState.ENDED) {
                    // Loop playback smoothly
                    try {
                      event.target.playVideo();
                    } catch {}
                  } else {
                    setIsPlaying(false);
                  }
                }
              }
            },
            onError: (err: any) => {
              console.warn("YouTube player encountered an error:", err);
              setHasError(true);
            },
          },
        });
      } catch (err) {
        console.warn("Could not initialize YouTube player:", err);
        setHasError(true);
      }
    };

    if (typeof window !== "undefined") {
      if (window.YT && window.YT.Player) {
        initPlayer();
      } else {
        const prevReady = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          if (prevReady) prevReady();
          initPlayer();
        };
      }
    }

    // 3. Listen to user entrance gesture from palace doors
    const handleStartMusic = () => {
      if (playerRef.current && typeof playerRef.current.playVideo === "function") {
        try {
          playerRef.current.playVideo();
          setIsPlaying(true);
        } catch (e) {
          console.warn("Autoplay was prevented, user can click music button", e);
        }
      }
    };

    window.addEventListener("start-royal-music", handleStartMusic);

    return () => {
      window.removeEventListener("start-royal-music", handleStartMusic);
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        try {
          playerRef.current.destroy();
          playerRef.current = null;
        } catch {}
      }
    };
  }, [config.music.youtubeVideoId]);

  // Toggle Play / Pause on clicking the bottom music button
  const togglePlayPause = () => {
    if (playerRef.current && isReady && !hasError && typeof playerRef.current.playVideo === "function") {
      try {
        if (isPlaying) {
          playerRef.current.pauseVideo();
          setIsPlaying(false);
        } else {
          playerRef.current.playVideo();
          setIsPlaying(true);
        }
        return;
      } catch (e) {
        console.warn("Error toggling YouTube audio, falling back to Web Audio", e);
      }
    }

    // Graceful Fallback to procedural royal audio if YouTube API is blocked or offline
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    royalSound.setMuted(!nextState);
    if (nextState) {
      royalSound.startRoyalAmbience();
      royalSound.playGoldenChimes();
    }
  };

  return (
    <>
      {/* Offscreen YouTube Audio Embed Container (kept in DOM with positive size so browsers don't suspend audio) */}
      <div
        className="fixed -bottom-96 -right-96 w-48 h-48 opacity-0 pointer-events-none overflow-hidden -z-50"
        aria-hidden="true"
      >
        <div id="royal-youtube-audio-player" />
      </div>

      {/* Floating Bottom-Right Royal Music Icon & Controller */}
      <aside
        aria-label="Royal Music Player"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center"
      >
        <button
          type="button"
          onClick={togglePlayPause}
          className={`group relative flex items-center gap-2.5 rounded-full border px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-serif tracking-wider uppercase shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 ${
            isPlaying
              ? "border-gold-300 bg-gradient-to-r from-maroon-900/95 via-[#2E050D]/95 to-maroon-900/95 text-gold-200 shadow-gold-500/20 ring-2 ring-gold-400/30"
              : "border-gold-500/40 bg-[#1A0307]/90 text-gold-300/80 hover:border-gold-400 hover:text-gold-100"
          }`}
          title={isPlaying ? config.ui.musicTooltipPause : config.ui.musicTooltipPlay}
          aria-label={isPlaying ? config.ui.musicTooltipPause : config.ui.musicTooltipPlay}
        >
          {/* Main Icon (Play / Pause / Music) */}
          <span className="relative flex h-5 w-5 items-center justify-center text-gold-300">
            {isPlaying ? (
              <IconPlayerPause className="h-4 w-4 text-gold-300 transition-transform group-hover:scale-110" />
            ) : (
              <IconPlayerPlay className="h-4 w-4 text-gold-400 transition-transform group-hover:scale-110 ml-0.5" />
            )}
          </span>

          {/* Label text */}
          <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-wide text-gold-200">
            {isPlaying ? config.ui.musicPlaying : config.ui.musicPaused}
          </span>

          {/* Equalizer Waveform Bars when playing */}
          {isPlaying ? (
            <span className="flex items-center gap-0.5 h-3 ml-0.5">
              <span className="w-0.5 h-2.5 bg-gold-400 rounded-full animate-[gentlePulse_0.8s_ease-in-out_infinite]" />
              <span className="w-0.5 h-3.5 bg-gold-300 rounded-full animate-[gentlePulse_1.1s_ease-in-out_infinite_0.2s]" />
              <span className="w-0.5 h-1.5 bg-gold-400 rounded-full animate-[gentlePulse_0.6s_ease-in-out_infinite_0.4s]" />
            </span>
          ) : (
            <IconMusic className="h-3.5 w-3.5 text-gold-400/50" />
          )}
        </button>
      </aside>
    </>
  );
}