import type { Config } from "tailwindcss";

import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}", // Adjust if your files are elsewhere
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};

export default config;
