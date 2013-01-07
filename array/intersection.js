"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var intersection = require('../shell/array/intersection')

// require('./uniq')

_.implement('intersection', array)
module.exports = intersection
