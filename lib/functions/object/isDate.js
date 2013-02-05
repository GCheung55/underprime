'use strict'

// var toString = {}.toString
// var dateClass = require('../../toStringClasses/dateClass')

/**
 * Checks if `value` is a date.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Mixed} value The value to check.
 * @returns {Boolean} Returns `true`, if the `value` is a date, else `false`.
 * @example
 *
 * _.isDate(new Date);
 * // => true
 */

// function isDate(value) {
//     return value instanceof Date || toString.call(value) == dateClass
// }

// module.exports = isDate

var typeOf = require('prime/type')

module.exports = function(value){
    return typeOf(value) == 'date'
}