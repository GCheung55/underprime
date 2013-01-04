"use strict";

var _ = require('../')
var array = require('../shell/array/unique')

_.implement('unique', array)
module.exports = _
