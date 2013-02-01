'use strict'

var stringEscapes = require('./stringEscapes')

/**
 * Used by `template` to escape characters for inclusion in compiled
 * string literals.
 *
 * @private
 * @param {String} match The matched character to escape.
 * @returns {String} Returns the escaped character.
 */

function escapeStringChar(match) {
    return '\\' + stringEscapes[match];
}

module.exports = escapeStringChar