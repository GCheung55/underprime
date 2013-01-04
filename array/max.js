"use strict";

var _ = require('../')
var array = require('../shell/array/max')

_.implement('max', array)
module.exports = _
