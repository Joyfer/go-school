const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./functions/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: { light: "#2489cc", DEFAULT: "#007acc" },
        error: { light: colors.red[500], DEFAULT: colors.red[600] },
        success: { light: "#5dd8a0", DEFAULT: "#41B883" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
