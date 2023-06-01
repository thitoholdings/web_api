/** @type {import('tailwindcss').Config} */
const labelsClasses = ["red", "indigo", "gray", "green", "blue", "purple"];

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    safelist: [
      ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
      ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
      ...labelsClasses.map((lbl) => `text-${lbl}-400`),
    ],
  },

  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      backfont: "#fc466b",
      white: "#fff",
      black: "#000",
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans"],
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
