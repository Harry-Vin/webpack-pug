const marge = require('webpack-merge').merge;
const baseConfig = require('./webpack.config');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const Dotenv = require("dotenv-webpack");
const path = require("path");
const CONFIG = require("./builder.config");

module.exports = async function () {
    const bConfig = await baseConfig();
    return marge(bConfig, {
        mode: 'production',
        stats: 'normal',
        output: {
            publicPath: CONFIG.PATH.PUBLIC_PATH,
        },
        plugins: [
            new CleanWebpackPlugin(),
            new Dotenv({
                path: path.resolve(__dirname,'../.env.production')
            })
        ]
    })
}


