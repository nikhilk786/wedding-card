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
  ui: {
    togetherFamilies: string;
    celebrationAwaits: string;
    enterPalace: string;
    enteringPalace: string;
    skipIntro: string;
    welcomePrefix: string;
    approachVault: string;
    vaultTagline: string;
    vaultTitle: string;
    vaultSubtitleLocked: string;
    vaultSubtitleOpened: string;
    unlockChest: string;
    unlockingChest: string;
    relockChest: string;
    scrollTogether: string;
    scrollInvitationReq: string;
    weds: string;
    weddingDateLabel: string;
    muhuratLabel: string;
    venueLabel: string;
    saveDateBtn: string;
    viewCeremoniesBtn: string;
    countdownTitle: string;
    countdownSubtitle: string;
    countdownPast: string;
    days: string;
    hours: string;
    mins: string;
    secs: string;
    meetCoupleTag: string;
    meetCoupleTitle: string;
    meetCoupleSubtitle: string;
    theBride: string;
    theGroom: string;
    itineraryTag: string;
    itineraryTitle: string;
    itinerarySubtitle: string;
    venueTag: string;
    venueTitle: string;
    venueSubtitle: string;
    getDirectionsBtn: string;
    copyAddressBtn: string;
    addressCopiedBtn: string;
    eldersBlessingTag: string;
    welcomedByTag: string;
    brideFamilyLabel: string;
    groomFamilyLabel: string;
    rsvpTag: string;
    rsvpTitle: string;
    rsvpSubtitle: string;
    rsvpWhatsappBtn: string;
    shareBtn: string;
    shareCopiedBtn: string;
    assistanceLabel: string;
    footerThanks: string;
    designedWithLove: string;
    backToScroll: string;
    backToMainInvitation: string;
    ceremoniesPageTitle: string;
  };
}

export const WEDDING_CONFIG_EN: WeddingConfig = {
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
  ui: {
    togetherFamilies: "Together With Our Families",
    celebrationAwaits: "A Royal Celebration Awaits",
    enterPalace: "ENTER THE ROYAL PALACE",
    enteringPalace: "Entering The Royal Palace...",
    skipIntro: "Skip intro to view wedding details",
    welcomePrefix: "Welcome to the Royal Palace Festivities of",
    approachVault: "APPROACH TREASURE VAULT",
    vaultTagline: "The Sacred Vault of Blessings",
    vaultTitle: "The Royal Treasure Chest",
    vaultSubtitleLocked: "Turn the antique brass lock to reveal the wedding invitation preserved inside.",
    vaultSubtitleOpened: "The royal invitation scroll has arisen from the royal treasury.",
    unlockChest: "UNLOCK ROYAL TREASURE",
    unlockingChest: "UNLOCKING...",
    relockChest: "Close & Relock Vault",
    scrollTogether: "Together With Our Families",
    scrollInvitationReq: "Request the pleasure of your gracious company and divine blessings to celebrate the auspicious marriage of",
    weds: "weds",
    weddingDateLabel: "Wedding Date",
    muhuratLabel: "Shubh Muhurat",
    venueLabel: "Royal Venue",
    saveDateBtn: "Save The Date",
    viewCeremoniesBtn: "View All Ceremonies",
    countdownTitle: "Counting The Auspicious Moments",
    countdownSubtitle: "Until we exchange sacred vows on",
    countdownPast: "Happily Ever After & Eternally Grateful",
    days: "Days",
    hours: "Hours",
    mins: "Mins",
    secs: "Secs",
    meetCoupleTag: "The Happy Couple",
    meetCoupleTitle: "Meet Bride & Groom",
    meetCoupleSubtitle: "Two lives uniting with the sacred blessings of family, tradition, and eternal devotion.",
    theBride: "The Bride",
    theGroom: "The Groom",
    itineraryTag: "Wedding Itinerary & Celebrations",
    itineraryTitle: "Auspicious Ceremonies",
    itinerarySubtitle: "Join us in the joyous traditions and sacred festivities as two families become one.",
    venueTag: "Destination & Directions",
    venueTitle: "The Wedding Destination",
    venueSubtitle: "Surrounded by royal heritage and eternal blessings.",
    getDirectionsBtn: "Get Directions (Google Maps)",
    copyAddressBtn: "Copy Full Address",
    addressCopiedBtn: "Address Copied!",
    eldersBlessingTag: "With The Blessings Of Our Elders",
    welcomedByTag: "Warmly Welcomed By",
    brideFamilyLabel: "Bride's Family",
    groomFamilyLabel: "Groom's Family",
    rsvpTag: "Kindly Respond & Celebrate With Us",
    rsvpTitle: "RSVP & Blessings",
    rsvpSubtitle: "Please let us know if you will be joining us for the royal wedding celebration of Manoj & Himani.",
    rsvpWhatsappBtn: "RSVP via WhatsApp",
    shareBtn: "Share Invitation",
    shareCopiedBtn: "Invitation Link Copied!",
    assistanceLabel: "For Inquiries & Travel Assistance",
    footerThanks: "Thank you for being an indispensable part of our lives, our stories, and our celebrations.",
    designedWithLove: "Designed with love for family & guests",
    backToScroll: "Back to Invitation Scroll",
    backToMainInvitation: "Return to Main Royal Invitation",
    ceremoniesPageTitle: "All Auspicious Ceremonies & Details",
  },
};

export const WEDDING_CONFIG_HI: WeddingConfig = {
  bride: {
    firstName: "हिमानी",
    fullName: "हिमानी कुमावत",
    parents: "सुपुत्री श्रीमती एवं श्री कुमावत",
    bio: "संस्कारवान, पारिवारिक मर्यादाओं एवं स्नेह की धनी, जीवन के इस पावन वैवाहिक सफर की ओर अग्रसर।",
    photoPlaceholderText: "वधु — हिमानी",
  },
  groom: {
    firstName: "मनोज",
    fullName: "मनोज कुमावत",
    parents: "सुपुत्र श्रीमती एवं श्री कुमावत",
    bio: "सरल स्वभाव, परिजनों के प्रिय एवं कर्तव्यनिष्ठ, दांपत्य जीवन के नव अध्याय की शुरुआत करते हुए।",
    photoPlaceholderText: "वर — मनोज",
  },
  wedding: {
    title: "शाही वैवाहिक समारोह",
    tagline: "दो आत्माओं का पावन संगम, कुलदेवता के आशीष से परिपूर्ण अटूट प्रेम",
    isoDateTime: "2026-03-01T19:15:00+05:30",
    displayDate: "रविवार, 1 मार्च 2026",
    traditionalCalendar: "फाल्गुन शुक्ल पक्ष, विक्रम संवत 2082",
    auspiciousMuhurat: "शुभ विवाह मुहूर्त: सायं 07:15 बजे से",
    hashtag: "#मनोज_संग_हिमानी",
  },
  venue: {
    name: "रॉयल सेलिब्रेशन रिसॉर्ट एवं लॉन्स",
    city: "राजस्थान, भारत",
    fullAddress: "सेलिब्रेशन सर्किल के पास, रॉयल रिसॉर्ट परिसर, राजस्थान, भारत",
    googleMapsUrl: "https://maps.google.com/?q=Rajasthan+Wedding+Resort",
    landmarkNote: "विस्तृत प्रवेश द्वार एवं पार्किंग सहायता रिसॉर्ट आगमन पर उपलब्ध रहेगी।",
  },
  invitation: {
    traditionalShloka: "|| वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    shlokaTranslation: "|| ॐ श्री गणेशाय नमः — शुभ एवं मंगलमय शुरुआत हेतु प्रभु की स्तुति ||",
    mainMessage:
      "परमपिता परमेश्वर, कुलदेवता के असीम अनुग्रह एवं पूज्य बुज़ुर्गों के मंगलकारी आशीर्वाद से हमारे प्रिय पुत्र-पुत्री का शुभ विवाह संस्कार संपन्न होने जा रहा है।",
    secondaryMessage:
      "अतः आप सपरिवार एवं इष्ट-मित्रों सहित पधारकर वर-वधु को अपना स्नेहिल आशीर्वाद प्रदान कर हमें अनुगृहीत करें।",
    eldersBlessing:
      "सदा सौभाग्यवती भव • दीर्घायुष्यमस्तु • अखंड सौभाग्य एवं सुख समृद्धि का वास रहे।",
    hosts: {
      brideSide: "समस्त कुमावत परिवार",
      groomSide: "समस्त कुमावत परिवार",
    },
  },
  events: [
    {
      id: "haldi",
      title: "मंगल हल्दी एवं उबटन",
      subtitle: "पीली हल्दी, मंगल गीत एवं खुशियों का उबटन",
      date: "शनिवार, 28 फरवरी 2026",
      time: "प्रातः 10:30 बजे से",
      venue: "गृह प्रांगण / सेलिब्रेशन लॉन्स",
      dressCode: "पीला पारंपरिक परिधान (येलो एथनिक)",
      description:
        "सुगंधित हल्दी का लेप, गेंदे के पुष्पों की वर्षा, मंगल लोकगीत एवं हंसी-ठिठोली से भरा शुभ हल्दी उत्सव।",
      iconType: "haldi",
    },
    {
      id: "chakbhat",
      title: "चक भात एवं मायरा दस्तूर",
      subtitle: "ननिहाल पक्ष का स्वागत, मायरा एवं मातृत्व आशीर्वाद",
      date: "शनिवार, 28 फरवरी 2026",
      time: "दोपहर 03:30 बजे से",
      venue: "मुख्य सेलिब्रेशन हॉल",
      dressCode: "पारंपरिक राजस्थानी परिधान",
      description:
        "मातृकुल (ननिहाल) के आदरणीय मामाजी एवं परिजनों का पारंपरिक मायरा दस्तूर, मंगल तिलक एवं चुनरी ओढ़ाने की पावन रस्म।",
      iconType: "chakbhat",
    },
    {
      id: "vivah",
      title: "शुभ विवाह (पाणिग्रहण संस्कार)",
      subtitle: "बारात अगवानी, वरमाला एवं सात पावन फेरे",
      date: "रविवार, 1 मार्च 2026",
      time: "सायं 05:00 बजे बारात | सायं 07:15 बजे पाणिग्रहण",
      venue: "शाही मंडप, सेलिब्रेशन रिसॉर्ट",
      dressCode: "शाही राजस्थानी परिधान / साफा एवं चुनरी",
      description:
        "शाही बारात का गाजे-बाजे संग स्वागत, सुगंधित वरमाला का आदान-प्रदान एवं अग्नि की साक्षी में सात वचनों के साथ पाणिग्रहण संस्कार।",
      iconType: "vivah",
    },
    {
      id: "reception",
      title: "प्रीतिभोज (ग्रैंड रिसेप्शन)",
      subtitle: "वर-वधु आशीर्वाद समारोह एवं शाही भोज",
      date: "सोमवार, 2 मार्च 2026",
      time: "सायं 07:00 बजे से प्रभु इच्छा तक",
      venue: "रॉयल बैंक्वेट ग्राउंड्स",
      dressCode: "सभ्य पारंपरिक एवं इंडो-वेस्टर्न परिधान",
      description:
        "नव-दंपति मनोज एवं हिमानी के दांपत्य जीवन के मंगलमयी आगमन पर स्नेहिल आशीर्वाद एवं सुरुचिपूर्ण शाही भोज का आयोजन।",
      iconType: "reception",
    },
  ],
  rsvp: {
    phoneContacts: [
      { name: "कुमावत परिवार संपर्क 1", phone: "+91 98765 43210" },
      { name: "कुमावत परिवार संपर्क 2", phone: "+91 98765 01234" },
    ],
    whatsappNumber: "919876543210",
    whatsappPreFilledText:
      "नमस्ते! मनोज एवं हिमानी कुमावत के शुभ विवाह में सम्मिलित होने हेतु सादर सहमति।",
  },
  socialSharing: {
    title: "शुभ विवाह निमंत्रण पत्र | मनोज एवं हिमानी कुमावत",
    text: "आप सादर सपरिवार आमंत्रित हैं मनोज एवं हिमानी के शुभ विवाह समारोह में। 1 मार्च 2026, राजस्थान।",
    url: "https://manoj-weds-himani.vercel.app",
  },
  theme: {
    ivoryBg: "#FAF7F2",
    deepMaroon: "#6B1322",
    antiqueGold: "#C5A059",
    emeraldAccent: "#114B3E",
  },
  ui: {
    togetherFamilies: "सपरिवार सस्नेह निमंत्रण",
    celebrationAwaits: "एक मंगलकारी शाही उत्सव",
    enterPalace: "राजमहल में प्रवेश करें",
    enteringPalace: "राजमहल में प्रवेश हो रहा है...",
    skipIntro: "सीधे निमंत्रण पत्र देखें",
    welcomePrefix: "शुभ विवाह के पावन उत्सव में आपका हार्दिक स्वागत है",
    approachVault: "शाही तिजोरी की ओर बढ़ें",
    vaultTagline: "शुभ आशीर्वाद का पावन भंडार",
    vaultTitle: "शाही तिजोरी (लग्न पत्रिका)",
    vaultSubtitleLocked: "अंदर संरक्षित लग्न पत्रिका दर्शन हेतु प्राचीन पीतल के ताले को घुमाएं।",
    vaultSubtitleOpened: "शाही तिजोरी से पावन वैवाहिक लग्न पत्रिका प्रकट हो चुकी है।",
    unlockChest: "शाही तिजोरी खोलें",
    unlockingChest: "तिजोरी खुल रही है...",
    relockChest: "तिजोरी बंद कर पुनः लॉक करें",
    scrollTogether: "सपरिवार सस्नेह निमंत्रण",
    scrollInvitationReq: "परमपिता परमेश्वर एवं कुलदेवता के अनुग्रह से हमारे प्रिय पुत्र-पुत्री के पावन विवाह संस्कार में आपकी गरिमामयी उपस्थिति सादर प्रार्थनीय है",
    weds: "संग",
    weddingDateLabel: "विवाह तिथि",
    muhuratLabel: "शुभ मुहूर्त",
    venueLabel: "विवाह स्थल",
    saveDateBtn: "कैलेंडर में सेव करें",
    viewCeremoniesBtn: "समस्त मांगलिक कार्यक्रम",
    countdownTitle: "मांगलिक पलों की प्रतीक्षा",
    countdownSubtitle: "जब तक हम सात फेरों के पावन बंधन में बंधते हैं:",
    countdownPast: "सदा सुखी एवं दांपत्य जीवन मंगलमय रहे",
    days: "दिन",
    hours: "घंटे",
    mins: "मिनट",
    secs: "सेकंड",
    meetCoupleTag: "वर-वधु परिचय",
    meetCoupleTitle: "वर एवं वधु",
    meetCoupleSubtitle: "पारिवारिक संस्कारों, बड़ों के शुभाशीष एवं अटूट प्रेम का पावन संगम।",
    theBride: "वधु",
    theGroom: "वर",
    itineraryTag: "मांगलिक उत्सव रूपरेखा",
    itineraryTitle: "शुभ मांगलिक कार्यक्रम",
    itinerarySubtitle: "दो परिवारों के इस पावन मिलन एवं खुशियों के उत्सव में सादर आमंत्रित हैं।",
    venueTag: "विवाह स्थल एवं दिशा निर्देश",
    venueTitle: "शुभ विवाह स्थल",
    venueSubtitle: "शाही विरासत, सौहार्द एवं प्रभु कृपा से परिपूर्ण स्थल।",
    getDirectionsBtn: "गूगल मैप्स पर रास्ता देखें",
    copyAddressBtn: "पूरा पता कॉपी करें",
    addressCopiedBtn: "पता कॉपी हो गया!",
    eldersBlessingTag: "पूज्य बुज़ुर्गों के पावन आशीर्वाद सहित",
    welcomedByTag: "दर्शनाभिलाषी एवं विनीत",
    brideFamilyLabel: "वधु पक्ष",
    groomFamilyLabel: "वर पक्ष",
    rsvpTag: "कृपया अपनी उपस्थिति से अनुगृहीत करें",
    rsvpTitle: "उपस्थिति सूचना (RSVP)",
    rsvpSubtitle: "कृपया हमें सूचित करें ताकि आपके स्वागत एवं सत्कार की समुचित व्यवस्था की जा सके।",
    rsvpWhatsappBtn: "व्हाट्सएप पर RSVP भेजें",
    shareBtn: "निमंत्रण पत्र शेयर करें",
    shareCopiedBtn: "निमंत्रण लिंक कॉपी हो गया!",
    assistanceLabel: "यात्रा एवं आवास सहायता संपर्क",
    footerThanks: "हमारे जीवन, हमारी खुशियों एवं इस पावन उत्सव का अभिन्न हिस्सा बनने हेतु आपका हार्दिक आभार।",
    designedWithLove: "समस्त परिवार एवं प्रियजनों हेतु सप्रेम समर्पित",
    backToScroll: "वापस लग्न पत्रिका पर जाएं",
    backToMainInvitation: "मुख्य शाही निमंत्रण पर वापस जाएं",
    ceremoniesPageTitle: "समस्त मांगलिक कार्यक्रम एवं संपूर्ण विवरण",
  },
};

export const WEDDING_CONFIG: WeddingConfig = WEDDING_CONFIG_EN;

export function getWeddingConfig(lang: "en" | "hi"): WeddingConfig {
  return lang === "hi" ? WEDDING_CONFIG_HI : WEDDING_CONFIG_EN;
}
