'use strict'

var nativeKeys = require('../private/nativeKeys')
var isIeOpera = require('./isIeOpera')
var isV8 = require('./isV8')

/* Detect if `Object.keys` exists and is inferred to be fast (IE, Opera, V8) */
module.exports = nativeKeys && (isIeOpera || isV8);
