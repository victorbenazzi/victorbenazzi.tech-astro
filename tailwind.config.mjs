/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      colors: {
        "indigo-hover": "#1F212C",
        yellowBranding: "#EDCA4C",
      },
      
      animation: {
        topToBottom: "topToBottom 0.9s ease-in-out",
        BottomToTop: "BottomToTop 0.9s ease-in-out",
        BottomToTopDelay: "BottomToTop 0.9s ease-in-out",
      },
      keyframes: {
        topToBottom: {
          "0%": {
            transform: "translateY(-10%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        BottomToTop: {
          "0%": {
            transform: "translateY(10%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
    },
  },

  plugins: [require("tailwind-scrollbar")],
};
