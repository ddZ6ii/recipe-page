/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          nutmeg: '#854632',
          'dark-raspberry': '#7b284f',
        },
        neutral: {
          white: '#ffffff',
          'rose-white': '#fff5fa',
          eggshell: '#f3e6d8',
          'light-grey': '#e4ded8',
          'wenge-brown': '#5f574e',
          'dark-charcoal': '#302d2c',
        },
      },
      fontFamily: {
        serif: ['Young Serif', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
