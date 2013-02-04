'use strict'

var forEach = require('./forEach')
var nativeRandom = require('../../private/nativeRandom')

/**
 * Creates an array of shuffled `array` values, using a version of the
 * Fisher-Yates shuffle. See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle.
 *
 * @static
 * @memberOf _
 * @category Collections
 * @param {Array|Object|String} collection The collection to shuffle.
 * @returns {Array} Returns a new shuffled collection.
 * @example
 *
 * _.shuffle([1, 2, 3, 4, 5, 6]);
 * // => [4, 1, 6, 3, 5, 2]
 */

function shuffle(collection) {
    var index = -1
    var length = collection ? collection.length : 0
    var result = Array(typeof length == 'number' ? length : 0)

    forEach(collection, function(value) {
        var rand = floor(nativeRandom() * (++index + 1))
        result[index] = result[rand]
        result[rand] = value
    })
    return result
}

module.exports = shuffle