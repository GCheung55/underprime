'use strict'

/**
 * Checks if `value` is a DOM node in IE < 9.
 *
 * @private
 * @param {Mixed} value The value to check.
 * @returns {Boolean} Returns `true` if the `value` is a DOM node, else `false`.
 */

module.exports = function(value) {
    // IE < 9 presents DOM nodes as `Object` objects except they have `toString`
    // methods that are `typeof` "string" and still can coerce nodes to strings
    return typeof value.toString != 'function' && typeof (value + '') == 'string'
}
