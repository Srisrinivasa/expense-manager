const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const paths = require('./paths');

const config = {
  entry: paths.index,
  output: {
    path: path.join(paths.rootPath, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: paths,
    extensions: ['.js', '.jsx', '.scss'],
  },
  resolveLoader: {
    moduleExtensions: ['-loader'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel',
      },
      {
        test: /.s?css$/,
        use: ['style', 'css', 'sass'],
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'file',
      }
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // SERVER_PROXY: JSON.stringify(`http://${process.env.SERVER_PROXY || 'localhost'}`),
        // SERVER_PORT: JSON.stringify(process.env.SERVER_PORT || 3000),
      },
    })
  ],
};

module.exports = config;
