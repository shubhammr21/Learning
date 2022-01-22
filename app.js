const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const rootDir = require('./utils/path');

app.set('view engine', 'pug');
app.set('views', path.join(rootDir, 'views'));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(rootDir, 'public')));

app.use((req, res, next) => {
    // console.log('Request received');
    next(); // Allows the request to continue to the next middleware in line
})


app.use('', shopRoutes);
app.use('/admin', adminRoutes.router);


// 404 not found handle
app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found'
    });
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});