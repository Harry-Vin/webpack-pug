const {getProjectRootPath} = require("./webpack.util");

exports.PORT = 3000;
exports.PATH = {
    PUBLIC_PATH: "./",
    ROOT: getProjectRootPath()
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
