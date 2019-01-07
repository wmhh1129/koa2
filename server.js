const http = require('http')

const server = http.createServer(function (req, res) {
    console.log('client call')
    // 根据客户端请求的url不同，服务器返回不一样的信息
    switch (req.url) {
        case '/1.html':
            res.write('1111')
            break
        case '/2.html':
            res.write('2222')
            break
        default:
            res.write('404')
            break
    }
    res.end()
})

// 监听8080端口
server.listen(8080)
