'use strict'

const config = require('../config')
const store = require('../store')

const getGames = () => {
  // console.log('getGames')
  let token = ''
  if (store.user) { token = store.user.token }
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {Authorization: `Token token=${token}`},
    method: 'GET'
  })
}

const showAll = () => {
  return $.ajax({
    url: config.apiUrl + '/all',
    method: 'GET'
  })
}

const getGame = data => {
  // console.log('getGame')
  return $.ajax({
    url: config.apiUrl + `/games/${data.game.id}`,
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'GET'
  })
}

const newGame = () => {
  // console.log('newGame')
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'POST'
  })
}

const updateGame = data => {
  // console.log('updateGame')
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'PATCH',
    data
  })
}

module.exports = {
  getGames,
  getGame,
  newGame,
  updateGame,
  showAll
}
