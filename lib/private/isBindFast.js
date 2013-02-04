'use strict'

var nativeBind = require('../private/nativeBind')
var isV8 = require('./isV8')

module.exports = nativeBind && !isV8