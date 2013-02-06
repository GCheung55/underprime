'use strict'

var keys = require('./keys')

/**
 * Creates an object composed of the inverted keys and values of the given `object`.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the created inverted object.
 * @example
 *
 *  _.invert({ 'first': 'moe', 'second': 'larry' });
 * // => { 'moe': 'first', 'larry': 'second' } (order is not guaranteed)
 */

module.exports = function(object) {
    var index = -1
    var props = keys(object)
    var length = props.length
    var result = {}

    while(++index < length) {
        var key = props[index]
        result[object[key]] = key
    }
    return result
}
