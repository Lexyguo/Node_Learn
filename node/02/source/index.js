// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.writeHead(200)
//   res.end('API success')
// })

// server.listen(3000, () => {
//   console.log('监听3000端口')
// })

const koa = require('./fKoa')
const app = new koa()
// app.use((req, res) => {
//   res.writeHead(200)
//   res.end('API success Lexy')
// })

app.use(ctx => {
  ctx.body = '1'
})

app.listen(3000, () => {
  console.log('监听3000端口')
})