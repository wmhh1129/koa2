const http = require('http')
const querystring = require('querystring')
http.createServer((req, res) => {
    let str = ''
    let i = 0
    req.on('data', (data) => {
        console.log(`${i++}次收到数据`)
        str += data
    })

    req.on('end', () => {
        const reqBody = querystring.parse(str)
        console.log(reqBody)
    })
}).listen(8080)
