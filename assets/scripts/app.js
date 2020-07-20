'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./game/events')
const authEvents = require('./auth/events')
const view = require('./view/view')
const api = require('./game/api')

$(() => {
  // console.log('Running JavaScript...')
  api.showAll()
  authEvents.addHandlers()
  gameEvents.addHandlers()
  view.onPageLoad()
})
