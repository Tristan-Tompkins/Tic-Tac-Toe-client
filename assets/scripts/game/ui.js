'use strict'

const storePusher = require('../client-side/storePusher')
const userFeedback = require('../client-side/userFeedback')
const dataStoreCalculator = require('../client-side/dataStoreCalculator')
const view = require('../view/view')
const store = require('../store')

const failure = () => {
  // console.log('failure')
  userFeedback.showFailureMessage()
}

const newGameSuccess = responseData => {
  // console.log('newGameSuccess')
  storePusher.initStore(responseData)
  userFeedback.resetUserInfo()
  userFeedback.resetBoard()
  userFeedback.updateStaticInfo()
  view.showMainBoard()
  view.showGamePage()
}

const getGamesSuccess = (responseData, games) => {
  // console.log('getGamesSuccess')
  store.gamesHistory = responseData.games
  if (store.secretWord) { games = responseData.games } else { games = responseData.games.slice(-9) }
  userFeedback.clearGames()
  storePusher.addGames(games)
  userFeedback.addHistory()
  userFeedback.resetSecretForm()
  boardGenerator.generateMiniBoard()
  view.squareBox()
  store.secretWord = false
}

const getHistorySuccess = responseData => {
  // console.log('getHistorySuccess')
  store.gamesHistory = responseData.games
  userFeedback.addHistory()
}

const getLastGameSuccess = responseData => {
  // console.log('getLastGameSuccess')
  const game = responseData.games[responseData.games.length - store.previousGame]
  store.previousGame++
  storePusher.updateStoreGame(game)
  dataStoreCalculator.calcAll()
  userFeedback.replaceBoard()
  userFeedback.clearGames()
  userFeedback.updateInfo()
}

const updateGameSuccess = element => {
  // console.log('updateGameSuccess')
  userFeedback.addOneValue(element)
  storePusher.switchPlayer()
  storePusher.updateOneCell(element)
  storePusher.addMove(element)
  storePusher.addElement(element)
  dataStoreCalculator.calcAll()
  userFeedback.updateInfo()
}

const undoMoveSuccess = element => {
  // console.log('undoMoveSuccess')
  userFeedback.removeOneValue(element)
  storePusher.removeOneCellContents()
  storePusher.removeMove()
  dataStoreCalculator.calcAll()
  userFeedback.updateInfo()
}

module.exports = {
  failure,
  getGamesSuccess,
  getLastGameSuccess,
  updateGameSuccess,
  newGameSuccess,
  undoMoveSuccess,
  getHistorySuccess
}
