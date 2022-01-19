const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({
    extended: false
}));


app.use((req, res, next) => {
    // console.log('Request received');
    next(); // Allows the request to continue to the next middleware in line
})


app.use(shopRoutes);
app.use(adminRoutes);


// 404 not found handle
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
})


app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});