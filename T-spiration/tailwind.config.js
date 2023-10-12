/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px', 
    },
    extend: {
      backgroundImage: {
        't-shirt': "url('public/images/T-shirt.png')",
      },
      colors:{
        'base1': '#18EFFA',
        'base2': '#0D72FD',
      }
    },
  },
  plugins: [],
}