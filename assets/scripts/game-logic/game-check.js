const store = require('../store')

// Check to see if someone won the game
const gameWinner = function (newMove) {
    const gameBoard = store.game.cells
    gameBoard[newMove.game.cell.index] = newMove.game.cell.value
    const resultChecks = []

    // Create a new array with all possible winning combinations
    for (let col = 0; col < 3; col++) {
        let row = 3 * col
        resultChecks.push(gameBoard[row] + gameBoard[row + 1] + gameBoard[row + 2])
        resultChecks.push(gameBoard[col] + gameBoard[col + 3] + gameBoard[col + 6])
    }
    resultChecks.push(gameBoard[0] + gameBoard[4] + gameBoard[8])
    resultChecks.push(gameBoard[2] + gameBoard[4] + gameBoard[6])

    //  Check new array to see if there is a winner
    if (resultChecks.includes('XXX')) {
        $('#game-over-message').text('Alliance won this battle!')
        return true
    }
    if (resultChecks.includes('OOO')) {
        $('#game-over-message').text('Horde won this battle!')
        return true
    }
    return false
}

// Check to see if the game has been completed
// First checks to see if anyone has won, checks to see if any moves remain.
// If no moves left Cat's game
const completeGame = function (newMove) {
    if (gameWinner(newMove)) {
        return true
    }
    else {
        if (store.game.__v === 8) {
            $('#game-over-message').text('Fight another day!')
            $('#cats-game').show()
            return true
        }
        else {
            return false
        }
    }
}

module.exports = {
    completeGame,
    gameWinner,
}
