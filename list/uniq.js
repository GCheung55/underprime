"use strict";

var _ = require('../'),
    list = require('../shells/list/uniq')

_.implement('uniq', list)
module.exports = _
