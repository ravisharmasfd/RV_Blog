/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#0F172A",
        "secondary": "#9CA3AF",
        "third" : "#00FFF6",
        "fourth" : "#F8FAFC"
      }
    },
  },
  plugins: [],
}
