/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-primary': '#005960',
        'teal-light': '#01c6c6',
        'teal-dark': '#00474c',
        'teal-darker': '#0a6668',
      },
      fontFamily: {
        'dawning': ['"Dawning of a New Day"', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        jump: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        jump: 'jump 1s ease-in-out infinite alternate',
        marquee: 'marquee 25s linear infinite',
        marqueeReverse: 'marqueeReverse 25s linear infinite',
      },
    },
  },
  plugins: [],
}

