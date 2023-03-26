var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Example of Node.js working on raspberry pi with apache.');
}).listen(3000)