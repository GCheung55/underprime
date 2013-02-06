'use strict'

/**
 * Creates an array with all falsey values of `array` removed. The values
 * `false`, `null`, `0`, `""`, `undefined` and `NaN` are all falsey.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} array The array to compact.
 * @returns {Array} Returns a new filtered array.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */

module.exports = function(array) {
    var index = -1
    var length = array ? array.length : 0
    var result = []

    while(++index < length) {
        var value = array[index]
        if(value) {
            result.push(value)
        }
    }
    return result
}
