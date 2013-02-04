'use strict'

var createCallback = require('../../private/createCallback')
var isArray = require('../object/isArray')
var each = require('../../private/each')

/**
 * Checks if the `callback` returns a truthy value for **all** elements of a
 * `collection`. The `callback` is bound to `thisArg` and invoked with three
 * arguments; (value, index|key, collection).
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
 * @alias all
 * @category Collections
 * @param {Array|Object|String} collection The collection to iterate over.
 * @param {Function|Object|String} [callback=identity] The function called per
 *  iteration. If a string or object is passed, it will be used to create a
 *  "_.pluck" or "_.where" style callback, respectively.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Boolean} Returns `true` if all elements pass the callback check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var stooges = [
 *   { 'name': 'moe', 'age': 40 },
 *   { 'name': 'larry', 'age': 50 }
 * ];
 *
 * // using "_.pluck" callback shorthand
 * _.every(stooges, 'age');
 * // => true
 *
 * // using "_.where" callback shorthand
 * _.every(stooges, { 'age': 50 });
 * // => false
 */

function every(collection, callback, thisArg) {
    var result = true
    callback = createCallback(callback, thisArg)

    if(isArray(collection)) {
        var index = -1
        var length = collection.length

        while(++index < length) {
            if(!(result = !! callback(collection[index], index, collection))) {
                break
            }
        }
    } else {
        each(collection, function(value, index, collection) {
            return(result = !! callback(value, index, collection))
        })
    }
    return result
}

module.exports = every