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
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightBeige: "#F4F4F4",
        darkCharcoal: "#333333",
        mutedGold: "#D4AF37",
        coolGrayBlue: "#6A7A8C",
        lightCoral: "#FF6F61",
      },
    },
  },
  plugins: [],
};
export default config;
