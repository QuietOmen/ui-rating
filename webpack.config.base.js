'use strict';

var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    UIElements: './src/index.js'
  },
  output: {
    library: 'UIElements',
    libraryTarget: 'umd'
  },
  resolve: {
    root: path.resolve(__dirname, './src'),
    modulesDirectories: [path.join(__dirname, 'node_modules')],
    extensions: ["", ".js", ".jsx", ".scss"]
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['transform-decorators-legacy'],
          presets: ['react', 'es2015', 'stage-0']
        },
        include: path.resolve(__dirname, 'src/'),
        exclude: /(node_modules|bower_componenets)/
      },
      {
        test: /\.png|\.gif|\.jpe?g$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.woff|\.woff2/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.wav|\.mp3|\.ttf|\.eot/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=compressed',
        include: path.resolve(__dirname, "./src"),
        exclude: /(node_modules|bower_componenets)/
      }
    ]
  },
  externals: ['react']
};
