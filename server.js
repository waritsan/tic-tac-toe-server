const express = require('express')
var cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const boardRouter = require('./routes/boardRouter')
const imageRouter = require('./routes/imageRouter')

const app = express()
const port = process.env.PORT || 8080
const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/tic-tac-toe'

mongoose.connect(mongodbUri, { useNewUrlParser: true, useCreateIndex: true })
app.set('json spaces', 2)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/boards', boardRouter)
app.use('/api/images', imageRouter)
app.listen(port, () => console.log(`Tic-Tac-Toe server is listening on port ${port}!`))
