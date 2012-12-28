"use strict";

var _ = require('../'),
    list = require('../shells/list/max')

_.implement('max', list)
module.exports = _
