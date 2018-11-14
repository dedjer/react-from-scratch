const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: [path.resolve(__dirname, "src/index.js")],
	target: "web",
	output: {
		path: path.resolve(__dirname, "src"),
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{ test: /\.css$/, loaders: ["style", "css"] }
		]
	},
	devtool: "source-map",
	plugins: []
};
