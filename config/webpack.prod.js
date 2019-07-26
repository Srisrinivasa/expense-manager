const merge = require('webpack-merge');
const { CleanWebpackPlugin, } = require('clean-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const config = require('./webpack.config.js');
const { rootPath, } = require('./paths');

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin({
      root: rootPath,
    }),
    new LodashModuleReplacementPlugin(),
    new TerserWebpackPlugin({
      parallel: true,
      sourceMap: false,
      terserOptions: {
        mangle: true,
        compress: true,
        warnings: true,
        output: {
          comments: false,
        },
      },
    })
  ],
});
