'use strict'

var createCallback = require('../../private/createCallback')
var charAtCallback = require('../../private/charAtCallback')
var each = require('../../private/each')
var isArray = require('../object/isArray')
var isString = require('../object/isString')

/**
 * Retrieves the minimum value of an `array`. If `callback` is passed,
 * it will be executed for each value in the `array` to generate the
 * criterion by which the value is ranked. The `callback` is bound to `thisArg`
 * and invoked with three arguments; (value, index, collection).
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
 * @returns {Mixed} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * var stooges = [
 *   { 'name': 'moe', 'age': 40 },
 *   { 'name': 'larry', 'age': 50 }
 * ];
 *
 * _.min(stooges, function(stooge) { return stooge.age; });
 * // => { 'name': 'moe', 'age': 40 };
 *
 * // using "_.pluck" callback shorthand
 * _.min(stooges, 'age');
 * // => { 'name': 'moe', 'age': 40 };
 */

function min(collection, callback, thisArg) {
    var computed = Infinity
    var result = computed

    if(!callback && isArray(collection)) {
        var index = -1
        var length = collection.length

        while(++index < length) {
            var value = collection[index]
            if(value < result) {
                result = value
            }
        }
    } else {
        callback = !callback && isString(collection) ? charAtCallback : createCallback(callback, thisArg)

        each(collection, function(value, index, collection) {
            var current = callback(value, index, collection)
            if(current < computed) {
                computed = current
                result = value
            }
        })
    }
    return result
}

module.exports = min
