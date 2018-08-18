const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
	entry: {
		app: ['./client/index.js'],//if you are using new feautures like Promise add 'babel-polyfill' to this entry
		vendor: ['lodash']//replace with vendors like reacg=t or angular
	},
	output: {
		filename: '[name].[chunkhash].js',//create different names for file {insisted on using hash instead of chunkhash}
		path: path.resolve(__dirname, 'dist'),
		//using webpack-dev-middleware for more serious dev serving from node.. you can uninstall webpack-dev-server
		publicPath: '/' //used within the server script
	},

	devtool: 'hidden-source-map',// hidden-source-map

	plugins: [
		//dead code elimination
		new UglifyJSPlugin({
			sourceMap: true
		}),
		//map hashes for proper caching in production
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.js',
			miniChunks: Infinity
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest'
		}),
		//plugin to specify the environment
		new webpack.DefinePlugin({
			'process.env': {
		        CLIENT: JSON.stringify(true),
		        'NODE_ENV': JSON.stringify('production'),
		      }
		})
	]
})