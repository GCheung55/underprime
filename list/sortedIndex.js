"use strict";

var _ = require('../'),
    list = require('../shell/list/sortedIndex')

_.implement('sortedIndex', list)
module.exports = _
