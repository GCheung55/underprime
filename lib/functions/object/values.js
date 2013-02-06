'use strict'

var keys = require('./keys')

/**
 * Creates an array composed of the own enumerable property values of `object`.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns a new array of property values.
 * @example
 *
 * _.values({ 'one': 1, 'two': 2, 'three': 3 });
 * // => [1, 2, 3]
 */

module.exports = function(object) {
    var index = -1
    var props = keys(object)
    var length = props.length
    var result = Array(length)

    while(++index < length) {
        result[index] = object[props[index]]
    }
    return result
}

// module.exports = require('prime/shell/object').values