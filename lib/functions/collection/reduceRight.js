'use strict'

var isString = require('../object/isString')
var keys = require('../object/keys')
var createCallback = require('../../private/createCallback')
var noCharByIndex = require('../../private/noCharByIndex')
var forEach = require('./forEach')

/**
 * This method is similar to `_.reduce`, except that it iterates over a
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @alias foldr
 * @category Collections
 * @param {Array|Object|String} collection The collection to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {Mixed} [accumulator] Initial value of the accumulator.
 * @param {Mixed} [thisArg] The `this` binding of `callback`.
 * @returns {Mixed} Returns the accumulated value.
 * @example
 *
 * var list = [[0, 1], [2, 3], [4, 5]];
 * var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
 * // => [4, 5, 2, 3, 0, 1]
 */

module.exports = function(collection, callback, accumulator, thisArg) {
    var iterable = collection
    var length = collection ? collection.length : 0
    var noaccum = arguments.length < 3

    if(typeof length != 'number') {
        var props = keys(collection)
        length = props.length
    } else if(noCharByIndex && isString(collection)) {
        iterable = collection.split('')
    }
    callback = createCallback(callback, thisArg, 4)
    forEach(collection, function(value, index, collection) {
        index = props ? props[--length] : --length
        accumulator = noaccum ? (noaccum = false, iterable[index]) : callback(accumulator, iterable[index], index, collection)
    })
    return accumulator
}
