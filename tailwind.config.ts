import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#60a5fa",
        background: "#f5f7ff",
        surface: "#ffffff",
        textPrimary: "#0f172a",
        textSecondary: "#475569",
      },
      fontFamily: {
        sans: ["Open Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        elevated: "0 24px 60px rgba(15, 23, 42, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
