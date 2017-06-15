const path = require('path');
require("babel-polyfill");

const config = {
  entry: ['babel-polyfill','./src/index.js'],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: "build/"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      {
        test: /\.(png|svg|jpg|gif|woff2|woff1|eot|woff|ttf)$/,
        use: [
          'file-loader'
        ]
      },
      
    ],
  },

  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};

module.exports = config;