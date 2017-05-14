const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        '/js/parsers.js' : './src/demo/parsers.js',
        '/js/translation.js' : './src/demo/translation.js'
    },
    output: {
        path: __dirname + '/public/',
        filename: '[name]',
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