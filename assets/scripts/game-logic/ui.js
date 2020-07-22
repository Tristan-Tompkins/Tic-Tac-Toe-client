'use strict'

const store = require('../store')
const check = require('./game-check')
const gameEvents = require('./events')

// Start new game or restart a game functions
const startNewGameSuccess = function (response) {
    $('#message').text('Let the battle begin!').removeClass('error')
    $('.game-board-view, .restart').show()
    $('.new-game, #cats-game').hide()
    store.game = response.game
}
const startNewGameFailue = function () {
    $('#message').text('Could not start a new battle.').addClass('error')
}

const resetGameSuccess = function () {
    $('#message').text('Battle been reset!').removeClass('error')
    $('.game-board-view, .restart').hide()
    $('.new-game').show()
}

const resetGameFailure = function () {
    $('#message').text('Cant restart this battle!').addClass('error')
}

// Player makes a move functions
const makeMoveSuccess = function (response) {
    store.game = response.game
    // Checking to see who just made a move
    if (store.game.__v % 2 === 1){
        $('#message').text('For the Alliance!').removeClass('error')
    }
    else{
        $('#message').text('For the Horde!').removeClass('error')
    }
    // Checks to see if the game is over
    if (response.game.over) {
        $('#message').text('').removeClass('error')
        $('.game-over-modal').modal('show')
        $('.restart').hide()
        $('.new-game').show()
    }
}

const makeMoveFailure = function () {
    $('#message').text('Try another square!').addClass('error')
}

// Clears the board visually
const clearBoard = function () {
    $('.game-board .box').each(function () {
        $(this).text('')
    })
}

// Number of games played functions
const showGamesPlayedSuccess = function (response) {
    const gamesPlayed = response.games.length
    $('.games-played').text('Battles fought ' + gamesPlayed).removeClass('error')
}
const showGamesPlayedFailure = function () {
    $('.games-played').text('There was an error getting your previous battles.').addClass('error')
}

module.exports = {
    startNewGameFailue,
    startNewGameSuccess,
    resetGameFailure,
    resetGameSuccess,
    makeMoveFailure,
    makeMoveSuccess,
    showGamesPlayedSuccess,
    showGamesPlayedFailure,
    clearBoard,
}
