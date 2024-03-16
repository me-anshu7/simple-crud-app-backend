const express = require('express')
const mongoose = require('mongoose')
const app = express()


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