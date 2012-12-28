"use strict";

var _ = require('../'),
    list = require('../shell/list/max')

_.implement('max', list)
module.exports = _
