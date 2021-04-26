const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    dll: "./src/dll.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: "dll"
  },
  plugins: [
    new webpack.DllPlugin({
      name: "dll",
      path: path.resolve(__dirname, "dist/dll-manifest.json")
    })
  ]
};
