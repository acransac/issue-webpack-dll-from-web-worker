const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  entry: {
    app: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: path.resolve(__dirname, "dist/dll-manifest.json")
    })
  ]
};
