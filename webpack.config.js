const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[fullhash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/template.html',
            filename: 'index.html',
        }),
    ],
};
