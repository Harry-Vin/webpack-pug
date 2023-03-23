const glob = require("glob");
const CONFIG = require("./builder.config");
const path = require("path");

exports.getEntry = function () {
    const entry = {};
    for (let item of glob.sync("**/*.pug",{cwd: path.join(CONFIG.PATH.ROOT,CONFIG.DIR.WORK,CONFIG.DIR.PUG)})){
        const key = item.replace(/\.pug/g,'');
        entry[key] = `./${CONFIG.DIR.WORK}/${CONFIG.DIR.PUG}/${item}`;
    }
    return entry
}