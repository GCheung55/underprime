"use strict";

var _ = require('../')
var array = require('../shell/array/intersection')
require('./uniq')


_.implement('intersection', array)
module.exports = _
