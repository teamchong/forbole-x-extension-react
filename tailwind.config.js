const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    // define custom color
    extend: {
      colors: {
        backgroundColor: {
          100: '#F7F7F7',
        },
        font: {
          100: '#E6E6E6',
          200: '#646464',
        },
        icon: {
          light: '#8B8B8B',
          dark: '#AFAFAF',
        },
        popup: {
          100: 'white',
        },
        divider: {
          100: '#2B2F35',
        },
      },
    },

    // define color mapping
    nightwind: {
      colors: {
        backgroundColor: {
          100: '#1D1E22',
        },
        font: {
          100: '#000000',
          200: '#9D9D9D',
        },
        popup: {
          100: '#25282D',
        },
      },
    },
  },
  plugins: [require('nightwind')],
};
