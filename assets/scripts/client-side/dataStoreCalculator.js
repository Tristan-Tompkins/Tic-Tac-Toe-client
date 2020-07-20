'use strict'

const store = require('../store')
const checkForWinner = require('../logic/winCondition')

const calcAll = () => {
  // console.log('calcAll')
  calcTurn()
  calcPlayer()
  calcOver()
  checkForWinner()
}

const calcTurn = () => {
  // console.log('calcTurn')
  const board = store.game.cells
  let turn = 0
  board.forEach(square => { if (square) { turn++ } })
  store.game.turn = turn
}

const calcPlayer = () => {
  // console.log('calcPlayer')
  store.game.turn % 2 ? store.player = 'O' : store.player = 'X'
}

const calcOver = () => {
  // console.log('calcOver')
  if (store.game.turn === store.game.cells.length || store.game.winner) {
    store.game.progress = 'Game Ended'
    store.game.winner = 'Tie'
  } else {
    store.game.progress = 'Game In Progress'
  }
}

module.exports = {
  calcTurn,
  calcPlayer,
  calcOver,
  calcAll
}
