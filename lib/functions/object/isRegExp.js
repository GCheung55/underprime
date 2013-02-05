'use strict'

// var toString = {}.toString
// var regexpClass = require('../../toStringClasses/regexpClass')

/**
 * Checks if `value` is a regular expression.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Mixed} value The value to check.
 * @returns {Boolean} Returns `true`, if the `value` is a regular expression, else `false`.
 * @example
 *
 * _.isRegExp(/moe/);
 * // => true
 */

// function isRegExp(value) {
//     return value instanceof RegExp || toString.call(value) == regexpClass
// }

// module.exports = isRegExp

var typeOf = require('prime/type')

module.exports = function(value){
    return typeOf(value) == 'regexp'
}