const path = require("path");

exports.PORT = 3000;
exports.PATH = {
    PUBLIC_PATH: "/",
    PUBLIC_PATH_DEV: "/",
    ROOT: path.resolve(__dirname,"..")
}
exports.DIR = {
    DIST: 'dist',
    STYLE: "styles",
    SCRIPT: "js",
    FONT: "fonts",
    IMAGE: "images",
    PUG: 'pug',
    WORK: 'src'
}
