const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        libraryTarget: 'var',
        library: 'Client',
    },
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCssAssetsPlugin({})]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            { 
                test: /\.scss$/, 
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ] 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html',
                                filename: './index.html' 
        }),
        new MiniCssExtractPlugin({filename: '[name].css'}),
        new WorkboxPlugin.GenerateSW()
    ]
}