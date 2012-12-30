"use strict";

var _ = require('../'),
    list = require('../shell/list/rest')

_.implement('drop', list)
module.exports = _
