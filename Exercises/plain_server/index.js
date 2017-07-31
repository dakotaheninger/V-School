let http = require("http");
const PORT = 8080;

let server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.writeHead(200, {"Content-Type": "text/html"});
        if (req.url === "/") {
            res.write(`<h1>This is my Home Page</h1>`)
        } else if (req.url === "/news") {
            res.write(`<h1>This would be my News Page</h1>`)
        } else if (req.url === "/stats") {
            res.write(`<h1>This would be my stats page</h1>`);
        }
        res.end();
    }

});


server.listen(PORT);