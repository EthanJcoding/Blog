const { colors, width, screens } = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './component/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        wave: {
          "0%": {
            left: "0"
          },
          "100%": {
            left: "-1480px"
          }
        }

      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        wave: "wave 4s linear infinite"
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      colors: {
        ...colors,
        githubFollow: "#30363D",
        githubFollowText: "#C9D1D9",
        hover: "#FBFBFB",
        contentText: "#3F3F4A",
        linkText: "#12b886",
        goms_grid: "#FFFDFC",
        codeTech_grid: "#F4F4F5",
      },
      width: {
        ...width,
        '820': "51.25rem"
      },
      screens: {
        ...screens,
        'xsm': { 'max': '420px' },
        '2xsm': { 'max': '366px' },
        'xlg': { 'min': '1280px' },
        '2xlg': { 'min': '1400px' }
      }

    },
  },
  plugins: [],
}
