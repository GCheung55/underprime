'use strict'

var toString = {}.toString
var numberClass = require('../../toStringClasses/numberClass')

/**
 * Checks if `value` is a number.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Mixed} value The value to check.
 * @returns {Boolean} Returns `true`, if the `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(8.4 * 5);
 * // => true
 */

function isNumber(value) {
    return typeof value == 'number' || toString.call(value) == numberClass
}

module.exports = isNumber
