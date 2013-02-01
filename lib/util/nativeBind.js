"use strict"

var reNative = require('../detect/reNative')
var slice = require('./slice')
var nativeBind

module.exports = reNative.test(nativeBind = slice.bind) && nativeBind