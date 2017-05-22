/*
* @Author: Alan
* @Date:   2017-05-22 10:52:07
* @Last Modified by:  Alan
* @Last Modified time: 2017-05-22 14:13:11
*/

'use strict';

var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry: './public/javascripts/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: "/assets/",
		filename: 'index.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname, './node_modules'),
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			}
		})
	]
}