const express = require('express');
const webpack = require('webpack');


const app = express();

//webpack requirements
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.dev.js');

//compile webpack with its configuration
const compiler = webpack(config);

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
	//instruct webpack to use the webpack-dev-middleware and use the webpack.config.js as configuration file as a base
	app.use(webpackDevMiddleware(compiler, {
		stats: {colors: true}, publicPath: config.output.publicPath
	}));
	app.use(webpackHotMiddleware(compiler));//important
}
//serve the files on port 3000
app.listen(3000, function () {
	console.log('App is listening on port');
});