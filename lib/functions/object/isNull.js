'use strict'

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Mixed} value The value to check.
 * @returns {Boolean} Returns `true`, if the `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(undefined);
 * // => false
 */

// function isNull(value) {
//     return value === null
// }

// module.exports = isNull

var typeOf = require('prime/type')

module.exports = function(value){
    return typeOf(value) == 'null'
}