/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#16c60c",
        secondary: "#f04f37",
      }
    },
  },
  plugins: [],
}
