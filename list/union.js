"use strict";

var _ = require('../'),
    list = require('../shell/list/union')

_.implement('union', list)
module.exports = _
