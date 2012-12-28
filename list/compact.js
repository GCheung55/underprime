"use strict";

var _ = require('../'),
    list = require('../shells/list/compact')

_.implement('compact', list)
module.exports = _
