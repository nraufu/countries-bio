const colors = require('./src/assets/styles/configs/abstracts/colors');
const screens = require('./src/assets/styles/configs/abstracts/screens');
const fontSize = require('./src/assets/styles/configs/typography/fontSizes');

module.exports = {
  mode: 'jit',
  theme: {
    colors,
    screens,
    fontSize,
  },
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/*.html'],
};
