"use strict";

var _ = require('../'),
    list = require('../shells/list/initial')

_.implement('initial', list)
module.exports = _
