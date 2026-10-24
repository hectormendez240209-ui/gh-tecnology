/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { 50: '#eff6ff', 100: '#dbeafe', 500: '#2563eb', 600: '#1d4ed8', 700: '#1e40af' },
        ink: { 800: '#111a2e', 900: '#0b1220' },
        accent: { 400: '#22d3ee', 500: '#06b6d4' },
      },
    },
  },
  plugins: [],
};
