'use strict'

var idCounter = 0

/**
 * Generates a unique ID. If `prefix` is passed, the ID will be appended to it.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {String} [prefix] The value to prefix the ID with.
 * @returns {String} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */

function uniqueId(prefix) {
    var id = ++idCounter
    return(prefix == null ? '' : prefix + '') + id
}

module.exports = uniqueId