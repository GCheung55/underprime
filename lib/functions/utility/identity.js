'use strict'

/**
 * This function returns the first argument passed to it.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {Mixed} value Any value.
 * @returns {Mixed} Returns `value`.
 * @example
 *
 * var moe = { 'name': 'moe' };
 * moe === _.identity(moe);
 * // => true
 */

function identity(value) {
    return value
}

module.exports = identity