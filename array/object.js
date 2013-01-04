"use strict";

var _ = require('../')
var array = require('../shell/array/object')

_.implement('object', array)
module.exports = _
