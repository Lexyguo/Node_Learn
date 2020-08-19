const fs = require('fs');
const rs = fs.createReadStream('./IMG_3297.JPG');
const ws = fs.createWriteStream('./1.png')
rs.pipe(ws)