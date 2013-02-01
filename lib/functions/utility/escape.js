'use strict'

var reUnescapedHtml = require('../../detect/reUnescapedHtml')
var escapeHtmlChar = require('../../util/escapeHtmlChar')

/**
 * Converts the characters `&`, `<`, `>`, `"`, and `'` in `string` to their
 * corresponding HTML entities.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {String} string The string to escape.
 * @returns {String} Returns the escaped string.
 * @example
 *
 * _.escape('Moe, Larry & Curly');
 * // => 'Moe, Larry &amp; Curly'
 */

function escape(string) {
    return string == null ? '' : (string + '').replace(reUnescapedHtml, escapeHtmlChar)
}

module.exports = escape
