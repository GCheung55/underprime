'use strict'

var createCallback = require('../../private/createCallback')
var nativeMax = require('../../private/nativeMax')
var nativeMin = require('../../private/nativeMin')
var slice = require('../../private/slice')

/**
 * Gets all but the last element of `array`. If a number `n` is passed, the
 * last `n` elements are excluded from the result. If a `callback` function
 * is passed, the last elements the `callback` returns truthy for are excluded
 * from the result. The `callback` is bound to `thisArg` and invoked with three
 * arguments; (value, index, array).
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} array The array to query.
 * @param {Function|Number} [callback|n=1] The function called per element or
 *  the number of elements to exclude.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Array} Returns a slice of `array`.
 * @example
 *
 * _.initial([1, 2, 3]);
 * // => [1, 2]
 *
 * _.initial([1, 2, 3], 2);
 * // => [1]
 *
 * _.initial([1, 2, 3], function(num) {
 *   return num > 1;
 * });
 * // => [1]
 */

module.exports = function(array, callback, thisArg) {
    if(!array) {
        return []
    }
    var n = 0
    var length = array.length

    if(typeof callback == 'function') {
        var index = length
        callback = createCallback(callback, thisArg)
        while(index-- && callback(array[index], index, array)) {
            n++
        }
    } else {
        n = (callback == null || thisArg) ? 1 : callback || n
    }
    return slice(array, 0, nativeMin(nativeMax(0, length - n), length))
}
