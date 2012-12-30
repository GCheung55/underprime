"use strict";

var _ = require('../'),
    list = require('../shell/array/range')

_.implement('range', list)
module.exports = _
