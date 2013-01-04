"use strict";

var _ = require('../')
var array = require('../shell/array/drop')

_.implement('drop', array)
module.exports = _
