const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    const url = '../' + (req.url.endsWith('/') ? req.url + 'index.html' : req.url);
    fs.readFile(url, (err, data) => {
        if (!err) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
}).listen(1111, '127.0.0.1');
