"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var compact = require('../shell/array/compact')

_.implement('compact', array)
module.exports = compact
