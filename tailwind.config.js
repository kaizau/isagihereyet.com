/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./site/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        sizes: "font-size, margin, padding",
      },
    },
  },
  plugins: [],
};
