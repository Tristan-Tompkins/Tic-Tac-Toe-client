'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const check = require('./game-check')

// Starts a new game by calling API and creating visual board with useable data
const onStartNewGame = function () {
    event.preventDefault()
    ui.clearBoard()
    let i = 0
    // Adds index to each cell for reference of where user is clicking
    $('.game-board .box').each(function () {
        $(this).data('index', i).removeClass('letter')
        i++
    })
    api.startNewGame()
        .then(ui.startNewGameSuccess)
        .catch(ui.startNewGameFailue)
    onGetGames()
}

// Resets game and clears the board
const onResetGame = function () {
    api.resetGame()
        .then(ui.resetGameSuccess)
        .catch(ui.resetGameFailure)
    ui.clearBoard()
}

// Records the players move both to the API and to the visual board
const onCellClick = function () {
    // Find out whose turn it is
    let clicked = store.game.__v % 2
    // Create an object of our player pick's result
    const playerMove = {
        game: {
            cell: {
                index: 0,
                value: '',
            },
            over: false,
        }
    }

    // If game is over and player tries to click on cell, send message and don't allow
    // player to make a new move by 'ending' their turn
    if (store.game.over) {
        $('#message').text('The battle has ended! Comence a new one!').addClass('error')
        return
    }

    // Check to see if a square is already taken up
    if ($(this).text().length === 0) {
        // If not mark square according to player's turn
        // Add results to our playerMove object
        if (clicked === 0) {
            $(this).text('X').css('color', 'blue').addClass('letter')
            playerMove.game.cell.value = 'X'
            playerMove.game.cell.index = $(this).data().index
        }
        else if (clicked === 1) {
            $(this).text('O').css('color', 'red').addClass('letter')
            playerMove.game.cell.value = 'O'
            playerMove.game.cell.index = $(this).data().index
        }
        // Check to see if the game is over
        // Send move to our API
        playerMove.game.over = check.completeGame(playerMove)
        api.makeMove(playerMove)
            .then(ui.makeMoveSuccess)
            .catch(ui.makeMoveFailure)
    }
    else {
        $('#message').text('Square taken.  Please pick another').addClass('error')
    }
}

// Gets the number of games player has played
const onGetGames = function () {
    api.getGames()
        .then(ui.showGamesPlayedSuccess)
        .catch(ui.showGamesPlayedFailure)
}

module.exports = {
    onStartNewGame,
    onCellClick,
    onResetGame,
    onGetGames,
}
