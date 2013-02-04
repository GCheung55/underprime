'use strict'

var createCallback = require('../../private/createCallback')
var nativeMax = require('../../private/nativeMax')
var slice = require('../../private/slice')

/**
 * The opposite of `_.initial`, this method gets all but the first value of `array`.
 * If a number `n` is passed, the first `n` values are excluded from the result.
 * If a `callback` function is passed, the first elements the `callback` returns
 * truthy for are excluded from the result. The `callback` is bound to `thisArg`
 * and invoked with three arguments; (value, index, array).
 *
 * @static
 * @memberOf _
 * @alias drop, tail
 * @category Arrays
 * @param {Array} array The array to query.
 * @param {Function|Number} [callback|n=1] The function called per element or
 *  the number of elements to exclude.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Array} Returns a slice of `array`.
 * @example
 *
 * _.rest([1, 2, 3]);
 * // => [2, 3]
 *
 * _.rest([1, 2, 3], 2);
 * // => [3]
 *
 * _.rest([1, 2, 3], function(num) {
 *   return num < 3;
 * });
 * // => [3]
 */

function rest(array, callback, thisArg) {
    if(typeof callback == 'function') {
        var n = 0
        var index = -1
        var length = array ? array.length : 0

        callback = createCallback(callback, thisArg);
        while(++index < length && callback(array[index], index, array)) {
            n++;
        }
    } else {
        n = (callback == null || thisArg) ? 1 : nativeMax(0, callback)
    }
    return slice(array, n);
}


module.exports = rest
