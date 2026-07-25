import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base canvas — mostly hidden behind the wallpaper mesh in globals.css
        bg: "#ffffff",
        ink: "#000000",
        muted: "#2d2e33",
        border: "rgba(255,255,255,0.14)",

        // Remapped to real macOS system colors. Names kept the same as
        // before (func/keyword/string/warn) so category badges, links,
        // and status dots don't need any logic changes — only the hex
        // values changed.
        func: "#0A84FF", // macOS blue   — web category, links, primary CTA
        keyword: "#BF5AF2", // macOS purple — mobile category, role labels
        string: "#30D158", // macOS green  — api category, status dot
        warn: "#FF9F0A", // macOS orange — tool category, featured star
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        glass:
          "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
