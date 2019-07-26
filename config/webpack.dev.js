const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const {
  src,
} = require('./paths');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    contentBase: src,
    historyApiFallback: true,
    host: '0.0.0.0',
    overlay: true,
    port: 3000,
  },
});
