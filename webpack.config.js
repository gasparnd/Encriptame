const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name]-bundle.js'
	},
	deverver:{
		open: true
	},
	module: {
		rules:[{
			test: /\.css?/,
			use: [
				{
					loader: MiniCssExtractPlugin.loader,
				}
				'css-loader'
			]
		}]
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new MiniCssExtractPlugin ({
			filename: 'css/[name].css'
		})
	]
}