/*
Copyright [2018] [Matthew B White]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: [
            'babel-polyfill',
            './src/main.js'
        ]
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'docs')
    },
    plugins: [
        new CleanWebpackPlugin(['docs']),
        new CopyWebpackPlugin([{ from: 'src/pages/**/*', flatten: true }], {})
    ],
    module: {
        rules: [
            {
                // Only run `.js` and `.jsx` files through Babel
                test: /\.js?$/,
                //skip the files in the node_modules directory
                exclude: /node_modules/,
                loader: 'babel-loader',
                // Options to configure the babel. here we have set up the preset. this can be replaced with .babelrc file
                query: {
                    presets: ['env']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
            ,
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },

        ]
    }
};
