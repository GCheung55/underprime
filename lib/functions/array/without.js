'use strict'

var cachedContains = require('../../private/cachedContains')

/**
 * Creates an array with all occurrences of the passed values removed using
 * strict equality for comparisons, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} array The array to filter.
 * @param {Mixed} [value1, value2, ...] Values to remove.
 * @returns {Array} Returns a new filtered array.
 * @example
 *
 * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
 * // => [2, 3, 4]
 */

function without(array) {
    var index = -1
    var length = array ? array.length : 0
    var contains = cachedContains(arguments, 1)
    var result = []

    while(++index < length) {
        var value = array[index]
        if(!contains(value)) {
            result.push(value)
        }
    }
    return result;
}

module.exports = without
