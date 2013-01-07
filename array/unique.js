"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var unique = require('../shell/array/unique')

_.implement('unique', array)
module.exports = unique
