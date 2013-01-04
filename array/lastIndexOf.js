"use strict";

var _ = require('../')
var array = require('../shell/array/lastIndexOf')

_.implement('lastIndexOf', array)
module.exports = _
