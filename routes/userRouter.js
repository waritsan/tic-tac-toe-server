const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

router.post('/create', (req, res) => {
  console.log(req.body)
  let user = new User(req.body)
  user.save(err => {
    if (err) return res.json(err)
    res.json(user)
  })
})

module.exports = router
