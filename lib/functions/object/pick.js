'use strict'

var concat = require('../../private/concat')
var arrayRef = []
var isObject = require('./isObject')
var createCallback = require('../../private/createCallback')
var forIn = require('./forIn')

/**
 * Creates a shallow clone of `object` composed of the specified properties.
 * Property names may be specified as individual arguments or as arrays of property
 * names. If `callback` is passed, it will be executed for each property in the
 * `object`, picking the properties `callback` returns truthy for. The `callback`
 * is bound to `thisArg` and invoked with three arguments; (value, key, object).
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The source object.
 * @param {Array|Function|String} callback|[prop1, prop2, ...] The function called
 *  per iteration or properties to pick, either as individual arguments or arrays.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Object} Returns an object composed of the picked properties.
 * @example
 *
 * _.pick({ 'name': 'moe', '_userid': 'moe1' }, 'name');
 * // => { 'name': 'moe' }
 *
 * _.pick({ 'name': 'moe', '_userid': 'moe1' }, function(value, key) {
 *   return key.charAt(0) != '_';
 * });
 * // => { 'name': 'moe' }
 */

module.exports = function(object, callback, thisArg) {
    var result = {}
    if(typeof callback != 'function') {
        var index = 0
        var props = concat.apply(arrayRef, arguments)
        var length = isObject(object) ? props.length : 0

        while(++index < length) {
            var key = props[index]
            if(key in object) {
                result[key] = object[key]
            }
        }
    } else {
        callback = createCallback(callback, thisArg)
        forIn(object, function(value, key, object) {
            if(callback(value, key, object)) {
                result[key] = value
            }
        })
    }
    return result
}
