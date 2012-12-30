"use strict";

var _ = require('../'),
    list = require('../shell/list/tail')

_.implement('tail', list)
module.exports = _
