"use strict";

var _ = require('../')
var array = require('../shell/array/zip')
require('./max')
require('./pluck')

_.implement('zip', array)
module.exports = _
