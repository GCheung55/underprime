'use strict'

/**
 * Creates an object composed from arrays of `keys` and `values`. Pass either
 * a single two dimensional array, i.e. `[[key1, value1], [key2, value2]]`, or
 * two arrays, one of `keys` and one of corresponding `values`.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} keys The array of keys.
 * @param {Array} [values=[]] The array of values.
 * @returns {Object} Returns an object composed of the given keys and
 *  corresponding values.
 * @example
 *
 * _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
 * // => { 'moe': 30, 'larry': 40, 'curly': 50 }
 */

function object(keys, values) {
    var index = -1
    var length = keys ? keys.length : 0
    var result = {}

    while(++index < length) {
        var key = keys[index]
        if(values) {
            result[key] = values[index]
        } else {
            result[key[0]] = key[1]
        }
    }
    return result
}

module.exports = object
