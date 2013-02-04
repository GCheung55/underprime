'use strict'

var win = require('../../private/window')
var oldDash = win._

/**
 * Reverts the '_' variable to its previous value and returns a reference to
 * the `lodash` function.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @returns {Function} Returns the `lodash` function.
 * @example
 *
 * var lodash = _.noConflict();
 */

function noConflict() {
  win._ = oldDash
  return this
}

module.exports = noConflict