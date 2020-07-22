'use strict'

const config = require('../config')
const store = require('../store')

// Creates a new user
const signUp = function (formData) {
    return $.ajax({
        url: config.apiUrl + '/sign-up',
        method: 'POST',
        data: formData
    })
}

// Logs an user in
const signIn = function (formData) {
    return $.ajax({
        url: config.apiUrl + '/sign-in',
        method: 'POST',
        data: formData
    })
}

// Logs an user out
const logout = function () {
    return $.ajax({
        headers: {
            Authorization: 'Bearer ' + store.user.token,
        },
        url: config.apiUrl + '/sign-out',
        method: 'DELETE',
    })
}

// Changes an users password
const changePassword = function (formData) {
    return $.ajax({
        headers: {
            Authorization: 'Bearer ' + store.user.token,
        },
        url: config.apiUrl + '/change-password',
        method: 'PATCH',
        data: formData,
    })
}

module.exports = {
    signUp,
    signIn,
    logout,
    changePassword,
}
