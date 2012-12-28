"use strict";

var _ = require('../'),
    list = require('../shell/list/last')

_.implement('last', list)
module.exports = _
