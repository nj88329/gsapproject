/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./index.html",        // include if using Vite with HTML entry
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        limegreen: "#32CD32",
      },
    },
  },
   plugins: [scrollbarHide],

}
