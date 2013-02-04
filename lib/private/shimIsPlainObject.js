'use strict'

var isArguments = require('../functions/object/isArguments')
var isFunction = require('../functions/object/isFunction')
var noNodeClass = require('../private/noNodeClass')
var isNode = require('./isNode')
var iteratesOwnLast = require('../private/iteratesOwnLast')
var forIn = require('../functions/object/forIn')
var hasOwnProperty = require('./hasOwnProperty')

/**
 * A fallback implementation of `isPlainObject` that checks if a given `value`
 * is an object created by the `Object` constructor, assuming objects created
 * by the `Object` constructor have no inherited enumerable properties and that
 * there are no `Object.prototype` extensions.
 *
 * @private
 * @param {Mixed} value The value to check.
 * @returns {Boolean} Returns `true`, if `value` is a plain object, else `false`.
 */

function shimIsPlainObject(value) {
    // avoid non-objects and false positives for `arguments` objects
    var result = false
    if(!(value && typeof value == 'object') || isArguments(value)) {
        return result
    }
    // check that the constructor is `Object` (i.e. `Object instanceof Object`)
    var ctor = value.constructor
    if((!isFunction(ctor) && (!noNodeClass || !isNode(value))) || ctor instanceof ctor) {
        // IE < 9 iterates inherited properties before own properties. If the first
        // iterated property is an object's own property then there are no inherited
        // enumerable properties.
        if(iteratesOwnLast) {
            forIn(value, function(value, key, object) {
                result = !hasOwnProperty.call(object, key)
                return false
            });
            return result === false
        }
        // In most environments an object's own properties are iterated before
        // its inherited properties. If the last iterated property is an object's
        // own property then there are no inherited enumerable properties.
        forIn(value, function(value, key) {
            result = key
        });
        return result === false || hasOwnProperty.call(value, result)
    }
    return result
}

module.exports = shimIsPlainObject
