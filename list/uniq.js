"use strict";

var _ = require('../'),
    list = require('../shell/list/uniq')

_.implement('uniq', list)
module.exports = _
