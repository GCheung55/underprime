"use strict";

var _ = require('../')
var array = require('../shell/array/tail')

_.implement('tail', array)
module.exports = _
