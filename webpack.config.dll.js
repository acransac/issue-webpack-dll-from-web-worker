const path = require('path');
const webpack = require('webpack');

module.exports = [
  {
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
  },
  {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
      dllworker: "./src/dll.js"
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
      library: {
        name: "dllworker",
        type: "self"
      }
    },
    plugins: [
      new webpack.DllPlugin({
        name: "dllworker",
        path: path.resolve(__dirname, "dist/dllworker-manifest.json")
      })
    ]
  }
];
