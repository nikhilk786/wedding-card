"use client";

// Web Audio API procedural sound engine for Royal Indian Palace Experience
// Generates authentic acoustic effects (Temple Bell, Heavy Wooden Doors, Brass Lock Click, Magical Chimes, and Royal Ambient Drone)
// without external MP3 dependencies.

class RoyalSoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private ambientGain: GainNode | null = null;
  private isAmbientPlaying: boolean = false;
  private oscillators: OscillatorNode[] = [];

  private initContext() {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.ambientGain) {
      this.ambientGain.gain.setTargetAtTime(muted ? 0 : 0.08, this.ctx?.currentTime || 0, 0.1);
    }
  }

  public getIsMuted() {
    return this.isMuted;
  }

  // 1. Heavy Royal Palace Door Opening Sound (Deep wooden rumble + friction resonance)
  public playDoorOpen() {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Sub-bass heavy wood resonance
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();
    subOsc.type = "sine";
    subOsc.frequency.setValueAtTime(65, now);
    subOsc.frequency.exponentialRampToValueAtTime(32, now + 1.8);
    subGain.gain.setValueAtTime(0.3, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);
    subOsc.connect(subGain);
    subGain.connect(ctx.destination);
    subOsc.start(now);
    subOsc.stop(now + 2.1);

    // Friction rumble buffer
    const bufferSize = ctx.sampleRate * 1.5;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.8));
    }
    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(140, now);
    filter.frequency.linearRampToValueAtTime(90, now + 1.5);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.18, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 1.6);

    whiteNoise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    whiteNoise.start(now);
  }

  // 2. Sacred Temple Bell / Brass Gong Sound
  public playTempleGong() {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const fundamental = 216; // Deep soothing Indian temple bell frequency (approx A3)
    const harmonics = [1, 2.76, 4.07, 5.4, 6.8];
    const gains = [0.4, 0.22, 0.15, 0.08, 0.04];

    harmonics.forEach((ratio, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(fundamental * ratio, now);

      const decayTime = 2.5 + i * 0.3;
      gain.gain.setValueAtTime(gains[i], now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + decayTime);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + decayTime + 0.1);
    });
  }

  // 3. Antique Brass Lock Click & Tumbler Unlock Sound
  public playLockClick() {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // First click (tumbler rotate)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = "triangle";
    osc1.frequency.setValueAtTime(800, now);
    osc1.frequency.exponentialRampToValueAtTime(250, now + 0.08);
    gain1.gain.setValueAtTime(0.35, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.1);

    // Second heavier metallic latch release (after 120ms)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(440, now + 0.12);
    osc2.frequency.exponentialRampToValueAtTime(110, now + 0.3);
    gain2.gain.setValueAtTime(0, now);
    gain2.gain.setValueAtTime(0.4, now + 0.12);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.12);
    osc2.stop(now + 0.4);
  }

  // 4. Magical Golden Sparkle Chimes (Ascending Celestial Pentatonic Raga notes)
  public playGoldenChimes() {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Raga Bhupali / Pentatonic ascending frequencies: Sa, Re, Ga, Pa, Dha, Sa'
    const notes = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1318.51, 1567.98];

    notes.forEach((freq, idx) => {
      const startTime = now + idx * 0.09;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.18, startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.9);
    });
  }

  // 5. Royal Ambient Meditative Indian Drone (Tanpura harmonic resonance)
  public startRoyalAmbience() {
    if (this.isAmbientPlaying) return;
    const ctx = this.initContext();
    if (!ctx) return;

    this.isAmbientPlaying = true;
    const now = ctx.currentTime;

    this.ambientGain = ctx.createGain();
    this.ambientGain.gain.setValueAtTime(0.0001, now);
    this.ambientGain.gain.linearRampToValueAtTime(this.isMuted ? 0 : 0.07, now + 3.0);
    this.ambientGain.connect(ctx.destination);

    // Root notes in Indian classical C# (approx 138.59 Hz)
    const baseFreq = 138.59;
    const partials = [
      { f: baseFreq * 0.5, type: "sine" as OscillatorType, g: 0.4 }, // Low root
      { f: baseFreq, type: "triangle" as OscillatorType, g: 0.3 },   // Root Sa
      { f: baseFreq * 1.5, type: "sine" as OscillatorType, g: 0.25 }, // Pa (Fifth)
      { f: baseFreq * 2.0, type: "sine" as OscillatorType, g: 0.15 }, // High Sa
    ];

    this.oscillators = partials.map((p) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = p.type;
      osc.frequency.setValueAtTime(p.f, now);

      // Subtle slow frequency modulation for natural acoustic pulsation
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(0.2 + Math.random() * 0.1, now);
      lfoGain.gain.setValueAtTime(0.8, now);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start(now);

      gain.gain.setValueAtTime(p.g, now);
      osc.connect(gain);
      gain.connect(this.ambientGain!);
      osc.start(now);
      return osc;
    });
  }

  public stopRoyalAmbience() {
    if (!this.isAmbientPlaying) return;
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);
    }
    setTimeout(() => {
      this.oscillators.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {}
      });
      this.oscillators = [];
      this.isAmbientPlaying = false;
    }, 1600);
  }
}

export const royalSound = new RoyalSoundEngine();

