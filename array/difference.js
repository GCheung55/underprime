"use strict";

var _ = require('../'),
    list = require('../shell/array/difference')

_.implement('difference', list)
module.exports = _
