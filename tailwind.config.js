/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      }
    },
  },
  darkMode: ["class"],
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
};
