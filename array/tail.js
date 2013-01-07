"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var tail = require('../shell/array/tail')

_.implement('tail', array)
module.exports = tail
