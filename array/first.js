"use strict";

var _ = require('../')
var array = require('../shell/array/first')

_.implement('first', array)
module.exports = _
