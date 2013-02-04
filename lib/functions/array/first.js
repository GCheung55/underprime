'use strict'

var createCallback = require('../../private/createCallback')
var slice = require('../../private/slice')
var nativeMax = require('../../private/nativeMax')
var nativeMin = require('../../private/nativeMin')

/**
 * Gets the first element of the `array`. If a number `n` is passed, the first
 * `n` elements of the `array` are returned. If a `callback` function is passed,
 * the first elements the `callback` returns truthy for are returned. The `callback`
 * is bound to `thisArg` and invoked with three arguments; (value, index, array).
 *
 * @static
 * @memberOf _
 * @alias head, take
 * @category Arrays
 * @param {Array} array The array to query.
 * @param {Function|Number} [callback|n] The function called per element or
 *  the number of elements to return.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Mixed} Returns the first element(s) of `array`.
 * @example
 *
 * _.first([1, 2, 3]);
 * // => 1
 *
 * _.first([1, 2, 3], 2);
 * // => [1, 2]
 *
 * _.first([1, 2, 3], function(num) {
 *   return num < 3;
 * });
 * // => [1, 2]
 */

function first(array, callback, thisArg) {
    if(array) {
        var n = 0
        var length = array.length

        if(typeof callback == 'function') {
            var index = -1
            callback = createCallback(callback, thisArg)
            while(++index < length && callback(array[index], index, array)) {
                n++
            }
        } else {
            n = callback
            if(n == null || thisArg) {
                return array[0]
            }
        }
        return slice(array, 0, nativeMin(nativeMax(0, n), length))
    }
}

module.exports = first
