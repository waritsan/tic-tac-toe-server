const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const boardRouter = require('./routes/boardRouter')

const app = express()
const port = process.env.PORT || 3000
const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/tic-tac-toe'

mongoose.connect(mongodbUri, { useNewUrlParser: true })
app.set('json spaces', 2)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api/boards', boardRouter)
app.listen(port, () => console.log(`Tic-Tac-Toe app is listening on port ${port}!`))
