'use strict'

var createCallback = require('../../util/createCallback')
var concat = require('../../util/concat')
var arrayRef = []
var forIn = require('./forIn')
var indexOf = require('../array/indexOf')

/**
 * Creates a shallow clone of `object` excluding the specified properties.
 * Property names may be specified as individual arguments or as arrays of
 * property names. If a `callback` function is passed, it will be executed
 * for each property in the `object`, omitting the properties `callback`
 * returns truthy for. The `callback` is bound to `thisArg` and invoked
 * with three arguments; (value, key, object).
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The source object.
 * @param {Function|String} callback|[prop1, prop2, ...] The properties to omit
 *  or the function called per iteration.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Object} Returns an object without the omitted properties.
 * @example
 *
 * _.omit({ 'name': 'moe', 'age': 40, 'userid': 'moe1' }, 'userid');
 * // => { 'name': 'moe', 'age': 40 }
 *
 * _.omit({ 'name': 'moe', '_hint': 'knucklehead', '_seed': '96c4eb' }, function(value, key) {
 *   return key.charAt(0) == '_';
 * });
 * // => { 'name': 'moe' }
 */

function omit(object, callback, thisArg) {
    var isFunc = typeof callback == 'function'
    var result = {}

    if(isFunc) {
        callback = createCallback(callback, thisArg)
    } else {
        var props = concat.apply(arrayRef, arguments)
    }
    forIn(object, function(value, key, object) {
        if(isFunc ? !callback(value, key, object) : indexOf(props, key, 1) < 0) {
            result[key] = value
        }
    })
    return result
}

module.exports = omit
