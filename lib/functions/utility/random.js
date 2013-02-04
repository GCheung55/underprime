'use strict'

var floor = Math.floor
var nativeRandom = require('../../private/nativeRandom')

/**
 * Produces a random number between `min` and `max` (inclusive). If only one
 * argument is passed, a number between `0` and the given number will be returned.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {Number} [min=0] The minimum possible value.
 * @param {Number} [max=1] The maximum possible value.
 * @returns {Number} Returns a random number.
 * @example
 *
 * _.random(0, 5);
 * // => a number between 0 and 5
 *
 * _.random(5);
 * // => also a number between 0 and 5
 */

function random(min, max) {
    if(min == null && max == null) {
        max = 1
    }
    min = +min || 0
    if(max == null) {
        max = min
        min = 0
    }
    return min + floor(nativeRandom() * ((+max || 0) - min + 1))
}

module.exports = random
