'use strict'

var htmlEscapes = require('./htmlEscapes')

/**
 * Used by `escape` to convert characters to HTML entities.
 *
 * @private
 * @param {String} match The matched character to escape.
 * @returns {String} Returns the escaped character.
 */

module.exports = function(match) {
    return htmlEscapes[match]
}
