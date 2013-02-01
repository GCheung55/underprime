'use strict'

var toString = {}.toString
var stringClass = require('../../toStringClasses/stringClass')

/**
 * Checks if `value` is a string.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Mixed} value The value to check.
 * @returns {Boolean} Returns `true`, if the `value` is a string, else `false`.
 * @example
 *
 * _.isString('moe');
 * // => true
 */

function isString(value) {
    return typeof value == 'string' || toString.call(value) == stringClass
}

module.exports = isString