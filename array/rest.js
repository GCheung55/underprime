"use strict";

var _ = require('../')
var array = require('../shell/array/rest')

_.implement('rest', array)
module.exports = _
