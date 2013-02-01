'use strict'

var isArray = require('../object/isArray')
var push = [].push

/**
 * Flattens a nested array (the nesting can be to any depth). If `shallow` is
 * truthy, `array` will only be flattened a single level.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} array The array to compact.
 * @param {Boolean} shallow A flag to indicate only flattening a single level.
 * @returns {Array} Returns a new flattened array.
 * @example
 *
 * _.flatten([1, [2], [3, [[4]]]]);
 * // => [1, 2, 3, 4];
 *
 * _.flatten([1, [2], [3, [[4]]]], true);
 * // => [1, 2, 3, [[4]]];
 */

function flatten(array, shallow) {
    var index = -1
    var length = array ? array.length : 0
    var result = []

    while(++index < length) {
        var value = array[index]

        // recursively flatten arrays (susceptible to call stack limits)
        if(isArray(value)) {
            push.apply(result, shallow ? value : flatten(value))
        } else {
            result.push(value)
        }
    }
    return result
}

module.exports = flatten
