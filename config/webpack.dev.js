const marge = require('webpack-merge').merge;
const baseConfig = require('./webpack.config');
const CONFIG = require('./builder.config');
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = async function () {
    const bConfig = await baseConfig();
    return marge(bConfig, {
        mode: 'development',
        //将错误信息准确的定位
        devtool: 'inline-source-map',
        stats: 'errors-warnings',
        output: {
            publicPath: CONFIG.PATH.PUBLIC_PATH_DEV,
        },
        devServer: {
            static: {
                directory: path.join(CONFIG.PATH.ROOT, 'dev_root'),
                publicPath: CONFIG.PATH.PUBLIC_PATH_DEV
            },
            client: {
                overlay: {
                    errors: true,
                    warnings: false,
                    runtimeErrors: true,
                },
                progress: true,

            },
            watchFiles: {
                paths: `${CONFIG.PATH.ROOT}/${CONFIG.DIR.WORK}/**/*.*`,
                options: {
                    usePolling: true,
                },
            },
            // proxy: [
            //     {
            //         context: ['/kx'],
            //         target: "http://192.168.10.117:9989",
            //     },
            // ],
            compress: true,
            port: CONFIG.PORT,
        },
        plugins: [
            new Dotenv({
                path: path.resolve(__dirname,'../.env.development')
            })
        ],
    })
}
