'use strict'
var arrayRef = []
var concat = require('../../private/concat')
var cachedContains = require('../../private/cachedContains')

/**
 * Creates an array of `array` elements not present in the other arrays
 * using strict equality for comparisons, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} array The array to process.
 * @param {Array} [array1, array2, ...] Arrays to check.
 * @returns {Array} Returns a new array of `array` elements not present in the
 *  other arrays.
 * @example
 *
 * _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
 * // => [1, 3, 4]
 */

module.exports = function(array) {
    var index = -1
    var length = array ? array.length : 0
    var flattened = concat.apply(arrayRef, arguments)
    var contains = cachedContains(flattened, length)
    var result = []

    while(++index < length) {
        var value = array[index]
        if(!contains(value)) {
            result.push(value)
        }
    }
    return result
}
