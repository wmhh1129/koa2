const http = require('http')
const fs = require('fs')

// 尝试写入文件
fs.writeFile('./file/a.txt', '来了老弟', (err) => {
    if (err) {
        console.log('写入文件出错')
    }
})

// 尝试访问 http://localhost:8080/1.html 或 index.html，服务器返回不同的data
const server = http.createServer((req, res) => {
    const readUrl = `./file${req.url}`
    fs.readFile(readUrl, (err, data) => {
        if (err) {
            res.write('file not found')
        } else {
            res.write(data)
        }
        // 注意这个end写在这里是为了避免在异步结束前就执行end了，应该先等服务器返回再end
        res.end()
    })
})

server.listen(8080)
