const marge = require('webpack-merge').merge;
const baseConfig = require('./webpack.config');
const CONFIG = require('./builder.config');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const path = require("path");

module.exports = marge(baseConfig,{
    mode: 'development',
    //将错误信息准确的定位
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(CONFIG.PATH.ROOT, 'dev_root'),
            publicPath: CONFIG.PATH.PUBLIC_PATH_DEV
        },
        compress: true,
        port: CONFIG.PORT,
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
    ],
})
