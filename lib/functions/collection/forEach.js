'use strict'

var isArray = require('../object/isArray')
var each = require('../../private/each')

/**
 * Iterates over a `collection`, executing the `callback` for each element in
 * the `collection`. The `callback` is bound to `thisArg` and invoked with three
 * arguments; (value, index|key, collection). Callbacks may exit iteration early
 * by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @alias each
 * @category Collections
 * @param {Array|Object|String} collection The collection to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Array|Object|String} Returns `collection`.
 * @example
 *
 * _([1, 2, 3]).forEach(alert).join(',');
 * // => alerts each number and returns '1,2,3'
 *
 * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, alert);
 * // => alerts each number value (order is not guaranteed)
 */

module.exports = function(collection, callback, thisArg) {
    if(callback && typeof thisArg == 'undefined' && isArray(collection)) {
        var index = -1
        var length = collection.length

        while(++index < length) {
            if(callback(collection[index], index, collection) === false) {
                break
            }
        }
    } else {
        each(collection, callback, thisArg)
    }
    return collection
}
