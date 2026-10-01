import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "rgb(var(--color-bg) / <alpha-value>)",
          soft: "rgb(var(--color-bg-soft) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "rgb(var(--color-surface) / <alpha-value>)",
          2: "rgb(var(--color-surface-2) / <alpha-value>)",
        },
        text: {
          DEFAULT: "rgb(var(--color-text) / <alpha-value>)",
          muted: "rgb(var(--color-text-muted) / <alpha-value>)",
          faint: "rgb(var(--color-text-faint) / <alpha-value>)",
        },
        volt: {
          DEFAULT: "rgb(var(--color-volt) / <alpha-value>)",
          hover: "rgb(var(--color-volt-hover) / <alpha-value>)",
          dim: "rgba(var(--color-volt), 0.12)",
          ink: "rgb(var(--color-volt-ink) / <alpha-value>)",
        },
        cyber: {
          teal: "rgb(var(--color-teal) / <alpha-value>)",
          orange: "rgb(var(--color-orange) / <alpha-value>)",
        },
        line: {
          DEFAULT: "rgba(var(--color-line), var(--line-alpha))",
          glow: "rgba(var(--color-volt), 0.35)",
        },
      },
      fontFamily: {
        display: ["var(--font-unbounded)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 26s linear infinite",
        "float-slow": "float 7s ease-in-out infinite",
        "tilt-slow": "tiltRock 9s ease-in-out infinite",
        "marquee": "marquee 32s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-8px)" },
          "50%": { transform: "translateY(10px)" },
        },
        tiltRock: {
          "0%, 100%": { transform: "rotateX(-14deg) rotateY(12deg)" },
          "50%": { transform: "rotateX(14deg) rotateY(-12deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        neon: "var(--shadow-neon)",
        "neon-lg": "var(--shadow-neon-lg)",
        card: "var(--shadow-card)",
      },
    },
  },
  plugins: [],
};
export default config;
