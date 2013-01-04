"use strict";

var _ = require('../')
var array = require('../shell/array/range')

_.implement('range', array)
module.exports = _
