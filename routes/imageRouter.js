const express = require('express')
const router = express.Router()
const upload = require('../services/multer')

const singleUpload = upload.single('image')

router.post('/create', (req, res) => {
  singleUpload(req, res, (err, some) => {
    if (err) return res.json(err)
    return res.json({ 'imageUrl': req.file.location })
  })
})

module.exports = router
