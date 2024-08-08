/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Prata', 'serif'],
        secondary: ['Roboto', 'sans-serif'],
      },
      colors: {
        brown: '#967f50',
        'light-brown': '#FAF3E6',
        'dark-gray': '#34312c',
        'semi-gray': '#413d37',
        'rat-gray': '#666563',
        'light-gray': '#a5a5a5',
        'extra-light-gray': '#EDEDED'
      },
      backgroundImage: {
        'header': 'url("./assets/images/bg-details.jpg")'
      }
    },
  },
  plugins: [
    daisyui,
  ],
}