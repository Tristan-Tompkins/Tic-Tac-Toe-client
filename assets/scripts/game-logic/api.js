'use strict'

const config = require('../config')
const store = require('../store')

// Starts a new game
const startNewGame = function () {
    return $.ajax({
        headers: {
            Authorization: 'Bearer ' + store.user.token,
        },
        url: config.apiUrl + '/games',
        method: 'POST',
    })
}

// Restarts the previous game, deletes the current one user is playing
const resetGame = function () {
    return $.ajax({
        headers: {
            Authorization: 'Bearer ' + store.user.token,
        },
        url: config.apiUrl + '/games/' + store.game._id,
        method: 'DELETE',
    })
}

// Adds a move to the game
const makeMove = function (move) {
    return $.ajax({
        headers: {
            Authorization: 'Bearer ' + store.user.token,
        },
        url: config.apiUrl + '/games/' + store.game._id,
        method: 'PATCH',
        data: move,
    })
}

// Find the number of games played by user
const getGames = function () {
    return $.ajax({
        headers: {
            Authorization: 'Bearer ' + store.user.token,
        },
        url: config.apiUrl + '/games',
        method: 'GET',
    })
}

module.exports = {
    startNewGame,
    resetGame,
    makeMove,
    getGames,
}
