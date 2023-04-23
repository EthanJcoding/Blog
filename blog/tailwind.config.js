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
      colors: {
        ...colors,
        githubFollow: "#30363D",
        githubFollowText: "#C9D1D9"
      },
      width: {
        ...width,
        '820': "51.25rem"
      },
      screens: {
        ...screens,
        'xsm': { 'max': '420px' }
      }

    },
  },
  plugins: [],
}
