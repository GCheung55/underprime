"use strict"

var reNative = require('../private/reNative')
var slice = require('./slice')
var nativeBind

module.exports = reNative.test(nativeBind = slice.bind) && nativeBind