"use strict";

var _ = require('../')
var array = require('../shell/array/flatten')

_.implement('flatten', array)
module.exports = _
