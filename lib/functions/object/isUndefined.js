'use strict'

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Mixed} value The value to check.
 * @returns {Boolean} Returns `true`, if the `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 */

function isUndefined(value) {
    return typeof value == 'undefined'
}

module.exports = isUndefined
