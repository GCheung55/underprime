"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var first = require('../shell/array/first')

_.implement('first', array)
module.exports = first
