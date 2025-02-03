/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "serif"],
      },
      colors:{
        "neon-green" : "#98c944",
        "gray": "#343a40",
        "gray-100": "#6c757d",
      },
    },
  },
  plugins: [],
}