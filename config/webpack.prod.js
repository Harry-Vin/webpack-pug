const marge = require('webpack-merge').merge;
const baseConfig = require('./webpack.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = marge(baseConfig, {
    mode: 'production',
    stats: 'normal',
    plugins: [
        new CleanWebpackPlugin()
    ]
})


