const http = require("http")

const port = 8282;

const server = http.createServer((req, res) => {
    if (req.url == '/home'){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end("<h1>Home page</h1>")
    }

    res.writeHead(404, {"Content-Type": "text/html"})
    res.end("Not found")
})

server.listen(port, () => console.log(`Rodando na porta ${port}`))