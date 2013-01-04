"use strict";

var _ = require('../')
var array = require('../shell/array/uniq')

_.implement('uniq', array)
module.exports = _
