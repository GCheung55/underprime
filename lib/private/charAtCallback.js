'use strict'

/**
 * Used by `_.max` and `_.min` as the default `callback` when a given
 * `collection` is a string value.
 *
 * @private
 * @param {String} value The character to inspect.
 * @returns {Number} Returns the code unit of given character.
 */

module.exports = function charAtCallback(value) {
    return value.charCodeAt(0);
}