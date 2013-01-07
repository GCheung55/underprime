"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var union = require('../shell/array/union')

_.implement('union', array)
module.exports = union
