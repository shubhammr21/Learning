const http = require('http');
const routes = require('./routes');

const port = process.env.POmeRT || 3000;

const server = http.createServer(routes.handler)

server.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});