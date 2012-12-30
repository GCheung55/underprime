"use strict";

var _ = require('../'),
    list = require('../shell/array/compact')

_.implement('compact', list)
module.exports = _
