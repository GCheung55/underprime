"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var zip = require('../shell/array/zip')

// require('./max')
// require('./pluck')

_.implement('zip', array)
module.exports = zip
