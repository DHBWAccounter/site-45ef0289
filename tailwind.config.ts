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
        primary: "#3D9991",
        dark: "#1F1F1F",
        "footer-dark": "#2B2B2B",
      },
      fontFamily: {
        sans: ["var(--font-proxima)", "system-ui", "sans-serif"],
        serif: ["var(--font-garamond)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;