'use strict'

var isNumber = require('./isNumber')

/**
 * Checks if `value` is `NaN`.
 *
 * Note: This is not the same as native `isNaN`, which will return `true` for
 * `undefined` and other values. See http://es5.github.com/#x15.1.2.4.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Mixed} value The value to check.
 * @returns {Boolean} Returns `true`, if the `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */

function isNaN(value) {
    // `NaN` as a primitive is the only value that is not equal to itself
    // (perform the [[Class]] check first to avoid errors with some host objects in IE)
    return isNumber(value) && value != +value
}

module.exports = isNaN
