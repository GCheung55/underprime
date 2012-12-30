"use strict";

var _ = require('../'),
    list = require('../shell/array/take')

_.implement('take', list)
module.exports = _
