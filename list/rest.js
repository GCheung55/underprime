"use strict";

var _ = require('../'),
    list = require('../shells/list/rest')

_.implement('rest', list)
module.exports = _
