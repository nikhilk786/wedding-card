# 👑 Royal Indian Wedding Invitation — The Treasure Vault Experience

An ultra-luxurious, cinematic, interactive royal Indian wedding invitation website built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Web Audio API**.

Created for **Manoj Kumawat & Himani Kumawat** (Wedding Date: **Sunday, 1st March 2026**).

---

## 🌟 The Cinematic Journey (Scene-by-Scene)

### 🚪 Scene 1 — Grand Royal Palace Entrance
- **Dual 3D Carved Teakwood Doors**: Fullscreen antique Rajasthani palace double doors (`royal-doors-left.jpg` & `royal-doors-right.jpg`) with heavy brass lion-head knockers, embossed gold leaf carvings, and round brass studs (*killas*).
- **Vedic Invocation**: `|| श्री गणेशाय नमः ||` and traditional Ganesha crest.
- **Atmosphere**: Warm flickering oil diyas, hanging bells, and floating golden dust particles.
- **Interactive Door Swing**: Clicking **"ENTER THE ROYAL WORLD"** plays a resonant brass temple bell gong & wooden door creak sound, swinging both doors open in 3D perspective (`rotateY(-110deg)` / `rotateY(110deg)`) as the camera flies forward into the palace.
- **Quick Bypass**: "Skip intro to view invitation" button for instant guest access.

### 🏛️ Scene 2 — Royal Palace Corridor Reveal
- **Grand Courtyard**: Breathtaking view of a royal palace courtyard (`palace-courtyard.jpg`) at dusk with hundreds of glowing brass oil lamps, floating marigolds, and scalloped marble arches.
- **Regal Welcome**: Welcoming guests to the royal wedding festivities of **Himani & Manoj Kumawat**.
- **Interactive Call-to-Action**: "APPROACH THE ROYAL TREASURE VAULT" smooth-scrolls guests directly to the treasure chest.

### 🪙 Scene 3 — The Mysterious Royal Treasure Chest (Tijori / Sandook)
- **Authentic Royal Heirloom**: Detailed antique teakwood and brass sandook (`antique-treasure-chest.jpg`) resting on a carved marble pedestal surrounded by warm diyas.
- **Interactive Brass Lock**: Rotating central brass dial with keyhole.
- **Unlocking Sequence**:
  1. Guest clicks **"UNLOCK ROYAL TREASURE"**.
  2. The brass lock smoothly rotates 90° with a metallic click sound.
  3. Golden light rays leak from the seam of the chest.
  4. The chest lid hinges open with 3D perspective.
  5. A powerful, divine golden volumetric light beam radiates upward!
  6. Golden celestial sparkle chimes play while golden dust & confetti burst into the air.

### 📜 Scene 4 — The Royal Wedding Invitation Scroll
- **Rising Scroll**: The sacred wedding invitation scroll gracefully rises upwards from inside the chest vault.
- **Antique Parchment**: Seamless aged ivory parchment texture (`antique-parchment.jpg`) with gold foil deckled borders, brass wooden rollers/finials.
- **Details**:
  - `|| वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥`
  - **Himani & Manoj Kumawat**
  - **Sunday, 1st March 2026**
  - **Shubh Vivah Muhurat: 07:15 PM onwards**
  - Royal Celebration Resort, Rajasthan
  - One-tap **"Save The Date"** (Google Calendar & Apple/Outlook `.ics` download).

### 📅 Scene 5 — Wedding Ceremonies, Itinerary & Details
- **Live Countdown Timer**: Real-time days, hours, minutes, and seconds counting down to 1st March 2026.
- **Bride & Groom Lineage**: Royal portrait cards for Manoj & Himani.
- **Auspicious Ceremonies**:
  - 🟡 **Mangal Haldi & Ubtan** — 28th Feb 2026, 10:30 AM
  - 🎁 **Chak Bhat & Mayra Dastoor** — 28th Feb 2026, 03:30 PM (Nanihal welcome & maternal blessings)
  - 🔴 **Shubh Vivah (Baraat & Sacred Pheras)** — 1st March 2026, 05:00 PM / 07:15 PM
  - 👑 **The Grand Reception** — 2nd March 2026, 07:00 PM
- **Venue & Directions**: Google Maps link and one-tap "Copy Full Address".
- **Family Blessings**: Traditional elders' blessings from The Kumawat Family.
- **RSVP & Social Sharing**: Pre-filled WhatsApp RSVP button, Web Share API, and family contacts.

---

## 🎵 Procedural Royal Sound Engine (Web Audio API)
No external broken audio links or bandwidth issues. Built-in sound synthesis in `lib/sound.ts`:
- **Temple Bell / Brass Gong**: Rich harmonic resonance.
- **Palace Door Creak**: Deep sub-bass wooden rumble.
- **Brass Lock Click**: Authentic metallic tumbler rotation.
- **Golden Chimes**: Ascending celestial pentatonic notes (Raga Bhupali).
- **Royal Drone Ambience**: Warm meditative Tanpura/Shehnai harmonic drone.
- **Audio Control**: Floating pill button on the bottom right to toggle sound at any time.

---

## 🎨 How to Personalize Wedding Details

All details are in one single configuration file:

📁 **`src/config/wedding.ts`**

Simply update:
- Names, family details, and bios
- Dates, timings, and muhurat
- Venue name, address, and Google Maps URL
- WhatsApp phone numbers for RSVP

---

## 🚀 Running the Project

```bash
# Start development server
npm run dev

# Build for production
npm run build
npm start
```
View the invitation at: `http://localhost:3001` (or `http://localhost:3000`).
