"use strict";

var _ = require('../'),
    list = require('../shell/array/sortedIndex')

_.implement('sortedIndex', list)
module.exports = _
