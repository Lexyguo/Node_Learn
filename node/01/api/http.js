const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
  // console.log('this is a request', getPrototypeChain(request));
  // response.end('Hello GUO');

  const { url, method, headers } = request;
  if (url === '/' && method === 'GET') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        response.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf-8'
        })
        response.end('500 服务器请求失败')
        return
      }
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html')
      response.end(data)
    })
  } else if (url === '/user' && method === 'GET') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    response.end(JSON.stringify({ data: { list: [{ id: '1', name: 'Lucy' }, { id: '2', name: 'Nacy' }], count: 2 } }))
  } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
    fs.createReadStream('.' + url).pipe(response)
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    response.end('404 没有该页面');
  }
})

// 打印原型链
function getPrototypeChain(obj) {
  const protoChain = []
  while (obj = Object.getPrototypeOf(obj)) {
    protoChain.push(obj)
  }
  return protoChain;
}

server.listen(3000, err => {
  console.log('Server is Start');
})

// 如果程序中有大量的if else该怎么处理
// 使用策略模式