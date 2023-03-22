const marge = require('webpack-merge').merge;
const baseConfig = require('./webpack.config');
const CONFIG = require('./builder.config');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = marge(baseConfig,{
    mode: 'development',
    //将错误信息准确的定位
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        port: CONFIG.PORT,
        publicPath: CONFIG.PATH.PUBLIC_PATH,
        quiet: true,
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
    ],
})
