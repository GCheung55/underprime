'use strict'

var nativeBind = require('../private/nativeBind')
var isIeOpera = require('./isIeOpera')

module.exports = nativeBind && !/\n|true/.test(nativeBind + isIeOpera)