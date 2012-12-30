"use strict";

var _ = require('../'),
    list = require('../shell/list/range')

_.implement('range', list)
module.exports = _
