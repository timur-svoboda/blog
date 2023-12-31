import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "479px" },
      phablet: { min: "480px", max: "767px" },
      tablet: { min: "768px", max: "1023px" },
      desktop: { min: "1024px" },
    },
    fontFamily: {
      title: ["var(--font-title)", "serif"],
      body: ["var(--font-body)", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
