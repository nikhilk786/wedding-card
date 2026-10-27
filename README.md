# Royal Indian Wedding Invitation — Next.js

A luxurious, mobile-first digital Indian wedding invitation inspired by royal Rajasthani palaces, traditional miniature art, elegant floral ornamentation, and premium wedding stationery.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Tabler Icons**. Ready for one-click deployment on **Vercel**.

---

## 🌟 Visual Theme & Design Language

- **Color Palette**:
  - **Warm Ivory & Champagne**: `#FAF7F2` and `#F4EDE2` background
  - **Royal Deep Maroon**: `#6B1322` and `#80162A`
  - **Antique Gold & Foil Accents**: `#C5A059`, `#DFBA6B`, and `#9E7D3B`
  - **Subtle Royal Emerald**: `#114B3E`
- **Typography**:
  - `Cinzel` & `Marcellus` for royal serif titles, bride & groom monograms, and headings
  - `Montserrat` for clean, highly readable body typography across all mobile devices
- **Ornaments**: Handcrafted SVG Ganesha emblem, traditional mandap arches, royal cusped arches, lotus motifs, and delicate corner brackets.
- **Motion**: Subtle floating golden rose and marigold petals, elegant envelope-unfolding transition, respecting `prefers-reduced-motion`.

---

## 💍 Features & Invitation Sections

1. **Opening Experience (Royal Envelope & Wax Seal)**:
   - Fullscreen royal card cover with traditional invocation `|| श्री गणेशाय नमः ||`.
   - "Open Royal Invitation" button with celebratory gold confetti.
   - Immediate "Skip to details" option so guests are never forced to wait.
2. **Hero Section**:
   - Prominent bride and groom names with an ornate decorative ampersand.
   - Auspicious date, traditional Hindu calendar tithi, and Shubh Vivah Muhurat.
   - Palace venue and city.
   - "Save The Date" interaction supporting Google Calendar and Apple/Outlook `.ics` calendar file downloads.
3. **Live Countdown Timer**:
   - Real-time countdown (Days, Hours, Minutes, Seconds) leading up to the auspicious Muhurat.
   - Graceful fallback for post-wedding visits ("Happily Ever After").
4. **Bride & Groom Introduction**:
   - Dedicated royal portrait cards for the bride and groom.
   - Parental lineage ("Daughter of...", "Son of...") and personal biographies.
5. **Wedding Itinerary & Events Timeline**:
   - Haldi, Mehendi, Sangeet, Shubh Vivah, and Grand Reception.
   - Each event includes date, time, venue, suggested attire/dress code guide, and traditional description.
   - Only configured events are rendered.
6. **Venue & Directions**:
   - Venue name and full address.
   - "Get Directions" link directly opening Google Maps.
   - One-tap "Copy Full Address" button with live confirmation feedback.
   - Transfer/boat shuttle guidance.
7. **Family Blessings & Welcoming Hosts**:
   - Traditional elder blessing statement.
   - Welcoming family names (Bride's family & Groom's family).
8. **RSVP & Social Sharing**:
   - One-click "RSVP via WhatsApp" opening a pre-filled message.
   - Native Web Share API integration (for sharing on WhatsApp, Messages, or social platforms) with clipboard link copy fallback.
   - Direct family contact numbers for guest queries.

---

## 🎨 How to Personalize (Single Configuration File)

All visible wedding details on this website are driven by a single central configuration file:

📁 **`src/config/wedding.ts`**

Simply open this file and customize:
- Bride and groom names, parents' names, and bios
- Wedding date, time, and muhurat
- Venue name, address, and Google Maps URL
- Events timeline (Haldi, Mehendi, Sangeet, Vivah, Reception)
- Suggested dress codes
- WhatsApp RSVP phone number and prefilled text
- Family welcoming names

```typescript
export const WEDDING_CONFIG: WeddingConfig = {
  bride: {
    firstName: "Aadhya",
    fullName: "Aadhya Sharma",
    parents: "Daughter of Smt. Sunita & Shri Rajesh Sharma",
    // ...
  },
  groom: {
    firstName: "Devendra",
    fullName: "Devendra Singh Rathore",
    parents: "Son of Smt. Meenakshi & Shri Vikramaditya Singh Rathore",
    // ...
  },
  // ...
};
```

---

## 🚀 Development & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the invitation in your browser.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel

1. Push this repository to GitHub or GitLab.
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Vercel automatically detects Next.js. Click **Deploy**.
4. Share the generated live URL with your family and wedding guests!
