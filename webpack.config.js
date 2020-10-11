const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { main: "./src/pages/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.css$/,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      /* as files with the specified extensions are not located in the same directory
       * better to place images and fonts in separate folders
      */
      {
        test: /\.(png|svg|jpg|gif|woff|woff2)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html" // path to our index.html file
    }),
    new MiniCssExtractPlugin()
  ]
};

