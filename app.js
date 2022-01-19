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


app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});