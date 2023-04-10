// 1. 导入 http 模块
const http = require('http')
const url = require('url');
// // 2. 创建 web 服务器实例
// const server = http.createServer()
// // 3. 为服务器实例绑定 request 事件，监听客户端的请求
// server.on('request', function (req, res) {
//   console.log('Someone visit our web server.')
// })
// // 4. 启动服务器
// server.listen(8080, function () {
//   console.log('server running at http://127.0.0.1:8080')
// })


let server = http.createServer();
server.on('request', (req, res) => {
  console.log('... get a req');
  console.log(req.url);
  console.log(req.method);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(urlencode(req.url) + '  hahahahaha 哈哈');
})

server.listen(8088, () => {
  console.log('running');
})