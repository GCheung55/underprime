"use strict";

var _ = require('../'),
    list = require('../shell/list/flatten')

_.implement('flatten', list)
module.exports = _
