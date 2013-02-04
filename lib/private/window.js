'use strict'

/** Detect free variable `global` and use it as `window` */

module.exports = typeof global == 'object' ? global : window