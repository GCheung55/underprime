'use strict'

var keys = require('./keys')

/**
 * Creates a two dimensional array of the given object's key-value pairs,
 * i.e. `[[key1, value1], [key2, value2]]`.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns new array of key-value pairs.
 * @example
 *
 * _.pairs({ 'moe': 30, 'larry': 40 });
 * // => [['moe', 30], ['larry', 40]] (order is not guaranteed)
 */

module.exports = function(object) {
    var index = -1
    var props = keys(object)
    var length = props.length
    var result = Array(length)

    while(++index < length) {
        var key = props[index]
        result[index] = [key, object[key]]
    }
    return result
}
