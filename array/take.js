"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var take = require('../shell/array/take')

_.implement('take', array)
module.exports = take
