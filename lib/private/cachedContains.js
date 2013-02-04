'use strict'

var largeArraySize = 30
var hasOwnProperty = require('./hasOwnProperty')
var indexOf = require('../functions/array/indexOf')

/**
 * Creates a function optimized to search large arrays for a given `value`,
 * starting at `fromIndex`, using strict equality for comparisons, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {Mixed} value The value to search for.
 * @param {Number} [fromIndex=0] The index to search from.
 * @param {Number} [largeSize=30] The length at which an array is considered large.
 * @returns {Boolean} Returns `true`, if `value` is found, else `false`.
 */

function cachedContains(array, fromIndex, largeSize) {
    fromIndex || (fromIndex = 0);

    var length = array.length
    var isLarge = (length - fromIndex) >= (largeSize || largeArraySize)

    if(isLarge) {
        var cache = {}
        var index = fromIndex - 1

        while(++index < length) {
            // manually coerce `value` to a string because `hasOwnProperty`, in some
            // older versions of Firefox, coerces objects incorrectly
            var key = array[index] + ''
            (hasOwnProperty.call(cache, key) ? cache[key] : (cache[key] = [])).push(array[index])
        }
    }
    return function(value) {
        if(isLarge) {
            var key = value + ''
            return hasOwnProperty.call(cache, key) && indexOf(cache[key], value) > -1
        }
        return indexOf(array, value, fromIndex) > -1
    }
}

module.exports = cachedContains
