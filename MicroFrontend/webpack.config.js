const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

//
module.exports = {
  output: {
    publicPath: "http://localhost:3001/",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  devServer: {
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
      },
    ],
  },
  entry: {
    index: ["babel-polyfill", "./src/index.js"],
  },
  mode: "production",
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "micro_frontend",
      filename: "remoteEntry.js",
      exposes: {
        "./komendeVeranstalltungen": "./src/pages/KomendeVeranstaltungen",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
