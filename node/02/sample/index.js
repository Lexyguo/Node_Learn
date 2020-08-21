const Koa = require('koa');
const app = new Koa();
app.use(async (ctx, next) => {
  const state = new Date()
  await next()
  const end = new Date()
  console.log(`请求${ctx.url}耗时${parseInt(end - state)}ms`)
})
app.use(async (ctx, next) => {
  const expire = Date.now() + 102
  while (Date.now() < expire)
    ctx.body = {
      name: 'Tom'
    }
})

app.listen(3000, () => {
  console.log('Koa start...')
})