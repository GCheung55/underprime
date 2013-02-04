'use strict'
var forEach = require('./forEach')
var createCallback = require('../../private/createCallback')

module.exports = function(collection, callback, thisArg) {
    var result = {}

    callback = createCallback(callback, thisArg)

    forEach(collection, function(value, key, collection) {
        key = callback(value, key, collection) + ''
        (result.hasOwnProperty(key) ? result[key]++ : result[key] = 1)
    })

    return result
}