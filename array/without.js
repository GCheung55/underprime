"use strict";

var _ = require('../')
var array = require('../shell/array/without')
require('./difference')

_.implement('without', array)
module.exports = _
