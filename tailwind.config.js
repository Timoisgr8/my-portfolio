/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      scrollbar: {
        hide: '::-webkit-scrollbar { display: none; }',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('daisyui'), require('tailwind-scrollbar-hide'),],

};