"use strict";

var _ = require('../'),
    list = require('../shell/list/object')

_.implement('object', list)
module.exports = _
