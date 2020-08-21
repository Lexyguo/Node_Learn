const http = require('http');

class fKoa {
  listen(...args) {
    // 创建server
    const server = http.createServer((req, res) => {
      this.callback(req, res)
    })

    // 启动监听
    server.listen(...args)
  }

  use(callback) {
    this.callback = callback
  }
}

module.exports = fKoa