const glob = require("glob");
const CONFIG = require("./builder.config");
const path = require("path");

exports.getEntry = function () {
    const entry = {};
    for (let item of glob.sync("**/*.pug",{cwd: path.join(CONFIG.PATH.ROOT,CONFIG.DIR.WORK,CONFIG.DIR.PUG)})){
        const key = item.replace(/\.pug/g,'');
        entry[key] = `${CONFIG.DIR.PUG}/${item}`;
    }
    return entry
}

exports.getProjectRootPath = function () {
    if(__dirname.indexOf("node_modules") >= 0){
        return __dirname.replace(/(\\node_modules\\).*/g,"");
    }else{
        return path.resolve(__dirname,"..");
    }
}
