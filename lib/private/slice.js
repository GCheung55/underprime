'use strict'

/**
 * Slices the `collection` from the `start` index up to, but not including,
 * the `end` index.
 *
 * Note: This function is used, instead of `Array#slice`, to support node lists
 * in IE < 9 and to ensure dense arrays are returned.
 *
 * @private
 * @param {Array|Object|String} collection The collection to slice.
 * @param {Number} start The start index.
 * @param {Number} end The end index.
 * @returns {Array} Returns the new array.
 */

module.exports = function(array, start, end) {
    start || (start = 0)
    if(typeof end == 'undefined') {
        end = array ? array.length : 0
    }
    var index = -1
    var length = end - start || 0
    var result = Array(length < 0 ? 0 : length)

    while(++index < length) {
        result[index] = array[start + index]
    }
    return result
}
