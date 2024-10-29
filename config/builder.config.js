const path = require("path");

exports.PORT = 3000; // 开发环境端口号
exports.PATH = {
    PUBLIC_PATH: "/web/", // 打包的服务器资源目录路径
    PUBLIC_PATH_DEV: "/", //开发时的服务器资源路径（一般情况下无需改动）
    ROOT: path.resolve(__dirname,"..") //当前项目根目录（一般情况下无需改动）
}
exports.DIR = {
    DIST: 'dist', // 打包输出目录
    STYLE: "styles", //打包输出样式文件目录
    SCRIPT: "js", //打包输出js文件目录
    FONT: "fonts", //打包输出字体文件目录
    IMAGE: "images", //打包输出图片文件目录
    PUG: 'pug', //pug文件目录名（一般情况下无需改动）
    WORK: 'src' // 主要工作目录 （一般情况下无需改动）
}
