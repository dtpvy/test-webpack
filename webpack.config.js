const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: ["./src/index.js"],
    "app-entry-a": [
      "./src/app-entries/app-entry-a.js",
      "./src/app-entries/app-index.js",
    ],
    "app-entry-b": [
      "./src/app-entries/app-entry-b.js",
      "./src/app-entries/app-index.js",
    ],
    "app-entry": [
      "./src/app-entries/app-index.js",
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      excludeChunks: ["app-entry-a", "app-entry-b", "app-entry"],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },
};
