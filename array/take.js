"use strict";

var _ = require('../'),
    list = require('../shell/list/take')

_.implement('take', list)
module.exports = _
