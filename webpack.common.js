var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var BuildConstants = require("./build-constants");

module.exports = {
  entry: [ BuildConstants.ENTRY ],
  resolve: {
    extensions: [ "", ".js", ".jsx" ]
  },
  output: {
    path: BuildConstants.OUTPUT,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: [ "style", "css" ] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "[App]",
      template: BuildConstants.HTML_TEMPLATE
    })
  ]
};
