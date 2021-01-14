const express = require('express');
const { Mongoose } = require('mongoose');

const port = 4000




const app = express()

Mongoose.connect()

app.get('/', (req, res)=> {
    res.send('Welcome to currency converter')
})


app.listen (port, () => {
    console.log('Server Started at Port 4000 ')
})