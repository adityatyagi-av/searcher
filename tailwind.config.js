/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class', //changed it to class so that classes can be applied for the dark mode
  theme: {
    extend: {},
  },
  plugins: [],
}