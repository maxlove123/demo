var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/dbdy.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  	rules: [
	  	{
	  		test: /\.css$/,
	  		use: [
		  		'style-loader',
		  		'css-loader'
	  		]
	  	}
  	]
  }
};
