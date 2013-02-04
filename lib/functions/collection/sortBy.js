'use strict'

var createCallback = require('../../private/createCallback')
var each = require('./each')
var compareAscending = require('../../private/compareAscending')

module.exports = function sortBy(collection, callback, thisArg) {
    var index = -1
    var length = collection ? collection.length : 0
    var result = Array(typeof length == 'number' ? length : 0)

    callback = createCallback(callback, thisArg)
    each(collection, function(value, key, collection) {
        result[++index] = {
            'criteria': callback(value, key, collection),
            'index': index,
            'value': value
        }
    })

    length = result.length
    result.sort(compareAscending)
    while(length--) {
        result[length] = result[length].value
    }
    return result
}