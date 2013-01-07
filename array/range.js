"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var range = require('../shell/array/range')

_.implement('range', array)
module.exports = range
