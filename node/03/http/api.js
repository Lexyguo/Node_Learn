const http = require("http");
const fs = require("fs");
const app = http
    .createServer((req, res) => {
        const { method, url } = req;
        console.log(method, url)
        console.log('Cookie =>', req.headers.cookie)
        if (method == "GET" && url == "/") {
            fs.readFile("./index.html", (err, data) => {
                res.setHeader("Content-Type", "text/html");
                res.end(data);
            });
        } else if (method == "GET" && url == "/api/users") {
            res.setHeader("Content-Type", "application/json");
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000')
            // 预检options中和/users接⼝中均需添加
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            // 设置cookie
            res.setHeader('Set-Cookie', 'cookie1=123')
            res.end(JSON.stringify([{ name: "tom", age: 20 }]));
        } else if (method == "OPTIONS" && url == "/api/users") {
            res.writeHead(200, {
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Headers": "X-Token,Content-Type",
                'Access-Control-Allow-Credentials': 'true',
                "Access-Control-Allow-Methods": "PUT"
            });
            res.end();
        }
    });

module.exports = app