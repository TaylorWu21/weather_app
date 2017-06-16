const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// require("babel-polyfill");

const VENDOR_LIBS = [
  'react', 'axios', 'moment', 
  'semantic-ui-react', 'semantic-ui-css'
]

const config = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js'
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

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};

module.exports = config;