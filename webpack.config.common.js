const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
	

	module: {
		rules: [
			//complile es5, es6 code with babel
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
				'babel-loader'
				]
			},
			//pack css files
			{
				test: /\.css$/,
				use: [
				'style-loader',
				'css-loader'
				]
			},
			//pack pictures
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [{
				loader: 'url-loader',
				options: {
					limit: 10000 //Convert images < 10kb to base64 strings fallbact to file-loader as default if > 10kb
				}}]
			},
			//pack fonts
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
				'file-loader'
				]
			}
		]
	},

	plugins: [
		 new webpack.ProvidePlugin({
		    "window.hljs": "highlight.js",//include highlight.js, this is also where you include latex
		    /*"window.katex": "katex"*/
		  }),		
		//clean redundant bundled files in the dist folder
		new CleanWebpackPlugin(['dist'])
		//remove code duplication in bundles		
	]

};