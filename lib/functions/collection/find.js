'use strict'

var forEach = require('./forEach')
var createCallback = require('../../private/createCallback')

module.exports = function(collection, callback, thisArg) {
    var result

    callback = createCallback(callback, thisArg)

    forEach(collection, function(value, index, collection) {
        if(callback(value, index, collection)) {
            result = value
            return false
        }
    })

    return result
}