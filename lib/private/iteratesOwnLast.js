'use strict'

var props = require('./props')

/** Detect if own properties are iterated after inherited properties (IE < 9) */

module.exports = props[0] != 'x'
