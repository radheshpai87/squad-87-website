// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        highlight: '#10B981', // emerald-500
        'squad-orange': '#F2572D', // Custom Squad 87 orange
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'sans': ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
