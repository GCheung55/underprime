"use strict";

var _ = require('../'),
    list = require('../shell/list/unique')

_.implement('unique', list)
module.exports = _
