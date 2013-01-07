"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var initial = require('../shell/array/initial')

_.implement('initial', array)
module.exports = initial
