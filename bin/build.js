#!/usr/bin/env node
const webpack = require("webpack");
const config = require("../config/webpack.prod.js");

webpack(
    config,
    (err, stats) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(
            stats.toString({
                chunks: false,
                colors: true,
            })
        );
    }
);
