const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../utils/path');

const products = []

router.get("/add-product", (req, res, next) => {
    // console.log('Add product page middleware');
    res.render('add-product', {
        pageTitle: 'Add Product'
    });
})

router.post("/add-product", (req, res, next) => {
    products.push({
        title: req.body.title
    });
    res.redirect('/');
})

module.exports = {
    router,
    products
};
// module.exports = router;