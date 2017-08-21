const webpack = require("webpack")
const path = require("path")

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./js/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "app.js"
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ["babel-loader"]
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ["style-loader", "css-loader", "sass-loader"]
    }]
  }
}
