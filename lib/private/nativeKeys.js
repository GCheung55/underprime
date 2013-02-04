'use strict'
var reNative = require('../private/reNative')

var nativeKeys

module.exports = reNative.test(nativeKeys = Object.keys) && nativeKeys