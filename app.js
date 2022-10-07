const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Selamn alykm</title></head>');
        res.write('<body><h1>Hos geldn gardasim</h1></body>');
        res.write('</html>');
    } else {
        res.write('<html>');
        res.write('<head><title>Alykm slm</title></head>');
        res.write('<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">gonder</button></form></body>');
        res.write('</html>');
    }
    res.end();
});

server.listen(3000);
