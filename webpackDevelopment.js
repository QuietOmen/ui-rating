var webpack = require('webpack');
var config = require('./webpackBase');

config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
config.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development')
}));

module.exports = config;
