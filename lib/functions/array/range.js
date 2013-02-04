'use strict'

var nativeMax = require('../../private/nativeMax')

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to but not including `end`.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Number} [start=0] The start of the range.
 * @param {Number} end The end of the range.
 * @param {Number} [step=1] The value to increment or descrement by.
 * @returns {Array} Returns a new range array.
 * @example
 *
 * _.range(10);
 * // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 *
 * _.range(1, 11);
 * // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 *
 * _.range(0, 30, 5);
 * // => [0, 5, 10, 15, 20, 25]
 *
 * _.range(0, -10, -1);
 * // => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
 *
 * _.range(0);
 * // => []
 */

function range(start, end, step) {
    start = +start || 0
    step = +step || 1

    if(end == null) {
        end = start
        start = 0
    }
    // use `Array(length)` so V8 will avoid the slower "dictionary" mode
    // http://youtu.be/XAqIpGU8ZZk#t=17m25s
    var index = -1
    var length = nativeMax(0, Math.ceil((end - start) / step))
    var result = Array(length)

    while(++index < length) {
        result[index] = start
        start += step
    }
    return result
}

module.exports = range
