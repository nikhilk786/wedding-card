import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        royal: ["var(--font-cinzel)", "Georgia", "serif"],
        serif: ["var(--font-marcellus)", "Playfair Display", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        ivory: {
          50: "#FEFCF9",
          100: "#FAF7F2",
          200: "#F4EDE2",
          300: "#ECE0CF",
          400: "#DFCCB3",
        },
        maroon: {
          50: "#FBF2F4",
          100: "#F5E2E6",
          500: "#9A1F34",
          600: "#80162A",
          700: "#6B1322",
          800: "#500C18",
          900: "#36060F",
        },
        gold: {
          50: "#FCF9F1",
          100: "#F8F1DD",
          200: "#F0DFB7",
          300: "#E5CA8B",
          400: "#D6B564",
          500: "#C5A059",
          600: "#A8833B",
          700: "#856529",
          800: "#654B1C",
        },
        emerald: {
          50: "#F0F7F5",
          100: "#DAECE6",
          500: "#1E7561",
          600: "#165B4B",
          700: "#114B3E",
          800: "#0C372D",
        },
      },
      backgroundImage: {
        "royal-radial":
          "radial-gradient(circle at 50% 0%, rgba(197, 160, 89, 0.12) 0%, transparent 70%)",
        "gold-gradient":
          "linear-gradient(135deg, #DFBA6B 0%, #C5A059 50%, #9E7D3B 100%)",
        "maroon-gradient":
          "linear-gradient(135deg, #80162A 0%, #6B1322 50%, #3D0710 100%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floatPetal: {
          "0%": { transform: "translateY(-10px) rotate(0deg)", opacity: "0" },
          "20%": { opacity: "0.8" },
          "80%": { opacity: "0.8" },
          "100%": { transform: "translateY(100vh) rotate(360deg)", opacity: "0" },
        },
        gentlePulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.95" },
          "50%": { transform: "scale(1.03)", opacity: "1" },
        },
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
        "float-petal": "floatPetal 12s linear infinite",
        "gentle-pulse": "gentlePulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
