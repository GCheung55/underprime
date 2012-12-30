"use strict";

var _ = require('../'),
    list = require('../shell/array/tail')

_.implement('tail', list)
module.exports = _
