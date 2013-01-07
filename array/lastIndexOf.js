"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var lastIndexOf = require('../shell/array/lastIndexOf')

_.implement('lastIndexOf', array)
module.exports = lastIndexOf
