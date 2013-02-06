'use strict'

var createCallback = require('../../private/createCallback')
var slice = require('../../private/slice')
var nativeMax = require('../../private/nativeMax')

/**
 * Gets the last element of the `array`. If a number `n` is passed, the last
 * `n` elements of the `array` are returned. If a `callback` function is passed,
 * the last elements the `callback` returns truthy for are returned. The `callback`
 * is bound to `thisArg` and invoked with three arguments; (value, index, array).
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} array The array to query.
 * @param {Function|Number} [callback|n] The function called per element or
 *  the number of elements to return.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Mixed} Returns the last element(s) of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 *
 * _.last([1, 2, 3], 2);
 * // => [2, 3]
 *
 * _.last([1, 2, 3], function(num) {
 *   return num > 1;
 * });
 * // => [2, 3]
 */

module.exports = function(array, callback, thisArg) {
    if(array) {
        var n = 0
        var length = array.length

        if(typeof callback == 'function') {
            var index = length
            callback = createCallback(callback, thisArg)
            while(index-- && callback(array[index], index, array)) {
                n++
            }
        } else {
            n = callback
            if(n == null || thisArg) {
                return array[length - 1]
            }
        }
        return slice(array, nativeMax(0, length - n))
    }
}
