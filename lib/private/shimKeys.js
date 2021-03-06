'use strict'

// var forOwn = require('../functions/object/forOwn')

/**
 * A fallback implementation of `Object.keys` that produces an array of the
 * given object's own enumerable property names.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns a new array of property names.
 */

// module.exports = function(object) {
//     var result = []
//     forOwn(object, function(value, key) {
//         result.push(key)
//     })
//     return result
// }

var has = require('../functions/object/has')

module.exports = function(obj){
    if (obj !== Object(obj)) throw new TypeError('Invalid object')
    var keys = []
    for (var key in obj) if (has(obj, key)) keys.push(key)
    return keys
}
