"use strict";

var _ = require('../'),
    list = require('../shells/list/union')

_.implement('union', list)
module.exports = _
