const fs = require('fs');
const handlebars = require('handlebars');
const chalk = require('chalk');

module.exports = async () => {
  // 获取页面列表
  const list = fs.readdirSync('./src/views')
    .filter(page => page !== 'Home.vue')
    .map(v => ({
      name: v.replace('.vue', '').toLowerCase(),
      file: v
    })) // 这里定义的列表对象格式根据模版文件中相匹配
  // 路由
  complie({ list }, './src/router.js', './template/router.js.hbs')

  // 菜单
  complie({ list }, './src/App.vue', './template/App.vue.hbs')
  /**
   * 编译模版
   * @param {*} meta 数据定义
   * @param {*} filePath 目标文件
   * @param {*} templatePath 模版文件
   */
  function complie(meta, filePath, templatePath) {
    // 判断是否存在模版文件
    if (fs.existsSync(templatePath)) {
      const content = fs.readFileSync(templatePath).toString()
      const result = handlebars.compile(content)(meta)
      // 将内容写入指定的文件中
      fs.writeFileSync(filePath, result)
      console.log(chalk.green(`🚀${filePath} 创建成功`))
    }
  }
}