"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var difference = require('../shell/array/difference')

_.implement('difference', array)
module.exports = difference
