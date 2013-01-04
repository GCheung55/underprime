"use strict";

var _ = require('../')
var object = require('../shell/object/pairs')

_.implement('pairs', object)
module.exports = _
