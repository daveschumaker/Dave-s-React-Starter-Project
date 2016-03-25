const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: {
    app: PATHS.app
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
    },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  plugins: [
      new ExtractTextPlugin("css/app.css"),
      new HtmlWebpackPlugin({
        template: PATHS.app + '/index.html'
      })
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        // Compile SCSS into one CSS file. Output file set in plugins property above.
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          "style-loader", "css-loader", "sass-loader"
        )
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      },
      {
        // After we require images inside JSX, this loader outputs them to build folder.
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: "file-loader?name=img/img-[hash:6].[ext]"
      }
    ]
  },
  devServer: {
    contentBase: './build'
  }
};
