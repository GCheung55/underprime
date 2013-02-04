'use strict'

var hasOwnProperty = require('../../private/hasOwnProperty')

/**
 * Checks if the specified object `property` exists and is a direct property,
 * instead of an inherited property.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The object to check.
 * @param {String} property The property to check for.
 * @returns {Boolean} Returns `true` if key is a direct property, else `false`.
 * @example
 *
 * _.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
 * // => true
 */

function has(object, property) {
    return object ? hasOwnProperty.call(object, property) : false
}

module.exports = has
