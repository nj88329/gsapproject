/** @type {import('tailwindcss').Config} */

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
  plugins: [],
}
