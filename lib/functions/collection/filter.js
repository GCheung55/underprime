'use strict'

var createCallback = require('../../private/createCallback')
var isArray = require('../object/isArray')
var each = require('../../private/each')

/**
 * Examines each element in a `collection`, returning an array of all elements
 * the `callback` returns truthy for. The `callback` is bound to `thisArg` and
 * invoked with three arguments; (value, index|key, collection).
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
 * @alias select
 * @category Collections
 * @param {Array|Object|String} collection The collection to iterate over.
 * @param {Function|Object|String} [callback=identity] The function called per
 *  iteration. If a string or object is passed, it will be used to create a
 *  "_.pluck" or "_.where" style callback, respectively.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Array} Returns a new array of elements that passed the callback check.
 * @example
 *
 * var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
 * // => [2, 4, 6]
 *
 * var food = [
 *   { 'name': 'apple',  'organic': false, 'type': 'fruit' },
 *   { 'name': 'carrot', 'organic': true,  'type': 'vegetable' }
 * ];
 *
 * // using "_.pluck" callback shorthand
 * _.filter(food, 'organic');
 * // => [{ 'name': 'carrot', 'organic': true, 'type': 'vegetable' }]
 *
 * // using "_.where" callback shorthand
 * _.filter(food, { 'type': 'fruit' });
 * // => [{ 'name': 'apple', 'organic': false, 'type': 'fruit' }]
 */

module.exports = function(collection, callback, thisArg) {
    var result = []
    callback = createCallback(callback, thisArg)

    if(isArray(collection)) {
        var index = -1
        var length = collection.length

        while(++index < length) {
            var value = collection[index]
            if(callback(value, index, collection)) {
                result.push(value)
            }
        }
    } else {
        each(collection, function(value, index, collection) {
            if(callback(value, index, collection)) {
                result.push(value)
            }
        })
    }
    return result
}
