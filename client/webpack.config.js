// const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

// const path = require("path");
// const webpack = require("webpack");

// const isDev = process.env.NODE_ENV === 'development';

// module.exports = {
//   entry: "./src/index.js",
//   devtool: 'inline-source-map',
//   mode: isDev ? 'development' : 'production',
//   module: {
//     rules: [
//       {
//         test: /\.(js|ts|tsx)$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: "babel-loader",
//         options: { 
//           presets: ["@babel/env"],
//           plugins: [
//             "@vanilla-extract/babel-plugin"
//           ]
//         }
//       },
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           {
//             loader: 'css-loader',
//             options: {
//               modules: {
//                 localIdentName: '[name]__[local]--[hash:base64:5]'
//               },
//             },
//           },
//         ],
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//           },
//         ],
//       },
//     ]
//   },
//   resolve: { extensions: ["*", ".js", ".jsx", '.ts', '.tsx', '.json'] },
//   output: {
//     path: path.resolve(__dirname, "dist/"),
//     publicPath: "/dist/",
//     filename: "bundle.js"
//   },
//   devServer: {
//     contentBase: path.join(__dirname, "public/"),
//     port: 3333,
//     publicPath: "http://localhost:3333/dist/",
//     hotOnly: true
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(), 
//     new VanillaExtractPlugin(),
//   ]
// };

const path = require('path');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, './src/index.tsx'),
  mode: 'development',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                '@babel/preset-typescript',
                ['@babel/preset-react', { runtime: 'automatic' }],
                [
                  '@babel/preset-env',
                  { targets: { node: 14 }, modules: false },
                ],
              ],
              plugins: ['@vanilla-extract/babel-plugin'],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new VanillaExtractPlugin(),
  ],
  stats: 'minimal',
};
