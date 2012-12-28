"use strict";

var _ = require('../'),
    list = require('../shell/list/difference')

_.implement('difference', list)
module.exports = _
