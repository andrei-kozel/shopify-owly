/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./theme/**/*.liquid"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Monserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
