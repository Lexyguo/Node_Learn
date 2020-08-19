// const fs = require('fs');
// 同步读取
// const data = fs.readFileSync('./config.js');
// console.log('data', data); // 二进制文件
// console.log('data', data.toString()); // 文件文本

// 异步回调
// fs.readFile('./config.js', (err, data) => {
//   if (err) throw err
//   console.log('data', data.toString());
// });

// Promise
// (async () => {
//   const fs = require('fs');
//   const { promisify } = require('util');
//   const readFile = promisify(fs.readFile);
//   const data = await readFile('./config.js');
//   console.log('data', data.toString())
// })()

// Process
// process.nextTick(async () => {
//   const fs = require('fs');
//   const { promisify } = require('util');
//   const readFile = promisify(fs.readFile);
//   const data = await readFile('./config.js');
//   console.log('data', data.toString())
// })

// 多个异步嵌套时如何解决？？
// 1、重写Promise
// 2、webpack中的插件 使用AST语法树