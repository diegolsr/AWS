

var http = require('http')
var port = 9000
var fs = require('fs')
var html = fs.readFileSync('index.html');

var server = http.createServer(function (req, res) {
     res.writeHead(200, 'OK', {'Content-Type': 'text/plain'})
     res.writeHead(200)
     res.write(html)
     res.end()
    }
)
server.listen(port)
console.log('Listening on port', port)

