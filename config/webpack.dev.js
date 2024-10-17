const marge = require('webpack-merge').merge;
const baseConfig = require('./webpack.config');
const CONFIG = require('./builder.config');
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const path = require("path");

module.exports = async function () {
    const bConfig = await baseConfig();
    return marge(bConfig, {
        mode: 'development',
        //将错误信息准确的定位
        devtool: 'inline-source-map',
        stats: 'errors-warnings',
        devServer: {
            static: {
                directory: path.join(CONFIG.PATH.ROOT, 'dev_root'),
                publicPath: CONFIG.PATH.PUBLIC_PATH_DEV
            },
            client: {
                overlay: {
                    errors: true,
                    warnings: false,
                },
                progress: true,

            },
            watchFiles: {
                paths: `${CONFIG.PATH.ROOT}/${CONFIG.DIR.WORK}/**/*.*`,
                options: {
                    usePolling: true,
                },
            },
            compress: true,
            port: CONFIG.PORT,
        },
        plugins: [],
    })
}
