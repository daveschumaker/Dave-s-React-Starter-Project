//var React = require('react');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

var common = {
    entry: PATHS.app,
    // output: {
    //     path: BUILD_PATH,
    //     filename: 'bundle.js'
    // },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      preLoaders: [
        {
            test: /(\.js$|\.jsx$)/,
            loaders: ['eslint-loader'],
            include: PATHS.app
            // exclude: /node_modules/
        }
      ],
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: PATHS.app
        },
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: PATHS.app
        }
      ]
    },
    eslint: {
      configFile: '.eslintrc',
      formatter: require("eslint-friendly-formatter"),
      emitError: true,
      emitWarning: true,
      failOnError: false
    },
    plugins: [
      new HtmlwebpackPlugin({title: 'React Starter'})
    ],
    clearBeforeBuild: true
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      //stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}