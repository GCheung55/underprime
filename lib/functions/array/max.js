"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var max = require('../shell/array/max')

_.implement('max', array)
module.exports = max
