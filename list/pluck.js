"use strict";

var _ = require('../'),
    list = require('../shells/list/pluck')

_.implement('pluck', list)
module.exports = _
