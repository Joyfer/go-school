const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./functions/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: { light: "#6DECF2", DEFAULT: "#33E1E9" },
        error: { light: "#EF7A7A", DEFAULT: "#E54C4C" },
        success: { light: "#71EFA9", DEFAULT: "#3AE988" },
        accent: { light: "#5EC7FF", DEFAULT: "#27A6E9" },
        lime: { DEFAULT: "#0DE9B1" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
