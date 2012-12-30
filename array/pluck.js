"use strict";

var _ = require('../'),
    list = require('../shell/array/pluck')

_.implement('pluck', list)
module.exports = _
