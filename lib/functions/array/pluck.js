'use strict'

var map = require('../collection/map')

/**
 * Retrieves the value of a specified property from all elements in
 * the `collection`.
 *
 * @static
 * @memberOf _
 * @category Collections
 * @param {Array|Object|String} collection The collection to iterate over.
 * @param {String} property The property to pluck.
 * @returns {Array} Returns a new array of property values.
 * @example
 *
 * var stooges = [
 *   { 'name': 'moe', 'age': 40 },
 *   { 'name': 'larry', 'age': 50 },
 *   { 'name': 'curly', 'age': 60 }
 * ];
 *
 * _.pluck(stooges, 'name');
 * // => ['moe', 'larry', 'curly']
 */

module.exports = function(collection, property) {
    return map(collection, property + '')
}
