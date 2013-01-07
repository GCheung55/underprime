"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var flatten = require('../shell/array/flatten')

_.implement('flatten', array)
module.exports = flatten
