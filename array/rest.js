"use strict";

var _ = require('../'),
    list = require('../shell/list/rest')

_.implement('rest', list)
module.exports = _
