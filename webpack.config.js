module.exports = {
	entry: "./source/script/main.jsx",
	output: {
		path: "app/js",
		filename: "script.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader"
			},
			{
				test: /\.scss/,
				loaders: ["style", "css", "sass"]
			}
		]
	}
};