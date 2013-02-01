'use strict'
var reNative = require('../detect/reNative')

var nativeKeys

module.exports = reNative.test(nativeKeys = Object.keys) && nativeKeys