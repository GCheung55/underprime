"use strict";

var _ = require('../'),
    list = require('../shell/list/intersection'),
    uniq = require('./uniq')


_.implement('intersection', list)
module.exports = _
