/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/componen/list_content.jsx",
    "./src/componen/submit.jsx"
  ],
  theme: {
    extend: {
      dropShadow:{
        'under' : '(5px 32px 10px #000)'
      },
      backgroundColor:{
        'button' : 'rgb(85, 119, 171)'
      },
  },
  plugins: [],
  }
}
