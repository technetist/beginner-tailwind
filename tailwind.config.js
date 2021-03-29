const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        cyan: colors.cyan,
        'light-blue': colors.lightBlue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
