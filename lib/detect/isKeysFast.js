'use strict'

var nativeKeys = require('../util/nativeKeys')
var isIeOpera = require('./isIeOpera')
var isV8 = require('./isV8')

/* Detect if `Object.keys` exists and is inferred to be fast (IE, Opera, V8) */
var isKeysFast = nativeKeys && (isIeOpera || isV8);

module.exports = isKeysFast