import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0b0d",
          soft: "#0e1013",
        },
        surface: {
          DEFAULT: "#12151a",
          2: "#161b21",
        },
        text: {
          DEFAULT: "#f2f4ef",
          muted: "#9aa39c",
          faint: "#6d756e",
        },
        volt: {
          DEFAULT: "#c6f52e",
          hover: "#d5ff3a",
          dim: "rgba(198, 245, 46, 0.12)",
          ink: "#141b04",
        },
        cyber: {
          teal: "#4fe0c0",
          orange: "#ff8a2a",
        },
        line: {
          DEFAULT: "rgba(255, 255, 255, 0.09)",
          glow: "rgba(198, 245, 46, 0.3)",
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
        neon: "0 0 25px rgba(198, 245, 46, 0.3)",
        "neon-lg": "0 0 50px rgba(198, 245, 46, 0.35)",
        card: "0 24px 60px -24px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
