const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/js/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: 'images/[name][ext]',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
    port: 8000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css into files
          'css-loader', // Turns css into commonjs
          'sass-loader' // Turns sass into css
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['build']
    }),

    new HtmlWebpackPlugin({
      title: 'FEA Skill Test',
      filename: 'index.html',
      template: 'src/index.html.ejs',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
  ],
}