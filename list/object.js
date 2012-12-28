"use strict";

var _ = require('../'),
    list = require('../shells/list/object')

_.implement('object', list)
module.exports = _
