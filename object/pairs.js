"use strict";

var _ = require('../')
var object = require('prime/collection/hash')
var pairs = require('../shell/object/pairs')

_.implement('pairs', object)
module.exports = pairs
