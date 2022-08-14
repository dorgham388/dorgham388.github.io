/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      emerald: colors.emerald,
      sky: colors.sky,
      slate: colors.slate,
      zinc: colors.zinc,
      stone: colors.stone,
      violet: colors.violet,
      neutral: colors.neutral,
    },
    extend: {
      backgroundImage: {
        fixedBack: "url('app/assets/images/bg.jpg')",
      },
    },
  },
  plugins: [],
};
