'use strict'

var isArray = require('../object/isArray')
var each = require('../../private/each')
var createCallback = require('../../private/createCallback')

/**
 * Reduces a `collection` to a single value. The initial state of the reduction
 * is `accumulator` and each successive step of it should be returned by the
 * `callback`. The `callback` is bound to `thisArg` and invoked with four
 * arguments; for arrays they are (accumulator, value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @alias foldl, inject
 * @category Collections
 * @param {Array|Object|String} collection The collection to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {Mixed} [accumulator] Initial value of the accumulator.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Mixed} Returns the accumulated value.
 * @example
 *
 * var sum = _.reduce([1, 2, 3], function(memo, num) { return memo + num; });
 * // => 6
 */

module.exports = function(collection, callback, accumulator, thisArg) {
    var noaccum = arguments.length < 3
    callback = createCallback(callback, thisArg, 4)

    if(isArray(collection)) {
        var index = -1
        var length = collection.length

        if(noaccum) {
            accumulator = collection[++index]
        }
        while(++index < length) {
            accumulator = callback(accumulator, collection[index], index, collection)
        }
    } else {
        each(collection, function(value, index, collection) {
            accumulator = noaccum ? (noaccum = false, value) : callback(accumulator, value, index, collection)
        })
    }
    return accumulator
}
