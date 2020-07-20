'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const userFeedback = require('../client-side/userFeedback')
const dataParser = require('../client-side/dataParser')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onGetGames = () => {
  // console.log('onGetGames')
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.failure)
}

const onGetHistory = () => {
  // console.log('onGetGames')
  event.preventDefault()
  api.getGames()
    .then(ui.getHistorySuccess)
    .catch(ui.failure)
}

const onGetLastGame = () => {
  // console.log('onGetLastGame')
  event.preventDefault()
  api.getGames()
    .then(ui.getLastGameSuccess)
    .catch(ui.failure)
}

const onNewGame = event => {
  // console.log('onNewGame')
  if (event) { event.preventDefault() }
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.failure)
}

const onUpdateGame = event => {
  // console.log('onUpdateGame')
  event.preventDefault()
  const data = dataParser.morphData(event.target)
  if (store.game.over) { return }
  if ($(event.target).text()) { return userFeedback.onInvalidMove() }
  api.updateGame(data)
    .then(ui.updateGameSuccess(event.target))
    .catch(ui.failure)
}

const onUndoMove = event => {
  // console.log('onUndoMove')
  event.preventDefault()
  const data = dataParser.morphUndoData()
  if (!store.game.moves.length || store.game.winner) { return userFeedback.onInvalidUndoMove() }
  api.updateGame(data)
    .then(ui.undoMoveSuccess)
    .catch(ui.failure)
}

const onDisplayGame = event => {
  // console.log('onDisplayGame')
  event.preventDefault()
  ui.displayGame(event.target)
}

const addHandlers = () => {
  $('#new-game-button').on('click', onNewGame)
  $('#get-games-button').on('click', onGetGames)
  $('#get-last-game-button').on('click', onGetLastGame)
  $('#undo-button').on('click', onUndoMove)
  $('.box').on('click', onUpdateGame)
  $('#get-history-button').on('click', onGetHistory)

  // testing
  $('.display').on('click', onDisplayGame)
  $('.game-selector').on('click', () => {})
}

module.exports = {
  addHandlers,
  onNewGame
}
