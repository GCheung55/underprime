"use strict";

var _ = require('../'),
    list = require('../shells/list/difference')

_.implement('difference', list)
module.exports = _
