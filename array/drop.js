"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var drop = require('../shell/array/drop')

_.implement('drop', array)
module.exports = drop
