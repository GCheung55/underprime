"use strict";

var _ = require('../'),
    list = require('../shell/array/intersection'),
    uniq = require('./uniq')


_.implement('intersection', list)
module.exports = _
