'use strict'

var reUnescapedHtml = require('../../private/reUnescapedHtml')
var escapeHtmlChar = require('../../private/escapeHtmlChar')

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

module.exports = function(string) {
    return string == null ? '' : (string + '').replace(reUnescapedHtml, escapeHtmlChar)
}
