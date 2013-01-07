"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var last = require('../shell/array/last')

_.implement('last', array)
module.exports = last
