const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CONFIG = require('./builder.config.js');
const {resolve} = path;
const PugPlugin = require("pug-plugin");
const {getEntry} = require("./webpack.util.js");
const BabelConfig = require("../babel.config.js");

module.exports = {
    entry: getEntry(),
    output: {
        path: path.join(CONFIG.PATH.ROOT, CONFIG.DIR.DIST),
        publicPath: CONFIG.PATH.PUBLIC_PATH,
    },
    context: path.join(CONFIG.PATH.ROOT, CONFIG.DIR.WORK),
    devtool: false,
    plugins: [
        new CleanWebpackPlugin(),
        new PugPlugin({
            pretty: false, // formatting HTML, useful for development mode
            js: {
                // output filename of extracted JS file from source script
                filename: `/${CONFIG.DIR.SCRIPT}/[name].[contenthash:5].js`,
            },
            css: {
                // output filename of extracted CSS file from source style
                filename: `/${CONFIG.DIR.STYLE}/[name].[contenthash:5].css`,
            }
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, '../src'),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    minChunks: 1,
                    chunks: 'all',
                    priority: 100
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [PugPlugin.loader]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, '../postcss.config.js'),
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, '../postcss.config.js'),
                            }
                        }
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:5].[ext]',
                            outputPath: CONFIG.DIR.IMAGE,
                        }
                    },
                ]
            },
            {
                test: /\.(eot|woff2|woff|ttf|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: CONFIG.DIR.FONT
                        }
                    },
                ]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: BabelConfig
                    }
                ]
            },
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: BabelConfig
                }
            },
        ]
    },
};
