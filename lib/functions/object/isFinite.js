'use strict'

var nativeIsFinite = require('../../private/nativeIsFinite')
var nativeIsNaN = require('../../private/nativeIsNaN')

/**
 * Checks if `value` is, or can be coerced to, a finite number.
 *
 * Note: This is not the same as native `isFinite`, which will return true for
 * booleans and empty strings. See http://es5.github.com/#x15.1.2.5.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Mixed} value The value to check.
 * @returns {Boolean} Returns `true`, if the `value` is finite, else `false`.
 * @example
 *
 * _.isFinite(-101);
 * // => true
 *
 * _.isFinite('10');
 * // => true
 *
 * _.isFinite(true);
 * // => false
 *
 * _.isFinite('');
 * // => false
 *
 * _.isFinite(Infinity);
 * // => false
 */

function isFinite(value) {
   return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
}

module.exports = isFinite