const express = require('express')
const mongoose = require('mongoose')

const productRoutes = require('./routes/product.route')

const app = express()
// middleware configuration
app.use(express.json()) // handle json data from request
app.use(express.urlencoded({ extended: false })) // handle form data from request

// routes
app.use('/api/product', productRoutes)

app.get('/', (req, res) => {
    res.send('Hello from Node API')
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