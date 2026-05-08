import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "forest-black": "#001F11",
        "jungle-green": "#123524",
        "moss-green": "#3D5A40",
        "warm-sand": "#F5F1E8",
        "soft-sage": "#E5F1E8",
        "surface-light": "#F0FCF3",
        "text-dark": "#131E18",
        "muted-text": "#414843",
        outline: "#727973",
        "campfire-gold": "#FBBB58",
        "warm-gold": "#C58B2C",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, rgba(0,31,17,0.7) 0%, rgba(18,53,36,0.5) 50%, rgba(0,31,17,0.8) 100%)",
        "card-gradient":
          "linear-gradient(to top, rgba(0,31,17,0.85) 0%, rgba(0,31,17,0.2) 60%, transparent 100%)",
      },
      boxShadow: {
        "card-hover": "0 20px 60px rgba(18,53,36,0.15)",
        "nav-float": "0 8px 32px rgba(0,31,17,0.12)",
        gold: "0 4px 20px rgba(251,187,88,0.3)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
