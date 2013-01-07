"use strict";

var _ = require('../')
var array = require('prime/collection/list')
var head = require('../shell/array/head')

_.implement('head', array)
module.exports = head
