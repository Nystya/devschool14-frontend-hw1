
const htmlPlugins = require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
            entry: "./src/components/index.js",
            plugins: [
              new htmlPlugins({template: './index.html'}),
              new copyPlugin({
                  patterns: [
                      {
                      from: './css', to: 'css'
                      }
                  ]
              })
            ],
            devServer: {
                historyApiFallback: true,
            },
            devtool: "eval-source-map"
};