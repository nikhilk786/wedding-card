export interface WeddingEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  dressCode?: string;
  description: string;
  iconType: "haldi" | "mehendi" | "sangeet" | "vivah" | "reception" | "chakbhat";
}

export interface WeddingConfig {
  bride: {
    firstName: string;
    fullName: string;
    parents: string;
    bio: string;
    photoPlaceholderText: string;
  };
  groom: {
    firstName: string;
    fullName: string;
    parents: string;
    bio: string;
    photoPlaceholderText: string;
  };
  wedding: {
    title: string;
    tagline: string;
    isoDateTime: string; // Used for live countdown & Google Calendar .ics export
    displayDate: string;
    traditionalCalendar: string;
    auspiciousMuhurat: string;
    hashtag: string;
  };
  venue: {
    name: string;
    city: string;
    fullAddress: string;
    googleMapsUrl: string;
    landmarkNote: string;
  };
  invitation: {
    traditionalShloka: string;
    shlokaTranslation: string;
    mainMessage: string;
    secondaryMessage: string;
    eldersBlessing: string;
    hosts: {
      brideSide: string;
      groomSide: string;
    };
  };
  events: WeddingEvent[];
  rsvp: {
    phoneContacts: { name: string; phone: string }[];
    whatsappNumber: string; // Format: country code + number without plus, e.g. 919876543210
    whatsappPreFilledText: string;
  };
  socialSharing: {
    title: string;
    text: string;
    url: string;
  };
  theme: {
    ivoryBg: string;
    deepMaroon: string;
    antiqueGold: string;
    emeraldAccent: string;
  };
}

/**
 * ==============================================================================
 * CENTRAL WEDDING CONFIGURATION — MANOJ & HIMANI KUMAWAT
 * ==============================================================================
 * All wedding details displayed on the invitation can be customized here.
 * Editing this single file updates the entire invitation website instantly.
 */
export const WEDDING_CONFIG: WeddingConfig = {
  bride: {
    firstName: "Himani",
    fullName: "Himani Kumawat",
    parents: "Daughter of Smt. & Shri Kumawat",
    bio: "Graceful, rooted in traditions, and embarking on this blessed journey of companionship and love.",
    photoPlaceholderText: "The Bride — Himani",
  },
  groom: {
    firstName: "Manoj",
    fullName: "Manoj Kumawat",
    parents: "Son of Smt. & Shri Kumawat",
    bio: "Warm-hearted, cherished by family, and ready to begin this beautiful new chapter of togetherness.",
    photoPlaceholderText: "The Groom — Manoj",
  },
  wedding: {
    title: "The Royal Wedding Celebration",
    tagline: "Two Hearts, Two Families, Bound by Sacred Traditions & Eternal Love",
    isoDateTime: "2026-03-01T19:15:00+05:30",
    displayDate: "Sunday, 1st March 2026",
    traditionalCalendar: "Phalguna Shukla Paksha, Vikram Samvat 2082",
    auspiciousMuhurat: "Shubh Vivah Muhurat: 07:15 PM onwards",
    hashtag: "#ManojWedsHimani",
  },
  venue: {
    name: "Royal Celebration Resort & Lawns",
    city: "Rajasthan, India",
    fullAddress: "Near Celebration Circle, Royal Resort Campus, Rajasthan, India",
    googleMapsUrl: "https://maps.google.com/?q=Rajasthan+Wedding+Resort",
    landmarkNote: "Detailed entry gate & parking directions will be guided at the venue arrival.",
  },
  invitation: {
    traditionalShloka: "|| वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    shlokaTranslation: "|| Shree Ganeshaya Namah — Seeking Divine Blessings for Auspicious Beginnings ||",
    mainMessage:
      "With the blessings of our revered ancestors, beloved elders, and the divine grace of Lord Ganesha, we cordially invite you to celebrate the wedding ceremony of Manoj & Himani.",
    secondaryMessage:
      "Your affectionate presence and warm blessings will illuminate this auspicious occasion as our families unite in eternal joy.",
    eldersBlessing:
      "May their life ahead be filled with eternal harmony, prosperity, and joy.",
    hosts: {
      brideSide: "The Kumawat Family",
      groomSide: "The Kumawat Family",
    },
  },
  events: [
    {
      id: "haldi",
      title: "Mangal Haldi & Ubtan",
      subtitle: "Auspicious Turmeric Rituals & Festivities",
      date: "Saturday, 28th February 2026",
      time: "10:30 AM onwards",
      venue: "Home Courtyard / Celebration Lawns",
      dressCode: "Sunshine Yellow & Festive Traditional",
      description:
        "An intimate morning bathed in fragrant turmeric paste, golden marigold blossoms, joyful family laughter, and auspicious mangal geet.",
      iconType: "haldi",
    },
    {
      id: "chakbhat",
      title: "Chak Bhat & Mayra Dastoor",
      subtitle: "Traditional Nanihal Welcome & Maternal Blessings",
      date: "Saturday, 28th February 2026",
      time: "03:30 PM onwards",
      venue: "Main Celebration Hall",
      dressCode: "Traditional Rajasthani Ethnic Wear",
      description:
        "The sacred tradition welcoming maternal uncles (Nanihal) with traditional Mayra, joyful folk songs, and auspicious blessings.",
      iconType: "chakbhat",
    },
    {
      id: "vivah",
      title: "Shubh Vivah — Sacred Nuptials",
      subtitle: "Baraat Swagat, Varmala & Sacred Pheras",
      date: "Sunday, 1st March 2026",
      time: "05:00 PM Baraat | 07:15 PM Sacred Pheras",
      venue: "The Grand Mandap, Celebration Resort",
      dressCode: "Royal Traditional / Maroons, Golds & Creams",
      description:
        "The grand Baraat procession, the ceremonial exchange of floral garlands (Varmala), and the seven sacred vows around the holy agni.",
      iconType: "vivah",
    },
    {
      id: "reception",
      title: "The Grand Reception",
      subtitle: "Auspicious Blessings & Celebratory Feast",
      date: "Monday, 2nd March 2026",
      time: "07:00 PM onwards",
      venue: "Royal Banquet Grounds",
      dressCode: "Formal Ethnic / Indo-Western Festive",
      description:
        "An enchanting evening welcoming the newly wedded couple, Manoj & Himani, with delightful feasts and heartfelt family blessings.",
      iconType: "reception",
    },
  ],
  rsvp: {
    phoneContacts: [
      { name: "Kumawat Family Contact 1", phone: "+91 98765 43210" },
      { name: "Kumawat Family Contact 2", phone: "+91 98765 01234" },
    ],
    whatsappNumber: "919876543210",
    whatsappPreFilledText:
      "Namaste! Delighted to RSVP for the wedding celebration of Manoj & Himani Kumawat.",
  },
  socialSharing: {
    title: "Wedding Invitation | Manoj & Himani Kumawat",
    text: "You are cordially invited to celebrate the royal wedding of Manoj & Himani on 1st March 2026. View ceremony timings and venue details.",
    url: "https://manoj-weds-himani.vercel.app",
  },
  theme: {
    ivoryBg: "#FAF7F2",
    deepMaroon: "#6B1322",
    antiqueGold: "#C5A059",
    emeraldAccent: "#114B3E",
  },
};
