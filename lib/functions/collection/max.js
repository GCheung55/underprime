'use strict'
var isArray = require('../object/isArray')
var isString = require('../object/isString')
var createCallback = require('../../private/createCallback')
var charAtCallback = require('../../private/charAtCallback')
var each = require('../../private/each')

/**
 * Retrieves the maximum value of an `array`. If `callback` is passed,
 * it will be executed for each value in the `array` to generate the
 * criterion by which the value is ranked. The `callback` is bound to
 * `thisArg` and invoked with three arguments; (value, index, collection).
 *
 * @static
 * @memberOf _
 * @category Collections
 * @param {Array|Object|String} collection The collection to iterate over.
 * @param {Function} [callback] The function called per iteration.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Mixed} Returns the maximum value.
 * @example
 *
 * var stooges = [
 *   { 'name': 'moe', 'age': 40 },
 *   { 'name': 'larry', 'age': 50 },
 *   { 'name': 'curly', 'age': 60 }
 * ];
 *
 * _.max(stooges, function(stooge) { return stooge.age; });
 * // => { 'name': 'curly', 'age': 60 };
 */

function max(collection, callback, thisArg) {
    var computed = -Infinity
    var result = computed

    if(!callback && isArray(collection)) {
        var index = -1
        var length = collection.length

        while(++index < length) {
            var value = collection[index]
            if(value > result) {
                result = value
            }
        }
    } else {
        callback = !callback && isString(collection) ? charAtCallback : createCallback(callback, thisArg)

        each(collection, function(value, index, collection) {
            var current = callback(value, index, collection)
            if(current > computed) {
                computed = current
                result = value
            }
        });
    }
    return result
}

module.exports = max
