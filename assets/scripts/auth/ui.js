'use strict'

const userFeedback = require('../client-side/userFeedback')
const storePusher = require('../client-side/storePusher')
const view = require('../view/view')
const store = require('../store')

const failure = () => {
  // console.log('failure')
  userFeedback.resetForm()
  userFeedback.showFailureMessage()
}

const signInSuccess = responseData => {
  // console.log('signInSuccess')
  userFeedback.resetForm()
  storePusher.initSignIn(responseData)
  userFeedback.updateUserFeedback('Signed in as', responseData.user.email.toUpperCase())
  userFeedback.updateUserFeedback(`${store.user.token}`, '', '#current-token')
  view.showSettings()
  view.showFeedbackAndGameButtons()
  view.showMainGame()
  view.hideSignInPage()
}

const signUpSuccess = () => {
  // console.log('signUpSuccess')
  userFeedback.resetForm()
  userFeedback.updateUserFeedback('You have signed up')
}

const changePassword = () => {
  // console.log('changePassword')
  userFeedback.resetForm()
  userFeedback.updateUserFeedback('Your password has been changed')
}
const signOutSuccess = () => {
  // console.log('signOutSuccess')
  userFeedback.resetForm()
  userFeedback.resetUserInfo()
  userFeedback.resetBoard()
  storePusher.resetStore()
  view.hideSettings()
  view.showSignInPage()
  logicDemo.hideCode()
  view.hideFeedbackAndGameButtons()
  view.hideMainGame()
  userFeedback.updateUserFeedback('You have been signed out')
}

module.exports = {
  failure,
  signUpSuccess,
  signOutSuccess,
  signInSuccess,
  changePassword
}
