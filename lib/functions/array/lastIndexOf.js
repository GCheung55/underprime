'use strict'

var nativeMin = require('../../private/nativeMin')
var nativeMax = require('../../private/nativeMax')

/**
 * Gets the index at which the last occurrence of `value` is found using strict
 * equality for comparisons, i.e. `===`. If `fromIndex` is negative, it is used
 * as the offset from the end of the collection.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} array The array to search.
 * @param {Mixed} value The value to search for.
 * @param {Number} [fromIndex=array.length-1] The index to search from.
 * @returns {Number} Returns the index of the matched value or `-1`.
 * @example
 *
 * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
 * // => 4
 *
 * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);
 * // => 1
 */

module.exports = function(array, value, fromIndex) {
    var index = array ? array.length : 0
    if(typeof fromIndex == 'number') {
        index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1
    }
    while(index--) {
        if(array[index] === value) {
            return index
        }
    }
    return -1
}
