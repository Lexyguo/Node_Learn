const express = require('express')
// http-proxy-middleware
// 0.x.x版本的引用方式 const proxy = require('http-proxy-middleware');
// 1.0.0版本的引用方式
const { createProxyMiddleware } = require('http-proxy-middleware')
const app = express()
app.use(express.static(__dirname + '/'))
app.use('/api', createProxyMiddleware({ target: 'http://localhost:3000' }))
module.exports = app