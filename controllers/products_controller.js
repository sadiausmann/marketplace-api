const express = require('express')
const router = express.Router()

const Product = require('../models/product')

router.get('/',(req, res) => {
    Product
        .findAll()
        .then(products => res.json(products))
})

router.post('/',(req,res) => {
    const { name, image_url, category, price, description, location } = req.body;

    Product
        .create(name, image_url, category, price, description, location)
        .then(product => res.json(product))
})

router.delete('/:2',(req,res) => {
    const productId = req.params.id
    
    Product
        .delete(productId)
        .then(() => res.json({message: 'deleted successfully'}))
})


module.exports = router