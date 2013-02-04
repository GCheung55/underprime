'use strict'
var createCallback = require('../../private/createCallback')
var filter = require('./filter')

module.exports = function(collection, callback, thisArg) {
    callback = createCallback(callback, thisArg)
    return filter(collection, function(value, index, collection) {
        return !callback(value, index, collection)
    })
}