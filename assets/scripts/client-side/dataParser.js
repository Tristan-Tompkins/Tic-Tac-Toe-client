const store = require('../store')

const morphData = (element, override = false, overrideIndex, overrideValue, overrideOver) => {
  // console.log('morphData')
  let index = $(element).data('cell-index')
  let value = store.player
  let over = false
  if (override) { index = overrideIndex; value = overrideValue; over = overrideOver }
  if (store.game.over) { over = true }

  const data = {
    game: {
      cell: {
        index: index,
        value: value
      },
      over: over
    }
  }
  return data
}

const morphUndoData = () => {
  // console.log('morphUndoData')
  const index = store.game.moves.slice(-1)[0]
  const value = ''
  let over = false
  if (store.game.over) { over = true }
  return morphData('', true, index, value, over)
}

module.exports = {
  morphData,
  morphUndoData
}
