'use strict'

var nativeBind = require('../util/nativeBind')
var isIeOpera = require('./isIeOpera')

module.exports = nativeBind && !/\n|true/.test(nativeBind + isIeOpera)