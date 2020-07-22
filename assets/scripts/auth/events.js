'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// Sign in and Sign up functions
const onSignUp = function (event) {
    event.preventDefault()
    const formData = getFormFields(event.target)
    api.signUp(formData)
        .then(ui.signUpSuccess)
        .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
    event.preventDefault()
    const formData = getFormFields(event.target)
    api.signIn(formData)
        .then(ui.signInSuccess)
        .catch(ui.signInFailure)
}
const onLogout = function (event) {
    event.preventDefault()
    api.logout()
        .then(ui.logoutSuccess)
        .catch(ui.logoutFailure)
}

const onSignUpSwitch = function (event) {
    event.preventDefault()
    ui.signUpSwitch()
}
const onSignInSwitch = function (event) {
    event.preventDefault()
    ui.signInSwitch()
}

// Change password functions
const onChangePassword = function (event) {
    event.preventDefault()
    const formData = getFormFields(event.target)
    console.log('change password ', formData)
    api.changePassword(formData)
        .then(ui.changePasswordSuccess)
        .catch(ui.changePasswordFailure)
}
// Switches views to change password
const onChangePasswordSwitch = function (event) {
    event.preventDefault()
    ui.changePasswordSwitch()
}
// Cancel function incase user didn't want to change password
const onChangePasswordCancel = function (event) {
    event.preventDefault()
    ui.changePasswordCancel()
}

module.exports = {
    onSignUp,
    onSignIn,
    onSignUpSwitch,
    onSignInSwitch,
    onLogout,
    onChangePassword,
    onChangePasswordSwitch,
    onChangePasswordCancel,
}
