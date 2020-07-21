
'use strict'

const store = require('../store')

const checkForWinner = (board = store.game.cells) => {
// console.log('checkForWinner')

const winners = []
const boardSize = Math.sqrt(board.length) | 0

const checkLine = function (initialValue, difference, jump = 0, cycle = 1) {
  const check = []
  cycle = cycle - 1

  for (let i = 0; i < boardSize; i++) {
    check.push(board[initialValue + difference * i])
  }
  // push values of board at indexes * difference onto check array
  // console.log(`checking values: ${check}`) // <----- uncomment to check which values are checked
  if (check.every(value => value === check[0])) {
    winners.push(check[0])
  }
  // if every value in line is the same, push that value onto winners array
  if (initialValue === difference) {
    return checkLine(initialValue - difference, difference + 2)
  }
  // if initialValue and difference are the same (its a diagonal), check the other diagonal
  if (!cycle) {
    return
  }
  // exit recursion when cycle = 0
  return checkLine(initialValue + jump, difference, jump, cycle)
  // recursively get the other lines in same axis (x axis, y axis)
}

const checkLines = board => {
  const lines = {
    boardStart: 0,
    boardIncrement: 1,
    boardSize: boardSize,
    diagonal: boardSize - 1
  }
  // object that contains relevant board information
  checkLine(lines.boardStart, lines.boardIncrement, lines.boardSize, lines.boardSize)
  // checks all horizontal lines
  checkLine(lines.boardStart, lines.boardSize, lines.boardIncrement, lines.boardSize)
  // checks all vertical lines
  checkLine(lines.diagonal, lines.diagonal)
  // checks both diagonal lines
}

checkLines(board)
// invoke the algorithm on the board
const winner = winners.filter(winner => winner)[0]
// filter out empty strings

if (winner) {
  store.game.winner = winner
  store.game.over = true
  store.game.progress = 'Game Ended'
}

if (store.game.turn === store.game.cells.length) {
  store.game.over = true
}
}

module.exports = checkForWinner
