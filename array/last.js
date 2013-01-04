"use strict";

var _ = require('../')
var array = require('../shell/array/last')

_.implement('last', array)
module.exports = _
