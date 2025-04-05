/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Make sure this is set correctly
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')], // Add this line
};