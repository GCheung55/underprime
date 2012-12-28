"use strict";

var _ = require('../'),
    list = require('../shells/list/last')

_.implement('last', list)
module.exports = _
