"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var without = require('../shell/array/without')

// require('./difference')

_.implement('without', array)
module.exports = without
