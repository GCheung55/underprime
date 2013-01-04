"use strict";

var _ = require('../')
var array = require('../shell/array/head')

_.implement('head', array)
module.exports = _
