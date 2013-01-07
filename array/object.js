"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var object = require('../shell/array/object')

_.implement('object', array)
module.exports = object
