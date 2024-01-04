const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Three Distortion',
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: ['raw-loader']
            },
        ],
    },
};