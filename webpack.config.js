const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    // context: __dirname,
    mode: 'development',
    entry: { app: './src/index.js' },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: { extensions: ['.js', '.html'] },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    { loader: 'less-loader', options: { javascriptEnabled: true } }
                ]
            }
            // {
            //     test: /\.less$/,
            //     use: [
            //         {
            //             loader: 'style-loader',
            //         },
            //         {
            //             loader: 'css-loader',
            //         },
            //         {
            //             loader: 'less-loader',
            //             options: {
            //                 modifyVars: {
            //                     'ant-prefix': 'antddd',
            //                     'primary-color': '#FF0000',
            //                     'link-color': '#1DA57A',
            //                     'border-radius-base': '2px',
            //                 },
            //                 javascriptEnabled: true,
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
           template: './src/index.html',
           filename: 'index.html'
        })
    ],
    devServer: {
        contentBase: './dist',
        compress: false,
        open: false,
        historyApiFallback: true,
        stats: {
            modules: false,
            colors: true
        }
    }
};
