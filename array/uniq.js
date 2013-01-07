"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var uniq = require('../shell/array/uniq')

_.implement('uniq', array)
module.exports = uniq
