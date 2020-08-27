const { EventEmitter } = require('events');
module.exports = class Connection {
    // ##BEGIN## 代码已加密
    constructor() {
        this.event = new EventEmitter();
    }

    onConn(fn) {
        this.event.on('connect', fn);
    }

    connection(name) {
        this.event.emit('connect')
    }
    // ##END##
}
