'use strict'

var hasOwnProperty = require('../../private/hasOwnProperty')
var indexOf = require('./indexOf')
var cachedContains = require('../../private/cachedContains')

/**
 * Computes the intersection of all the passed-in arrays using strict equality
 * for comparisons, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} [array1, array2, ...] Arrays to process.
 * @returns {Array} Returns a new array of unique elements that are present
 *  in **all** of the arrays.
 * @example
 *
 * _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
 * // => [1, 2]
 */

module.exports = function(array) {
    var args = arguments
    var argsLength = args.length
    var cache = {
        '0': {}
    }
    var index = -1
    var length = array ? array.length : 0
    var isLarge = length >= 100
    var result = []
    var seen = result

    outer: while(++index < length) {
        var value = array[index]
        if(isLarge) {
            var key = value + ''
            var inited = hasOwnProperty.call(cache[0], key) ? !(seen = cache[0][key]) : (seen = cache[0][key] = [])
        }
        if(inited || indexOf(seen, value) < 0) {
            if(isLarge) {
                seen.push(value)
            }
            var argsIndex = argsLength
            while(--argsIndex) {
                if(!(cache[argsIndex] || (cache[argsIndex] = cachedContains(args[argsIndex], 0, 100)))(value)) {
                    continue outer
                }
            }
            result.push(value)
        }
    }
    return result
}
