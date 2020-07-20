'use strict'

const hideSignInPage = () => { $('.sign-in-page').hide() }
const showSignInPage = () => { $('.sign-in-page').show() }
const hideSettings = () => { $('.settings').hide() }
const showSettings = () => { $('.settings').show() }
const hideGamePage = () => { $('#game-page').hide() }
const showGamePage = () => { $('#game-page').show() }
const hideMainBoard = () => { $('#board-container-0').hide() }
const showMainBoard = () => { $('#board-container-0').show() }
const scaleFontSizeH3 = () => { $('h3').css('font-size', '2vw') }
const showMainGame = () => { $('#main-game').show() }
const hideMainGame = () => { $('#main-game').hide() }
const showFeedbackAndGameButtons = () => { $('#feedback-and-game-buttons').show() }
const hideFeedbackAndGameButtons = () => { $('#feedback-and-game-buttons').hide() }

const squareBox = () => {
  $('.row').height($('.row').width())
  $('.box').width($('.row').height() / 3)
  $('.box').height($('.box').width())

  $('.secret-row').height($('.secret-row').width())
  $('.secret-box').width($('.secret-row').width())
  $('.secret-box').height($('.secret-box').width())
}

const onPageLoad = () => {
  squareBox()
  hideSettings()
  hideGamePage()
  hideMainBoard()
  setTimeout(() => $(window).resize(squareBox), 1)
  setTimeout(() => $(window).resize(scaleFontSizeH3), 1)
}

module.exports = {
  squareBox,
  onPageLoad,
  showSignInPage,
  showSettings,
  showGamePage,
  showMainBoard,
  hideSignInPage,
  hideGamePage,
  hideMainBoard,
  hideSettings,
  showMainGame,
  hideMainGame,
  showFeedbackAndGameButtons,
  hideFeedbackAndGameButtons
}
