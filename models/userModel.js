const mongoose = require('mongoose')
const boardSchema = require('./boardModel').schema

var schema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, dropDups: true },
  firstName: { type: String },
  lastName: { type: String },
  jobTitle: { type: String },
  profileImageUrl: { type: String },
  board: boardSchema
})

module.exports = mongoose.model('User', schema)
