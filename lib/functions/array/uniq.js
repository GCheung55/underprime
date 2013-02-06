'use strict'

var createCallback = require('../../private/createCallback')
var hasOwnProperty = require('../../private/hasOwnProperty')
var indexOf = require('./indexOf')

/**
 * Creates a duplicate-value-free version of the `array` using strict equality
 * for comparisons, i.e. `===`. If the `array` is already sorted, passing `true`
 * for `isSorted` will run a faster algorithm. If `callback` is passed, each
 * element of `array` is passed through a callback` before uniqueness is computed.
 * The `callback` is bound to `thisArg` and invoked with three arguments; (value, index, array).
 *
 * @static
 * @memberOf _
 * @alias unique
 * @category Arrays
 * @param {Array} array The array to process.
 * @param {Boolean} [isSorted=false] A flag to indicate that the `array` is already sorted.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Array} Returns a duplicate-value-free array.
 * @example
 *
 * _.uniq([1, 2, 1, 3, 1]);
 * // => [1, 2, 3]
 *
 * _.uniq([1, 1, 2, 2, 3], true);
 * // => [1, 2, 3]
 *
 * _.uniq([1, 2, 1.5, 3, 2.5], function(num) { return Math.floor(num); });
 * // => [1, 2, 3]
 *
 * _.uniq([1, 2, 1.5, 3, 2.5], function(num) { return this.floor(num); }, Math);
 * // => [1, 2, 3]
 */

module.exports = function(array, isSorted, callback, thisArg) {
    var index = -1
    var length = array ? array.length : 0
    var result = []
    var seen = result

    // juggle arguments
    if(typeof isSorted == 'function') {
        thisArg = callback
        callback = isSorted
        isSorted = false
    }
    // init value cache for large arrays
    var isLarge = !isSorted && length >= 75
    if(isLarge) {
        var cache = {}
    }
    if(callback) {
        seen = []
        callback = createCallback(callback, thisArg)
    }
    while(++index < length) {
        var value = array[index]
        var computed = callback ? callback(value, index, array) : value

        if(isLarge) {
            var key = computed + ''
            var inited = hasOwnProperty.call(cache, key) ? !(seen = cache[key]) : (seen = cache[key] = [])
        }
        if(isSorted ? !index || seen[seen.length - 1] !== computed : inited || indexOf(seen, computed) < 0) {
            if(callback || isLarge) {
                seen.push(computed)
            }
            result.push(value)
        }
    }
    return result
}
