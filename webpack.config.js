const htmlWebpackPlugin = require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/components/index.js",
    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html",
        }),
        new copyPlugin({
            patterns: [
                {
                    from: "css",
                    to: "css"
                }
            ]
        })
    ],
    devServer: {
        historyApiFallback: true,
    }
};