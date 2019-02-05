const express = require('express')
const router = express.Router()
const Board = require('../models/boardModel').model

router.route('/')
  .get((_, res) => {
    Board.find({}, (err, boards) => {
      if (err) {
        res.json(err)
        console.error(err)
        return
      }
      res.json(boards)
    })
  })

router.route('/create')
  .post((req, res) => {
    let board = new Board(req.body)
    board.save(err => {
      if (err) {
        res.json(err)
        console.error(err)
        return
      }
      res.json(board)
    })
  })

router.route('/:boardId')
  .get((req, res) => {
    Board.findById(req.params.boardId, (err, board) => {
      if (err) {
        res.json(err)
        console.error(err)
        return
      }
      res.json(board)
    })
  })

module.exports = router
