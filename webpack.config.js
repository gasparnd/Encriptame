const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/main.js'
	},
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules:[
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader'
				]
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	devServer:{
		/*open: true*/
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin ({
			filename: 'styles/styles.css'
		})
	]
}