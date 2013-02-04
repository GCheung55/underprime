"use strict"

var reNative = require('../private/reNative')

var nativeIsArray = Array.isArray

module.exports = reNative.test( nativeIsArray ) && nativeIsArray