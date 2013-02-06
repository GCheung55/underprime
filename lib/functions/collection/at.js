'use strict'

var concat = require('../../private/concat')
var arrayRef = []
var slice = require('../../private/slice')
var noCharByIndex = require('../../private/noCharByIndex')
var isString = require('../object/isString')

/**
 * Creates an array of elements from the specified index(es), or keys, of the
 * `collection`. Indexes may be specified as individual arguments or as arrays
 * of indexes.
 *
 * @static
 * @memberOf _
 * @category Collections
 * @param {Array|Object|String} collection The collection to iterate over.
 * @param {Array|Number|String} [index1, index2, ...] The index(es) of
 *  `collection` to retrieve, either as individual arguments or arrays.
 * @returns {Array} Returns a new array of elements corresponding to the
 *  provided indexes.
 * @example
 *
 * _.at(['a', 'b', 'c', 'd', 'e'], [0, 2, 4]);
 * // => ['a', 'c', 'e']
 *
 * _.at(['moe', 'larry', 'curly'], 0, 2);
 * // => ['moe', 'curly']
 */

module.exports = function(collection) {
    var index = -1
    var props = concat.apply(arrayRef, slice(arguments, 1))
    var length = props.length
    var result = Array(length)

    if(noCharByIndex && isString(collection)) {
        collection = collection.split('')
    }
    while(++index < length) {
        result[index] = collection[props[index]]
    }
    return result
}
