module.exports = {
	entry: "./src/App.js",
	output: {
		filename: "build/bundle.js"
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015']
			}
		}]
	}
}