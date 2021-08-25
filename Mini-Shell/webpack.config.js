const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:3006/",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  devServer: {
    historyApiFallback:true,
    port: 3006,
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

  devtool: "source-map",
  entry: {
    index: ["babel-polyfill", "./src/index.js"],
  },
  mode: "production",
  performance: {
    hints: false,
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mini_shell",
      filename: "remoteEntry.js",
      remotes: {
        micro_frontend: "micro_frontend@http://localhost:3001/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
