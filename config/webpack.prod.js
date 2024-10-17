const marge = require('webpack-merge').merge;
const baseConfig = require('./webpack.config');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = async function () {
    const bConfig = await baseConfig();
    return marge(bConfig, {
        mode: 'production',
        stats: 'normal',
        plugins: [
            new CleanWebpackPlugin()
        ]
    })
}


