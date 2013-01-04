"use strict";

var _ = require('../')
var array = require('../shell/array/compact')

_.implement('compact', array)
module.exports = _
