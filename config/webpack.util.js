const glob = require("glob");
const CONFIG = require("./builder.config");

exports.getEntry = function () {
    const entry = {};
    for (let item of glob.sync("**/*.pug",{cwd: `src/${CONFIG.DIR.PUG}`})){
        const key = item.replace(/\.pug/g,'');
        entry[key] = `${CONFIG.DIR.PUG}/${item}`;
    }
    return entry
}
