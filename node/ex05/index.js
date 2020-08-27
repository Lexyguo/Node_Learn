const { EventEmitter } = require('events');
module.exports = class Connection {
    // ##BEGIN## 代码已加密
    constructor() {
        this.event = new EventEmitter();
    }

    onConn(fn) {
        this.event.on('connect', (name) => fn(name));
    }

    connection(name) {
        this.event.emit('connect', name)
    }
    // ##END##
}
