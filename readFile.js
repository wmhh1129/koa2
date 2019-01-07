const http = require('http')
const fs = require('fs')

// 尝试写入文件
fs.writeFile('./www/a.txt', '来了弟弟', (err) => {
    if (err) {
        console.log('写入文件出错')
    }
})

// 尝试在
const server = http.createServer((req, res) => {
    const readUrl = `./www${req.url}`
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
