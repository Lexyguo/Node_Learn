# 镜像库创建
## 创建项目
```
// 创建项目目录
mkdir <your-demo-name>

cd <your-demo-name> 

// 初始化项目
npm init -y

// 安装基础依赖，此处可根据自身项目所需内容增删
npm i commander download-git-repo ora handlebars figlet clear chalk open -s 
```

## 发布npm
```
#!/usr/bin/env bash
npm config get registry # 检查仓库镜像库
npm config set registry=http://registry.npmjs.org
echo '请进行登录相关操作：'
npm login # 登陆
echo "-------publishing-------"
npm publish # 发布
npm config set registry=https://registry.npm.taobao.org # 设置为淘宝镜像
echo "发布完成"
exit
```