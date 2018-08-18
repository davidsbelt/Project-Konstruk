const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	entry: {
		app: [	'react-hot-loader/patch',
				'./client/index.js', 
				'webpack-hot-middleware/client' 
				],//if you are using new feautures like Promise add 'babel-polyfill' to this entry

		vendor: ['lodash']//replace with vendors like react or angular
	},
	output: {
		filename: '[name].js',//create different names for file {insisted on using hash instead of chunkhash but don't use hash/chunkhash use only name to increase compile speed, hashes increase compile time}
		path: path.resolve(__dirname, 'dist'),
		//using webpack-dev-middleware for more serious dev serving from node.. you can uninstall webpack-dev-server
		publicPath: '/' //used within the server script
	},

	devtool: 'cheap-module-eval-source-map',//in production use 'source-map'
	/*
	//using webpack-dev-server for minimal front end dev... should change to webpack-dev-middleware later in development
	devServer: {
		contentBase: './dist',
		port: 8080
	},*/
	
	module: {
		/*needed to allow htmlwebpackplugin use 'templates*/
		rules: [
			{        
	        test: /\.html$/,
	        use: [
				'html-loader'
				]
	      	}
		]
	},
	plugins: [
		/*plugin to manage multiple entries (creates seperate bundle for each entry point) and reference them properly
	    also adds the proper manifest files for caching
	    */
	    new HtmlWebpackPlugin({
	      title: 'My bootstrap react app',//page title displayed on tabhead
	      /*i used this option to generate custom html for react mounting because i wanted
	      to initially avoid server side rendering for now. this will be changed soon in the 
	      future*/
	      template: './client/react-index.html' 
	      }),
    
		/*hot loading can be tricky requiring you to programatically remove old nodes or files or whatever 
		after the hot reload has occured.. however there are loaders that will enable you do this easily 
		eg css-loader, react hot loader etc.. take note it caused me some hours of headache */

		new webpack.HotModuleReplacementPlugin(),//for hotmodule replacement
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			miniChunks: Infinity
		}),
		
		new webpack.DefinePlugin({
			'process.env': {
		        CLIENT: JSON.stringify(true),
		        'NODE_ENV': JSON.stringify('development'),
		      }
		})
	]

})