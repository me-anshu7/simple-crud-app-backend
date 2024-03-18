const express = require('express')
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller')

const router = express.Router()

// get all products
router.get('/', getProducts)
// get product by id
router.get('/:id', getProduct)
// create a new product
router.post('/', createProduct)
// update a product
router.put('/:id', updateProduct)
// delete a product
router.delete('/:id', deleteProduct)


module.exports = router