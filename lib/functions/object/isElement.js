'use strict'

/**
 * Checks if `value` is a DOM element.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Mixed} value The value to check.
 * @returns {Boolean} Returns `true`, if the `value` is a DOM element, else `false`.
 * @example
 *
 * _.isElement(document.body);
 * // => true
 */

function isElement(value) {
    return value ? value.nodeType === 1 : false
}

module.exports = isElement