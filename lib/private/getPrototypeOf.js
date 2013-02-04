'use strict'

var reNative = require('../private/reNative')

var getPrototypeOf

module.exports = reNative.test(getPrototypeOf = Object.getPrototypeOf) && getPrototypeOf