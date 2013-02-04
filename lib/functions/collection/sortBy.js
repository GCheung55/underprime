'use strict'

var createCallback = require('../../private/createCallback')
var forEach = require('./forEach')
var compareAscending = require('../../private/compareAscending')

/**
 * Creates an array, stable sorted in ascending order by the results of
 * running each element of `collection` through the `callback`. The `callback`
 * is bound to `thisArg` and invoked with three arguments; (value, index|key, collection).
 * The `callback` argument may also be the name of a property to sort by (e.g. 'length').
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
 * @category Collections
 * @param {Array|Object|String} collection The collection to iterate over.
 * @param {Function|Object|String} [callback=identity] The function called per
 *  iteration. If a string or object is passed, it will be used to create a
 *  "_.pluck" or "_.where" style callback, respectively.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Array} Returns a new array of sorted elements.
 * @example
 *
 * _.sortBy([1, 2, 3], function(num) { return Math.sin(num); });
 * // => [3, 1, 2]
 *
 * _.sortBy([1, 2, 3], function(num) { return this.sin(num); }, Math);
 * // => [3, 1, 2]
 *
 * // using "_.pluck" callback shorthand
 * _.sortBy(['banana', 'strawberry', 'apple'], 'length');
 * // => ['apple', 'banana', 'strawberry']
 */

function sortBy(collection, callback, thisArg) {
    var index = -1
    var length = collection ? collection.length : 0
    var result = Array(typeof length == 'number' ? length : 0)

    callback = createCallback(callback, thisArg)
    forEach(collection, function(value, key, collection) {
        result[++index] = {
            'criteria': callback(value, key, collection),
            'index': index,
            'value': value
        }
    })

    length = result.length
    result.sort(compareAscending)
    while(length--) {
        result[length] = result[length].value
    }
    return result
}

module.exports = sortBy