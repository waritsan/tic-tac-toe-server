const mongoose = require('mongoose')

var schema = new mongoose.Schema({
  history: [{
    squares: { type: Array },
    position: {
      row: 0,
      col: 0
    }
  }]
})

module.exports = mongoose.model('Board', schema)
