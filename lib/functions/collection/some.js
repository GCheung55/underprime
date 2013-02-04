'use strict'

var createCallback = require('../../private/createCallback')
var isArray = require('../object/isArray')
var each = require('../../private/each')

/**
 * Checks if the `callback` returns a truthy value for **any** element of a
 * `collection`. The function returns as soon as it finds passing value, and
 * does not iterate over the entire `collection`. The `callback` is bound to
 * `thisArg` and invoked with three arguments; (value, index|key, collection).
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
 * @alias any
 * @category Collections
 * @param {Array|Object|String} collection The collection to iterate over.
 * @param {Function|Object|String} [callback=identity] The function called per
 *  iteration. If a string or object is passed, it will be used to create a
 *  "_.pluck" or "_.where" style callback, respectively.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Boolean} Returns `true` if any element passes the callback check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var food = [
 *   { 'name': 'apple',  'organic': false, 'type': 'fruit' },
 *   { 'name': 'carrot', 'organic': true,  'type': 'vegetable' }
 * ];
 *
 * // using "_.pluck" callback shorthand
 * _.some(food, 'organic');
 * // => true
 *
 * // using "_.where" callback shorthand
 * _.some(food, { 'type': 'meat' });
 * // => false
 */

function some(collection, callback, thisArg) {
    var result
    callback = createCallback(callback, thisArg)

    if(isArray(collection)) {
        var index = -1
        var length = collection.length

        while(++index < length) {
            if((result = callback(collection[index], index, collection))) {
                break
            }
        }
    } else {
        each(collection, function(value, index, collection) {
            return !(result = callback(value, index, collection))
        })
    }
    return !!result
}

module.exports = some