const colors = require('./src/assets/styles/configs/abstracts/colors');
const screens = require('./src/assets/styles/configs/abstracts/screens');
const animation = require('./src/assets/styles/configs/abstracts/animation');
const fontFamily = require('./src/assets/styles/configs/typography/fontFamily');
const fontSize = require('./src/assets/styles/configs/typography/fontSizes');
const letterSpacing = require('./src/assets/styles/configs/typography/letterSpacing');

module.exports = {
  mode: 'jit',
  theme: {
    colors,
    screens,
    animation,
    fontSize,
    letterSpacing,
    extends: {
      fontFamily,
    },
  },
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/*.html'],
};
