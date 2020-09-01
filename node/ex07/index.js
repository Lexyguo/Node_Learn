const fs = require('fs')
module.exports.createLoader = config => {
    const loader = (scanFolder, cb) => {
        const files = fs.readdirSync(scanFolder);
        files.forEach(filename => {
            filename = filename.replace(".js", "");
            const file = require(scanFolder + "/" + filename);
            cb(filename, file);
        })
    }

    return {
        initFunction: scanFolder => {
            const ret = {}
            // ##BEGIN## 代码已加密
            loader(scanFolder, (filename, file) => {
                ret[filename] = typeof file === 'function' ? file(config) : file
            })
            // ##END##
            return ret
        }
    }
}

