const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
	mode: "production",
	entry: [path.resolve(__dirname, "src/index.js")],
	target: "web",
	output: {
		path: path.resolve(__dirname, "dist"),
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
			{ test: /\.css$/, loaders: ["style", "css"] },
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	devtool: "source-map",
	plugins: [
		new CleanWebpackPlugin([
			"./dist/bundle*.js",
			"./dist/index.html",
			"./dist/bundle*.js.map"
		]),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
			inject: false //Prevents 2 script tags for bundle.js
		})
	]
};
