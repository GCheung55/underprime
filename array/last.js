"use strict";

var _ = require('../'),
    list = require('../shell/array/last')

_.implement('last', list)
module.exports = _
