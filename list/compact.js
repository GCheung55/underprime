"use strict";

var _ = require('../'),
    list = require('../shell/list/compact')

_.implement('compact', list)
module.exports = _
