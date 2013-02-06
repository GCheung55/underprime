'use strict'

var forIn = require('./forIn')
var isFunction = require('./isFunction')

/**
 * Creates a sorted array of all enumerable properties, own and inherited,
 * of `object` that have function values.
 *
 * @static
 * @memberOf _
 * @alias methods
 * @category Objects
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns a new array of property names that have function values.
 * @example
 *
 * _.functions(_);
 * // => ['all', 'any', 'bind', 'bindAll', 'clone', 'compact', 'compose', ...]
 */

module.exports = function(object) {
    var result = []
    forIn(object, function(value, key) {
        if(isFunction(value)) {
            result.push(key)
        }
    });
    return result.sort()
}
