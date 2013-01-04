"use strict";

var _ = require('../')
var array = require('../shell/array/pluck')

_.implement('pluck', array)
module.exports = _
