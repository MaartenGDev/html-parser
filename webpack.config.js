const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/public/js/',
        filename: 'app.js',
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        require.resolve('babel-preset-es2015')
                    ]
                }

            }
        ]
    }
};