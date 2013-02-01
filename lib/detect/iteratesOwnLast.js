'use strict'

var props = require('./_props')

/** Detect if own properties are iterated after inherited properties (IE < 9) */

var iteratesOwnLast

iteratesOwnLast = props[0] != 'x'

module.exports = iteratesOwnLast