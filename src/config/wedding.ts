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
  music: {
    youtubeVideoId: string;
    youtubeUrl: string;
    title: string;
    autoPlayOnEnter: boolean;
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
    submitBlessingBtn: string;
    sendOnWhatsappBtn: string;
    blessingNamePlaceholder: string;
    blessingMessagePlaceholder: string;
    blessingSubmittedSuccess: string;
    recentBlessingsTitle: string;
    shareBtn: string;
    shareCopiedBtn: string;
    assistanceLabel: string;
    footerThanks: string;
    designedWithLove: string;
    backToScroll: string;
    backToMainInvitation: string;
    ceremoniesPageTitle: string;
    musicPlaying: string;
    musicPaused: string;
    musicTooltipPlay: string;
    musicTooltipPause: string;
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
    name: "Radha Krishna Marriage Garden",
    city: "Mansarovar, Jaipur, Rajasthan",
    fullAddress: "Jaitram Nagar, Near Gyan Vihar Colony, Khejdo Ka Bass, Mansarovar, Jaipur, Rajasthan 302020",
    googleMapsUrl:
      "https://www.google.com/maps/dir//Radha+Krishna+Marriage+Garden,+Jaitram+Nagar,+near+Gyan+Vihar+Colony,+Khejdo+ka+Bass,+Mansarovar,+Jaipur,+Rajasthan+302020/@26.9024618,75.7487774,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396db576f27427b5:0x8f06d7b655221d48!2m2!1d75.7568201!2d26.8383549",
    landmarkNote: "Near Gyan Vihar Colony, Khejdo Ka Bass, Mansarovar, Jaipur",
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
      id: "chakbhat",
      title: "Chak Bhat & Mayra Dastoor",
      subtitle: "Traditional Nanihal Welcome & Maternal Blessings",
      date: "Thursday, 26th February 2026",
      time: "11:15 AM onwards",
      venue: "Main Celebration Hall",
      dressCode: "Traditional Rajasthani Ethnic Wear",
      description:
        "The sacred tradition welcoming maternal uncles (Nanihal) with traditional Mayra, joyful folk songs, and auspicious blessings.",
      iconType: "chakbhat",
    },
    {
      id: "haldi",
      title: "Mangal Haldi & Mehendi Rasam",
      subtitle: "Auspicious Turmeric, Bridal Henna & Festivities",
      date: "Thursday, 26th February 2026",
      time: "01:45 PM onwards",
      venue: "Home Courtyard / Celebration Lawns",
      dressCode: "Sunshine Yellow & Festive Traditional",
      description:
        "An intimate afternoon bathed in fragrant turmeric paste, artistic mehendi, joyful family laughter, and auspicious mangal geet.",
      iconType: "haldi",
    },
    {
      id: "reception",
      title: "The Grand Reception & Preeti Bhoj",
      subtitle: "Auspicious Blessings & Celebratory Royal Feast",
      date: "Thursday, 26th February 2026",
      time: "07:15 PM onwards",
      venue: "Radha Krishna Marriage Garden, Mansarovar, Jaipur",
      dressCode: "Formal Ethnic / Indo-Western Festive",
      description:
        "An enchanting evening welcoming guests with delightful royal feasts and heartfelt family blessings.",
      iconType: "reception",
    },
    {
      id: "vivah",
      title: "Shubh Vivah — Sacred Nuptials",
      subtitle: "Baraat Swagat, Varmala & Sacred Pheras",
      date: "Sunday, 1st March 2026",
      time: "05:00 PM Baraat | 07:15 PM Sacred Pheras",
      venue: "Radha Krishna Marriage Garden, Mansarovar, Jaipur",
      dressCode: "Royal Traditional / Maroons, Golds & Creams",
      description:
        "The grand Baraat procession, the ceremonial exchange of floral garlands (Varmala), and the seven sacred vows around the holy agni.",
      iconType: "vivah",
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
  music: {
    youtubeVideoId: "CbMRLTpWDIU",
    youtubeUrl: "https://youtu.be/CbMRLTpWDIU",
    title: "Royal Shehnai & Festive Melodies",
    autoPlayOnEnter: true,
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
    rsvpTag: "Warm Wishes & Congratulations",
    rsvpTitle: "Send Your Blessings & Wishes",
    rsvpSubtitle: "Share your heartfelt blessing message and warm wishes for Manoj & Himani Kumawat.",
    rsvpWhatsappBtn: "Send Blessing via WhatsApp",
    submitBlessingBtn: "Submit a Blessing Message",
    sendOnWhatsappBtn: "Send on WhatsApp",
    blessingNamePlaceholder: "Your Full Name...",
    blessingMessagePlaceholder: "Write your heartfelt blessing and warm wishes for Manoj & Himani...",
    blessingSubmittedSuccess: "Thank you for your warm blessings! Your wishes have been received with love.",
    recentBlessingsTitle: "Heartfelt Wishes from Family & Friends",
    shareBtn: "Share Invitation",
    shareCopiedBtn: "Invitation Link Copied!",
    assistanceLabel: "For Inquiries & Travel Assistance",
    footerThanks: "Thank you for being an indispensable part of our lives, our stories, and our celebrations.",
    designedWithLove: "Designed with love for family & guests",
    backToScroll: "Back to Scroll",
    backToMainInvitation: "Back to Invitation",
    ceremoniesPageTitle: "All Auspicious Ceremonies & Details",
    musicPlaying: "Music: Playing",
    musicPaused: "Music: Paused",
    musicTooltipPlay: "Play Wedding Music",
    musicTooltipPause: "Pause Wedding Music",
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
    name: "राधा कृष्णा मैरिज गार्डन",
    city: "मानसरोवर, जयपुर, राजस्थान",
    fullAddress:
      "जैतराम नगर, ज्ञान विहार कॉलोनी के पास, खेजड़ों का बास, मानसरोवर, जयपुर, राजस्थान 302020",
    googleMapsUrl:
      "https://www.google.com/maps/dir//Radha+Krishna+Marriage+Garden,+Jaitram+Nagar,+near+Gyan+Vihar+Colony,+Khejdo+ka+Bass,+Mansarovar,+Jaipur,+Rajasthan+302020/@26.9024618,75.7487774,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396db576f27427b5:0x8f06d7b655221d48!2m2!1d75.7568201!2d26.8383549",
    landmarkNote: "ज्ञान विहार कॉलोनी के पास, खेजड़ों का बास, मानसरोवर, जयपुर",
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
      id: "chakbhat",
      title: "चक भात एवं मायरा दस्तूर",
      subtitle: "ननिहाल पक्ष का स्वागत, मायरा एवं मातृत्व आशीर्वाद",
      date: "गुरुवार, 26 फरवरी 2026",
      time: "प्रातः 11:15 बजे से",
      venue: "मुख्य सेलिब्रेशन हॉल",
      dressCode: "पारंपरिक राजस्थानी परिधान",
      description:
        "मातृकुल (ननिहाल) के आदरणीय मामाजी एवं परिजनों का पारंपरिक मायरा दस्तूर, मंगल तिलक एवं चुनरी ओढ़ाने की पावन रस्म।",
      iconType: "chakbhat",
    },
    {
      id: "haldi",
      title: "मंगल हल्दी एवं मेहंदी रस्म",
      subtitle: "पीली हल्दी, मेहंदी उत्सव एवं मंगल गीत",
      date: "गुरुवार, 26 फरवरी 2026",
      time: "दोपहर 01:45 बजे से",
      venue: "गृह प्रांगण / सेलिब्रेशन लॉन्स",
      dressCode: "पीला पारंपरिक परिधान (येलो एथनिक)",
      description:
        "सुगंधित हल्दी का लेप, हाथों में सजी सुंदर मेहंदी, गेंदे के पुष्पों की वर्षा एवं मंगल लोकगीतों से भरा उल्लासपूर्ण उत्सव।",
      iconType: "haldi",
    },
    {
      id: "reception",
      title: "शाही प्रीतिभोज (ग्रैंड रिसेप्शन)",
      subtitle: "पारिवारिक मिलन, स्नेहिल आशीर्वाद एवं सुरुचिपूर्ण शाही भोज",
      date: "गुरुवार, 26 फरवरी 2026",
      time: "सायं 07:15 बजे से",
      venue: "राधा कृष्णा मैरिज गार्डन, मानसरोवर, जयपुर",
      dressCode: "सभ्य पारंपरिक एवं इंडो-वेस्टर्न परिधान",
      description:
        "स्नेही स्वजनों एवं इष्ट-मित्रों संग सुरुचिपूर्ण शाही भोज एवं नव-उमंगों का आनंदमय उत्सव।",
      iconType: "reception",
    },
    {
      id: "vivah",
      title: "शुभ विवाह (पाणिग्रहण संस्कार)",
      subtitle: "बारात अगवानी, वरमाला एवं सात पावन फेरे",
      date: "रविवार, 1 मार्च 2026",
      time: "सायं 05:00 बजे बारात | सायं 07:15 बजे पाणिग्रहण",
      venue: "राधा कृष्णा मैरिज गार्डन, मानसरोवर, जयपुर",
      dressCode: "शाही राजस्थानी परिधान / साफा एवं चुनरी",
      description:
        "शाही बारात का गाजे-बाजे संग स्वागत, सुगंधित वरमाला का आदान-प्रदान एवं अग्नि की साक्षी में सात वचनों के साथ पाणिग्रहण संस्कार।",
      iconType: "vivah",
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
  music: {
    youtubeVideoId: "CbMRLTpWDIU",
    youtubeUrl: "https://youtu.be/CbMRLTpWDIU",
    title: "मांगलिक विवाह शहनाई एवं शाही संगीत",
    autoPlayOnEnter: true,
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
    rsvpTag: "स्नेहिल शुभाशीष एवं मंगलकामनाएं",
    rsvpTitle: "वर-वधु हेतु शुभकामना संदेश",
    rsvpSubtitle: "मनोज एवं हिमानी के पावन दांपत्य जीवन के शुभारंभ पर अपना स्नेहिल आशीर्वाद एवं मंगल संदेश प्रेषित करें।",
    rsvpWhatsappBtn: "व्हाट्सएप पर शुभकामना भेजें",
    submitBlessingBtn: "शुभकामना संदेश सबमिट करें",
    sendOnWhatsappBtn: "व्हाट्सएप पर प्रेषित करें",
    blessingNamePlaceholder: "आपका शुभ नाम...",
    blessingMessagePlaceholder: "वर-वधु मनोज एवं हिमानी हेतु अपना मंगल संदेश एवं आशीर्वाद लिखें...",
    blessingSubmittedSuccess: "आपके स्नेहिल आशीर्वाद हेतु बहुत-बहुत धन्यवाद! आपका संदेश सप्रेम स्वीकार हुआ।",
    recentBlessingsTitle: "प्रियजनों द्वारा प्रेषित पावन शुभाशीष",
    shareBtn: "निमंत्रण पत्र शेयर करें",
    shareCopiedBtn: "निमंत्रण लिंक कॉपी हो गया!",
    assistanceLabel: "यात्रा एवं आवास सहायता संपर्क",
    footerThanks: "हमारे जीवन, हमारी खुशियों एवं इस पावन उत्सव का अभिन्न हिस्सा बनने हेतु आपका हार्दिक आभार।",
    designedWithLove: "समस्त परिवार एवं प्रियजनों हेतु सप्रेम समर्पित",
    backToScroll: "वापस पत्रिका",
    backToMainInvitation: "वापस लग्न पत्रिका",
    ceremoniesPageTitle: "समस्त मांगलिक कार्यक्रम एवं संपूर्ण विवरण",
    musicPlaying: "संगीत: चालू",
    musicPaused: "संगीत: बंद",
    musicTooltipPlay: "मांगलिक संगीत चालू करें",
    musicTooltipPause: "संगीत बंद करें",
  },
};

export const WEDDING_CONFIG: WeddingConfig = WEDDING_CONFIG_EN;

export function getWeddingConfig(lang: "en" | "hi"): WeddingConfig {
  return lang === "hi" ? WEDDING_CONFIG_HI : WEDDING_CONFIG_EN;
}
