"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var sortedIndex = require('../shell/array/sortedIndex')

_.implement('sortedIndex', array)
module.exports = sortedIndex
