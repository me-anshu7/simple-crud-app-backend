const express = require('express')
const mongoose = require('mongoose')

const Product = require('./models/product.model')

const app = express()
app.use(express.json()) // handle json data from request
app.use(express.urlencoded({ extended: false })) // handle form data from request

app.get('/', (req, res) => {
    res.send('Hello from Node API')
})

// get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// get product by id
app.get('/api/product/:id', async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.send(500).json({ message: error.message })
    }
})

// create a new product
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// update a product
app.put('/api/product/:id', async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }

        const updatedProduct = await Product.findById(id)
        res.status(200).send(updatedProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// delete a product
app.delete('/api/product/:id', async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json('Product not found')
        }
        res.status(200).json('Product deleted successfully')

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

mongoose.connect('mongodb+srv://meanshu7:T6qCWoidX5Ut6HN6@backenddb.uk2u449.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected to database!')
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    })
    .catch(() => {
        console.log('Connection failed!')
    })