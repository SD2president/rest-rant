require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/place'))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

//this catches the 404 error
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)
