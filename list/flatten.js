"use strict";

var _ = require('../'),
    list = require('../shells/list/flatten')

_.implement('flatten', list)
module.exports = _
