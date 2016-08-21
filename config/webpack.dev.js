var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');

const ENV = process.env.ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

const metadata = {
  host: HOST,
  port: PORT,
  ENV: ENV
};

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: './dist',
    filename: "[name].js"
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    port: metadata.port,
    host: metadata.host,
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
    progress: false,
    stats: 'minimal'
  }
});
