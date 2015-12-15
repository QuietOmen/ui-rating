var webpack = require('webpack'),
    path = require("path");

module.exports = {
  entry: {
    UIElements: './src/index.js'
  },
  output: {
    library: 'UIElements',
    libraryTarget: 'umd'
  },
  resolve: {
    modulesDirectories: [path.join(__dirname, 'node_modules')],
    extensions: ["", ".js", ".jsx", ".scss"]
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.resolve(__dirname, 'src/'),
        exclude: /(node_modules|bower_componenets)/
      },
      {
        test: /\.svg|\.png|\.gif|\.jpe?g$/,
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
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 2 version',
          'sass?outputStyle=compressed'
        ],
        include: path.resolve(__dirname, "./src"),
        exclude: /(node_modules|bower_componenets)/
      }
    ]
  },
  externals: ['react', 'radium']
};
