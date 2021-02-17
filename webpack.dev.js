const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'source-map',
    output: {
        libraryTarget: 'var',
        library: 'Client',
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
                use: [ 'style-loader', 'css-loader', 'sass-loader' ] 
            }
        ]
    },
    plugins: [
        // new HtmlWebPackPlugin({ template: './src/index.html',
        //                         filename: './index.html' }),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        //  may need to install v4
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}