"use strict"

var reNative = require('../detect/reNative')

var nativeIsArray = Array.isArray

module.exports = reNative.test( nativeIsArray ) && nativeIsArray