"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var pluck = require('../shell/array/pluck')

_.implement('pluck', array)
module.exports = pluck
