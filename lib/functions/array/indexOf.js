'use strict'

var nativeMax = require('../../private/nativeMax')
var sortedIndex = require('./sortedIndex')

/**
 * Gets the index at which the first occurrence of `value` is found using
 * strict equality for comparisons, i.e. `===`. If the `array` is already
 * sorted, passing `true` for `fromIndex` will run a faster binary search.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} array The array to search.
 * @param {Mixed} value The value to search for.
 * @param {Boolean|Number} [fromIndex=0] The index to search from or `true` to
 *  perform a binary search on a sorted `array`.
 * @returns {Number} Returns the index of the matched value or `-1`.
 * @example
 *
 * _.indexOf([1, 2, 3, 1, 2, 3], 2);
 * // => 1
 *
 * _.indexOf([1, 2, 3, 1, 2, 3], 2, 3);
 * // => 4
 *
 * _.indexOf([1, 1, 2, 2, 3, 3], 2, true);
 * // => 2
 */

function indexOf(array, value, fromIndex) {
    var index = -1
    var length = array ? array.length : 0

    if(typeof fromIndex == 'number') {
        index = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0) - 1
    } else if(fromIndex) {
        index = sortedIndex(array, value)
        return array[index] === value ? index : -1
    }
    while(++index < length) {
        if(array[index] === value) {
            return index
        }
    }
    return -1;
}

module.exports = indexOf
