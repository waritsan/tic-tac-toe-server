const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

router.get('/', (_, res) => {
  User.find({}, (err, users) => {
    if (err) return res.json(err)
    res.json(users)
  })
})

router.post('/create', (req, res) => {
  let user = new User(req.body)
  user.save(err => {
    if (err) return res.json(err)
    res.json(user)
  })
})

router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return res.json(err)
    res.json(user)
  })
})

router.put('/:id/update', (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, user) => {
    if (err) return res.json(err)
    res.json(user)
  })
})

module.exports = router
