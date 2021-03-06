const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/javascripts/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
      new MiniCssExtractPlugin({
        filename: 'app.css'
      })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: (filepath) => {
      return /dist\/.*/.test(filepath)
    },
    compress: true,
    host: 'localhost',
    port: 11111,
    proxy: {
      '/': 'http://localhost:1111'
    },
    open: true,
    openPage: ''
  }
}
