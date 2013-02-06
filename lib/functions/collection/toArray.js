'use strict'

var noCharByIndex = require('../../private/noCharByIndex')
var isString = require('../object/isString')
var slice = require('../../private/slice')
var values = require('../object/values')

/**
 * Converts the `collection` to an array.
 *
 * @static
 * @memberOf _
 * @category Collections
 * @param {Array|Object|String} collection The collection to convert.
 * @returns {Array} Returns the new converted array.
 * @example
 *
 * (function() { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
 * // => [2, 3, 4]
 */

module.exports = function(collection) {
    if(collection && typeof collection.length == 'number') {
        return noCharByIndex && isString(collection) ? collection.split('') : slice(collection);
    }
    return values(collection);
}
