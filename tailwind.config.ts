import type { Config } from "tailwindcss/plugin";

/** Tailwind v4: loaded via @config in app/globals.css */
export default {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./hooks/**/*.{ts,tsx,js,jsx}",
    "./lib/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Between md (48rem) and xl (80rem): smoother `.container` max-width steps
        "md-plus": "52rem",
        "lg-narrow": "60rem",
        lg: "62.5rem",
        "lg-plus": "72rem",
      },
    },
  },
} satisfies Config;
