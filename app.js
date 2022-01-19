const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log('Request received');
    next(); // Allows the request to continue to the next middleware in line
})

app.use((req, res, next) => {
    console.log('Another middleware');
    res.send('<h1>Hello World</h1>');
})


app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});