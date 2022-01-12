const fs = require('fs');

const requestHandler = (req, res) => {
    let url = req.url;
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
            <a href="/users"> <h2>Click here to go to the users page</h2> </a>
            </body>
            </html>
            `
        )
        return res.end();
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `
            <html>
            <head>
            <title>Users</title>
            </head>
            <body>
            <h1>Welcome to users page</h1>
            <form action="/create-user" method="POST">
            <input type="text" name="username" placeholder="Username">
            <button type="submit">Submit</button>
            </form>
            <ul>
            <li>
            User 1
            </li>
            <li>
            User 2
            </li>
            <li>
            User 3
            </li>
            </ul>
            </body>
            </html>
            `
        )
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            console.log(message);
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
}

// module.exports = requestHandler;

module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
}

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';