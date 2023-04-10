const http = require('http');

let server = http.createServer();
server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('aaaa  大叔大婶撒方便');
})
server.listen(8888, function () {
    console.log('8888 is running');
})