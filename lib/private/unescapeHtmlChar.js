'use strict'

var htmlUnescapes = require('./htmlUnescapes')

/**
 * Used by `unescape` to convert HTML entities to characters.
 *
 * @private
 * @param {String} match The matched character to unescape.
 * @returns {String} Returns the unescaped character.
 */

module.exports = function(match) {
    return htmlUnescapes[match]
}
