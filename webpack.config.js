const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  }
}
