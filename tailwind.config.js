/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}", "./pages/**/*.{jsx,js}", "./components/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: ["Inter", "sans-serif"],
      gridTemplateColumns: {
        body: "repeat(auto-fill, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [],
};
