"use strict";

var _ = require('../'),
    list = require('../shell/array/uniq')

_.implement('uniq', list)
module.exports = _
