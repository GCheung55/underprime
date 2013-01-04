"use strict";

var _ = require('../')
var array = require('../shell/array/sortedIndex')

_.implement('sortedIndex', array)
module.exports = _
