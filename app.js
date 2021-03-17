const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world');
        console.log("Home access");
        res.end();
    }

    if (req.url === '/api') {
        res.write('Hello world API');
        console.log("API Access");
        res.end();
    }
});

server.listen(3000);

console.log("Server running on port 3000 ...");