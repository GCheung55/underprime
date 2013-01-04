"use strict";

var _ = require('../')
var array = require('../shell/array/union')

_.implement('union', array)
module.exports = _
