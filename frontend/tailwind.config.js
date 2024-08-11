/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#0EBE7F",
        'light-green':"rgba(14, 190, 127, 0.20)"
      },
      fontFamily:{
        'rubik' : ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}