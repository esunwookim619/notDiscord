const path = require('path');
const SRC = path.resolve(__dirname, "node_modules");

module.exports = {
  context: __dirname,
  entry: "./frontend/index.jsx",
  output: {
    path: path.join(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      },
      {
        test: /\.mp3$/,
        include: SRC,
        loader: "file-loader"
      }
    ]
  },
  devtool: "eval-source-map"
}; 