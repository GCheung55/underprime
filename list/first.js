"use strict";

var _ = require('../'),
    list = require('../shells/list/first')

_.implement('first', list)
module.exports = _
