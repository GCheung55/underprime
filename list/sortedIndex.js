"use strict";

var _ = require('../'),
    list = require('../shells/list/sortedIndex')

_.implement('sortedIndex', list)
module.exports = _
