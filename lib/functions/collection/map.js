'use strict'

var createCallback = require('../../private/createCallback')
var isArray = require('../object/isArray')
var each = require('../../private/each')

/**
 * Creates an array of values by running each element in the `collection`
 * through the `callback`. The `callback` is bound to `thisArg` and invoked with
 * three arguments; (value, index|key, collection).
 *
 * If a property name is passed for `callback`, the created "_.pluck" style
 * callback will return the property value of the given element.
 *
 * If an object is passed for `callback`, the created "_.where" style callback
 * will return `true` for elements that have the propeties of the given object,
 * else `false`.
 *
 * @static
 * @memberOf _
 * @alias collect
 * @category Collections
 * @param {Array|Object|String} collection The collection to iterate over.
 * @param {Function|Object|String} [callback=identity] The function called per
 *  iteration. If a string or object is passed, it will be used to create a
 *  "_.pluck" or "_.where" style callback, respectively.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Array} Returns a new array of the results of each `callback` execution.
 * @example
 *
 * _.map([1, 2, 3], function(num) { return num * 3; });
 * // => [3, 6, 9]
 *
 * _.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
 * // => [3, 6, 9] (order is not guaranteed)
 *
 * var stooges = [
 *   { 'name': 'moe', 'age': 40 },
 *   { 'name': 'larry', 'age': 50 }
 * ];
 *
 * // using "_.pluck" callback shorthand
 * _.map(stooges, 'name');
 * // => ['moe', 'larry']
 */

function map(collection, callback, thisArg) {
    var index = -1
    var length = collection ? collection.length : 0
    var result = Array(typeof length == 'number' ? length : 0)

    callback = createCallback(callback, thisArg)
    if(isArray(collection)) {
        while(++index < length) {
            result[index] = callback(collection[index], index, collection)
        }
    } else {
        each(collection, function(value, key, collection) {
            result[++index] = callback(value, key, collection)
        })
    }
    return result
}

module.exports = map