/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#1E104E",
        secondary: "#FFC85C",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
