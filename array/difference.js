"use strict";

var _ = require('../')
var array = require('../shell/array/difference')

_.implement('difference', array)
module.exports = _
