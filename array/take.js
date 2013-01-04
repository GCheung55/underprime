"use strict";

var _ = require('../')
var array = require('../shell/array/take')

_.implement('take', array)
module.exports = _
