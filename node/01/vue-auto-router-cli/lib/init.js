const { promisify } = require('util');
const figlet = promisify(require('figlet'))

const clear = require('clear');
const chalk = require('chalk');
const log = content => console.log(chalk.green(content))
const { clone } = require('./download');

const spawn = async (...args) => {
  const { spawn } = require('child_process');
  return new Promise(resolve => {
    const proc = spawn(...args)
    proc.stdout.pipr(process.stdout)
    proc.stderr.pipr(process.stderr)
    proc.on('close', () => {
      resolve()
    })
  })
}


module.exports = async name => {
  clear(); // 清屏
  const data = await figlet('Lexy HOLA!')
  log(data)
  log(`🇨🇳创建项目：${name}`)

  // 初始化
  await clone('github:Lexyguo/react-native-demo', name)

  // 安装依赖
  log('安装依赖')
  await spawn('cnpm', ['install'], { cwd: `./${name}` })
  log(chalk.green(`
  👌安装完成：
  To get Start:
  ===========================
  cd ${name}
  npm run serve
  ===========================
  `))
}