const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    // console.log('Request received');
    next(); // Allows the request to continue to the next middleware in line
})

app.use("/add-product", (req, res, next) => {
    // console.log('Add product page middleware');
    res.send(`
        <form action="/product" method="POST">
            <input type="text" name="title" />
            <button type="submit">Add Product</button>
        </form>
    `);
})

app.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.get("/", (req, res, next) => {
    // console.log('Home page middleware');
    res.send('<h1>Hello World</h1>');
})


app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});