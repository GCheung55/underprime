'use strict'

// var toString = {}.toString
// var boolClass = require('../../toStringClasses/boolClass')

/**
 * Checks if `value` is a boolean value.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Mixed} value The value to check.
 * @returns {Boolean} Returns `true`, if the `value` is a boolean value, else `false`.
 * @example
 *
 * _.isBoolean(null);
 * // => false
 */

// function isBoolean(value) {
//     return value === true || value === false || toString.call(value) == boolClass
// }

// module.exports = isBoolean

var typeOf = require('prime/type')

module.exports = function(value){
    return typeOf(value) == 'boolean'
}