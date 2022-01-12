const http = require('http');
const fs = require('fs');
const port = process.env.POmeRT || 3000;


const server = http.createServer((req, res) => {
    let url = (req.url);
    let method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `
            <html>
            <head>
            <title>Home</title>
            </head>
            <body>
            <h1>Welcome to my home page</h1>
            <form action="/message" method="POST">
            <input type="text" name="message" placeholder="message">
            <button type="submit">Submit</button>
            </form>
            </body>
            </html>
            `
        )
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    };
    res.setHeader('Content-Type', 'text/html');
    res.write(
        `
        <html>
        <head>
        <title>Home</title>
        </head>
        <body>
        <h1>Welcome to my home page</h1>
        </body>
        </html>
        `
    )
    res.end();
});


server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});