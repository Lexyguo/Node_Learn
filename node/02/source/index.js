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

// app.use(ctx => {
//   ctx.body = '1'
// })

const delay = () => new Promise(resolve => setTimeout(() => resolve(), 2000));
app.use(async (ctx, next) => {
  ctx.body = "1";
  await next();
  ctx.body += "5";
});
app.use(async (ctx, next) => {
  ctx.body += "2";
  await delay();
  await next();
  ctx.body += "4";
});
app.use(async (ctx, next) => {
  ctx.body += "3";
});

app.listen(3000, () => {
  console.log('监听3000端口')
})