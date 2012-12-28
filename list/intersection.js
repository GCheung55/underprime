"use strict";

var _ = require('../'),
    list = require('../shells/list/intersection'),
    uniq = require('./uniq')


_.implement('intersection', list)
module.exports = _
