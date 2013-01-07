"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var rest = require('../shell/array/rest')

_.implement('rest', array)
module.exports = rest
