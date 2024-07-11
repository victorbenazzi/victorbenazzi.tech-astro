/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      colors: {
        "indigo-hover": "#1F212C",
        yellowBranding: "#EDCA4C",
      },
      backgroundImage: {
        "bg-hero-desktop": "url('./src/assets/bg-desktop.png')",
        "bg-hero-mobile": "url('./src/assets/bg-mobile.png')",
      },
    },
  },

  plugins: [require("tailwind-scrollbar")],
};
