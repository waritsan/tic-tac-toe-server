const express = require('express')
const boardRouter = express.Router()
const Board = require('../models/boardModel')

boardRouter.route('/')
  .get((req, res) => {
    Board.find({}, (err, boards) => {
      if (err) {
        res.json(err)
        console.error(err)
        return
      }
      res.json(boards)
    })
  })

boardRouter.route('/create')
  .post((req, res) => {
    console.log(req.body)
    let board = new Board({
      history: req.body.history
    })
    board.save(err => {
      if (err) {
        res.json(err)
        console.error(err)
        return
      }
      res.json(board)
    })
  })

boardRouter.route('/:boardId')
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

module.exports = boardRouter
