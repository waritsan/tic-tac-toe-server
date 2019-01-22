const mongoose = require('mongoose')

var schema = new mongoose.Schema({
  squares: { type: Array }
})

module.exports = mongoose.model('Board', schema)
