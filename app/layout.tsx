import type { Metadata } from "next";
import { Cinzel, Marcellus, Montserrat } from "next/font/google";
import { WEDDING_CONFIG } from "@/config/wedding";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  variable: "--font-marcellus",
  weight: ["400"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${WEDDING_CONFIG.bride.firstName} & ${WEDDING_CONFIG.groom.firstName} — Wedding Invitation`,
  description: WEDDING_CONFIG.socialSharing.text,
  keywords: [
    "Indian wedding invitation",
    "Royal wedding invitation",
    "Udaipur wedding",
    WEDDING_CONFIG.wedding.hashtag,
    `${WEDDING_CONFIG.bride.firstName} and ${WEDDING_CONFIG.groom.firstName}`,
  ],
  openGraph: {
    title: `${WEDDING_CONFIG.bride.firstName} & ${WEDDING_CONFIG.groom.firstName} — Wedding Celebration`,
    description: WEDDING_CONFIG.socialSharing.text,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${WEDDING_CONFIG.bride.firstName} & ${WEDDING_CONFIG.groom.firstName} — Wedding Celebration`,
    description: WEDDING_CONFIG.socialSharing.text,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${marcellus.variable} ${montserrat.variable}`}
    >
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#FAF7F2" />
      </head>
      <body className="min-h-screen bg-ivory-100 text-[#2B181B] selection:bg-gold-500/20 selection:text-maroon-700">
        {children}
      </body>
    </html>
  );
}
