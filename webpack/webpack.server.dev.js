const NodemonPlugin = require("nodemon-webpack-plugin");
const path = require("path");
module.exports = () => ({
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: [
					"babel-loader",
					{
						loader: "eslint-loader",
						options: {
							emitWarning: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new NodemonPlugin({
			watch: path.resolve("./ServerBundle"),
			script: "./ServerBundle/server.bundle.js",
			verbose: true,
		}),
	],
});
