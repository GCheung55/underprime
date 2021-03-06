'use strict';

var props = require('./props')

/**
 * Detect the JScript [[DontEnum]] bug:
 *
 * In IE < 9 an objects own properties, shadowing non-enumerable ones, are
 * made non-enumerable as well.
 */

module.exports = !/valueOf/.test(props);
