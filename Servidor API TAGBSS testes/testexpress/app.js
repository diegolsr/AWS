

const express = require('express')
const app = express() 
console.log(__dirname + '/')
app.use(express.static(__dirname + '/'))

const port = 9000
//nst fs = require('fs')
//nst html = fs.readFileSync('index.html')

app.get('/', function (req, res) {
//     res.writeHead(200, 'OK', {'Content-Type': 'text/plain'})
//     res.writeHead(200)
//     res.sendFile('/home/ubuntu/testexpress/index.html')
res.sendFile('index.html')
//   res.send()
    }
)

app.listen(port)
console.log('Listening on port', port)

