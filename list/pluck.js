"use strict";

var _ = require('../'),
    list = require('../shell/list/pluck')

_.implement('pluck', list)
module.exports = _
