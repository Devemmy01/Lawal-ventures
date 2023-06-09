/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily:{
      display: ["Orbitron", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
