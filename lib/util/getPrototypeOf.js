'use strict'

var reNative = require('../detect/reNative')

var getPrototypeOf

module.exports = reNative.test(getPrototypeOf = Object.getPrototypeOf) && getPrototypeOf