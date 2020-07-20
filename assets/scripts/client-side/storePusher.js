const store = require('../store')
const config = require('../config')

const switchPlayer = () => {
  // console.log('switchPlayer')
  store.player === 'X' ? store.player = 'O' : store.player = 'X'
}

const resetGameWatcher = () => {
  // console.log('resetGameWatcher')
  store.gameWatcher = null
}

const resetStore = () => {
  // console.log('resetStore')
  store.game = null
  store.user = null
  store.player = null
  store.gameWatcher = null
  store.games = null
  store.previousGame = 1
}

const initStore = data => {
  // console.log('initStore')
  store.game = data.game
  store.game.elements = []
  store.game.over = ''
  store.game.winner = ''
  store.game.url = `${config.apiUrl}/games/${data.game.id}`
  store.game.moves = []
  store.player = 'X'
  store.previousGame = 1
}

const initSignIn = data => {
  // console.log('initSignIn')
  store.user = data.user
}

const updateStoreGame = data => {
  // console.log('updateStore')
  store.game = data
  store.game.moves = []
  store.game.elements = []
}

const updateStoreUrl = () => {
  store.game.url = `${config.apiUrl}/games/${store.game.id}`
}

const addGames = games => {
  store.games = games
}

const addMove = element => {
  // console.log('addMove')
  const index = $(element).data('cell-index')
  store.game.moves.push(index)
}

const removeMove = () => {
  // console.log('removeMove')
  store.game.elements.pop()
  store.game.moves.pop()
  store.game.turn--
}

const initLogicText = () => {
  // console.log('initLogicText')
  store.logic = $('#logic-link>h2').text()
}

const switchLogicText = () => {
  // console.log('switchLogicText')
  store.logic = $('#logic-link>h2').text()
}

const updateOneCell = element => {
  // console.log('updateOneCell')
  store.game.cells[$(element).data('cell-index')] = $(element).text()
}

const removeOneCellContents = () => {
  // console.log('updateOneCell')
  store.game.cells[store.game.moves.slice(-1)[0]] = ''
}

const addElement = element => {
  // console.log('addElement')
  store.game.elements.push(element)
}

module.exports = {
  switchPlayer,
  updateOneCell,
  removeOneCellContents,
  switchLogicText,
  resetStore,
  initStore,
  initSignIn,
  initLogicText,
  updateStoreGame,
  updateStoreUrl,
  addGames,
  addMove,
  removeMove,
  resetGameWatcher,
  addElement
}
