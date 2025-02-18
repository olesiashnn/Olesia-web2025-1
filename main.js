const http = require("http");

const PORT = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello, olesiashnn</h1>");
});

server.listen(PORT, () => {
    console.log(`Сервер запущено на http://127.0.0.1:${PORT}`);
});