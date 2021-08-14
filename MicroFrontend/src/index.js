import("./app");

/*
const path = require("path");
module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  },
  mode: "development",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  output: {
    filename: "bundle.js",
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "mini_shell",
      remoteType: "var",
      remotes: {},
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};




const RemoteApp2 = React.lazy(() => import("micro_frontend/app"));
export default function app() {
  return (
    <div>
      <p>basel</p>
      <Suspense fallback={'Loading App 2'}>
        <RemoteApp2 />
      </Suspense>
    </div>
  );
}
*/
