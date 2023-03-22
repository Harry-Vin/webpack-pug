const marge = require('webpack-merge').merge;
const baseConfig = require('./webpack.config');

module.exports = marge(baseConfig, {
    mode: 'production',
    devtool: "source-map"
})


