/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    container:{
      center:true,
      screens:{
        DEFAULT: '100%',
        sm:'576px',
        md:'768px',
        lg:'992px',
        xl:'1200px',
        '2xl': '1400px',
      },
    
    }
  },
  plugins: [],
}

