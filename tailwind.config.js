/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-custom": "#160647",
        "red-custom": "#F22E52",
        "light-blue-custom": "#47BEBA",
        "gray-custom": "#6C6C6C",
      },
      fontFamily: {
        catamaran: ["Catamaran", "sans-serif"],
      },
      screens: {
        xxs: "280px",
        mini: "320px",
        break_custom: "390px",
        break_custom2: "542px",
      },
    },
  },
  plugins: [],
};
