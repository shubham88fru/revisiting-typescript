const path = require("path");

module.exports = {
  entry: "./drag-n-drop/src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "drag-n-drop/dist"),
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
