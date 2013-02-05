'use strict'

var forOwn = require('../functions/object/forOwn')

/**
 * A fallback implementation of `Object.keys` that produces an array of the
 * given object's own enumerable property names.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns a new array of property names.
 */

function shimKeys(object) {
    var result = [];
    forOwn(object, function(value, key) {
        result.push(key);
    });
    return result;
}

module.exports = shimKeys