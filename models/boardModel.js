const mongoose = require('mongoose')

var schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, dropDups: true },
  history: [{
    squares: { type: Array },
    position: {
      row: { type: Number },
      col: { type: Number }
    }
  }]
})

module.exports = mongoose.model('Board', schema)
