const { resolve } = require('path')
const fs = require('fs')
module.exports.getRouter = (path = resolve('./')) => {
  // 获取页面列表
  const list =
    fs.readdirSync(path)
      .map(v => (
`{
    path: '/${v.replace('.vue', '').toLowerCase()}',
    name: '${v.replace('.vue', '').toLowerCase()}',
    component: () => import('./views/${v}')
}`))
  return `
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
${list.join(',\n')},

    ]
})`
}

