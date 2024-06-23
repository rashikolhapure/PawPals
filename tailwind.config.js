/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "brice-light": ["Brice Light", "sans-serif"],
        "brice-regular": ["Brice Regular", "sans-serif"],
        "brice-semibold": ["Brice SemiBold", "sans-serif"],
        "brice-black": ["Brice Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
