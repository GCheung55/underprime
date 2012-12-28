"use strict";

var _ = require('../'),
    list = require('../shells/list/range')

_.implement('range', list)
module.exports = _
