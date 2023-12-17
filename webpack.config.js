const path = require('path');

module.exports = {
  entry: './src/index.js', // replace with the main file of your project
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};