var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'build');
var mainPath = path.resolve(__dirname, 'index.js');

var config = {
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8000',
    mainPath
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {

    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [nodeModulesPath]
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  resolve: {
    modulesDirectories: [path.join(__dirname, 'node_modules')],
    extensions: ["", ".js", ".jsx"]
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
};

module.exports = config;
