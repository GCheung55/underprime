"use strict";

var _ = require('../'),
    list = require('../shell/list/first')

_.implement('first', list)
module.exports = _
