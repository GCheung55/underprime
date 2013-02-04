'use strict'

var reEscapedHtml = require('../../private/reEscapedHtml')
var unescapeHtmlChar = require('../../private/unescapeHtmlChar')

/**
 * The opposite of `_.escape`, this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#x27;` in `string` to their
 * corresponding characters.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {String} string The string to unescape.
 * @returns {String} Returns the unescaped string.
 * @example
 *
 * _.unescape('Moe, Larry &amp; Curly');
 * // => 'Moe, Larry & Curly'
 */

function unescape(string) {
  return string == null ? '' : (string + '').replace(reEscapedHtml, unescapeHtmlChar)
}

module.exports = unescape
